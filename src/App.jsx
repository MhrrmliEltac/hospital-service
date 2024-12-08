import React from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
