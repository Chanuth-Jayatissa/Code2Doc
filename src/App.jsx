

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/login" element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;
