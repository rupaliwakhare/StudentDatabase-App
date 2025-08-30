// import "./Registered.css";

function Registered() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  return (
    <div className="registered-container">
      <h2>Registered Students</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Registered;
