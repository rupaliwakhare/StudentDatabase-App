import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    branch:"",
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
    setFormData({ name: "", branch:"", email: "", phone: "" });
  };

  return (
    <div className="registration-container">
      <h2>Student Ragistration</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Name : </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label >Branc : </label>
       
        <select name="" id="">
          <option value="">Select your branch</option>
          <option value="">Front-End</option>
          <option value="">Back-End</option>
          <option value="">Full-stack</option>
          <option value="">Application</option>
          <option value="">Ui-Ux</option>
          <option value="">Graphics</option>
        </select>
       {/* console.log(select); */}
       <br />
       
        <label>Email : </label>
       
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Phone : </label>
        
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
