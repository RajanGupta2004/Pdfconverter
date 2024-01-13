import { useState } from "react";
import "./App.css";
import { initialdata } from "./data";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function App() {
  const [data, setData] = useState(initialdata);
  const handleExport = () => {
    const doc = new jsPDF();
    doc.autoTable({
      html: "#Mytable",
      theme: "grid",
    });
    doc.save("table.pdf");
  };

  return (
    <>
      <button type="button" onClick={handleExport} className="btn">
        Export
      </button>
      <table id="Mytable">
        <thead className="heading">
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Products</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
