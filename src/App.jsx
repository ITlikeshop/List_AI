import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AITable from "./page/aitable";
import AIDetail from "./page/aidetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AITable />} />
        <Route path="/ai/:id" element={<AIDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
