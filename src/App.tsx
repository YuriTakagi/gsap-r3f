import About from "./components/About";
import CanvasContainer from "./components/CanvasContainer";
import Header from "./components/Header";
import Article from "./components/Article";
import Company from "./components/Company";
import Recruit from "./components/Recruit";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="h-screen w-full fixed top-0">
        <CanvasContainer />
      </div>
      <Header />
      <Article />
      <Company />
      <About />
      <Recruit />
      <Contact />
    </>
  );
}

export default App;
