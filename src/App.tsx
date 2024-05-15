import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6">
        <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default App;
