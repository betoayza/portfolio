import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as Components from "./components/indexComponents";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Components.Home />} />

          <Route exact path="/contact" element={<Components.Contact />} />

          <Route exact path="/about" element={<Components.About />} />

          <Route exact path="*" element={<Components.Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
