import { useState, useEffect } from "react";
// import "./Demo.css";

function Demo() {
  const [data, setData] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    const existing = JSON.parse(localStorage.getItem("demoData")) || [];
    const newEntry = { name: "Demo User", time: new Date().toLocaleString() };
    const updated = [...existing, newEntry];
    localStorage.setItem("demoData", JSON.stringify(updated));
    setData(updated);
    setDisabled(true);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("demoData")) || [];
    setData(stored);
  }, []);

  return (
    <div className="demo-container">
      <h2>Demo Page</h2>
      <button onClick={handleClick} disabled={disabled}>
        {disabled ? "Demo Submitted" : "Submit Demo"}
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

export default Demo;
