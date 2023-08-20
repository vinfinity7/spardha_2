import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";

function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/football" element={<Users />} />
          <Route path="/rugby" element={<Messages />} />
          <Route path="/ttenis" element={<Analytics />} />
          <Route path="/volleyball" element={<FileManager />} />
          <Route path="/basketball" element={<Order />} />
          <Route path="/cricket" element={<Saved />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    </div>
  );
}

export default App;
