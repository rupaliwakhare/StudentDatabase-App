import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./Component/Registration";
import Inquiry from "./Component/Inquiry";
import Demo from "./Component/Demo"
import Registered from "./Component/Registered";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/registered" element={<Registered />} />
      </Routes>
    </Router>
  );
}

export default App;
