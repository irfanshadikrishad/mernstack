import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import Error404 from "./components/Error404";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
