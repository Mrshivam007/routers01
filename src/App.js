import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";

function App() {
  return (
   <>
   <Header />
   <Routes>
      <Route path="routers01/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact />} />
    </Routes>
   </>
  );
}

export default App;
