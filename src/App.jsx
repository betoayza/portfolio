import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Components from "./index/indexComponents";
import { NavBar } from "./components/container/NavBar";

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Components.Home />} />

        <Route exact path="/contact" element={<Components.Contact />} />

        <Route exact path="/about" element={<Components.About />} />

        <Route exact path="/achievements" element={<Components.Achievements />} />

        <Route exact path="*" element={<Components.Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
