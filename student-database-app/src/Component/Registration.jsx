import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("students")) || [];
    localStorage.setItem("students", JSON.stringify([...existing, formData]));
    alert("Student Registered!");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="registration-container">
      <h2>Student Ragistration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
