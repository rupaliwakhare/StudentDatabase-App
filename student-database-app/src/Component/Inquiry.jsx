import { useState, useEffect } from "react";
import "./Inquiry.css";

function Inquiry() {
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    const existing = JSON.parse(localStorage.getItem("inquiryData")) || [];
    const newEntry = {
      name: "Inquiry User",
      time: new Date().toLocaleString(),
    };
    const updated = [...existing, newEntry];
    localStorage.setItem("inquiryData", JSON.stringify(updated));
    setData(updated);
    setDisabled(true);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("inquiryData")) || [];
    setData(stored);
  }, []);

  return (
    <div className="inquiry-container">
      <h2>Inquiry Page</h2>
      <button onClick={handleClick} disabled={disabled}>
        {disabled ? "Inquiry Submitted" : "Submit Inquiry"}
      </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{d.name}</td>
              <td>{d.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inquiry;
