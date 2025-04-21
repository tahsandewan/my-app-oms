import React, { useState, Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./index.css";

function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;