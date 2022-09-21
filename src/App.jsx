import React from "react";
import Issues from "./Issues";
import Details from "./Details";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Issues />} />
            <Route path="/issues/:id" element={<Details />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}
