import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App flex flex-col min-h-[100vh] bg-beige">
      <Navbar />
      <div className="body">
        <Toaster />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
