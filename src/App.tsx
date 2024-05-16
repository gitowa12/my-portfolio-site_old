import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Portfolio from "./components/Portfolio";
import TopPage from "./pages/TopPage";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6">
        <Header></Header>
        <TopPage></TopPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
