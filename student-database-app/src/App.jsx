import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Registration from "./Component/pages/Registration";
import Inquiry from "./Component/pages/Inquiry";
import Demo from "./Component/pages/Demo";
import Registered from "./Component/pages/Registered";
import Navbar from "./Component/pages/Navbar";

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
