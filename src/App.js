import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PortfolioEdit from "./components/PortfolioEdit";
import Theme from "./components/Theme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/edit/:id" Component={PortfolioEdit} />
        <Route path="/theme" Component={Theme} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
