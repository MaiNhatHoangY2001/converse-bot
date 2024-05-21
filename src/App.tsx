import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
