import "./App.css";
import About from "./pages/About";
import Work from "./pages/Work";

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 font-NotoSansJP">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
