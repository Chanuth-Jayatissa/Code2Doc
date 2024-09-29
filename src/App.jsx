

import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/login" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </div>
  );
};

export default App;
