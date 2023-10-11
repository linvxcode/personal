import "./App.css";
import Nav from "./Navbar/Nav";
import SecondPage from "./Second Page/SecondPage";
import TriplePage from "./Trple Page/TriplePage";
import First from "./FirstPage/First";
import Canvas from "./Layout/Canvas";
import SkillPage from "./SkillPage/SkillPage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="absolute top-0 w-[100%] px-0">
        <Nav />
      </div>
      <div className="absolute top-0">
        <Canvas />
      </div>
      <div
        id="home"
        className="relative gradient-col  flex justify-center max-md:h-[400px] max-md:mt-[100px] items-center flex-row flex-wrap mt-[100px] "
      >
        <First />
      </div>
      <div
        id="about"
        className="relative clipp max-md:mt-[300px] max-sm:mt-[300px] max-[390px]:mt-[700px] px-12 lg:px-24 flex "
      >
        <SecondPage />
      </div>
      <div id="skill" className="relative  px-12 lg:px-24 flex ">
        <SkillPage />
      </div>
      <div className="relative  px-12 lg:px-24 flex   "></div>

      <div id="triple" className="relative px-12 lg:px-24 flex mb-[50px]">
        <TriplePage />
      </div>
      <div className="max-md:mt-[80rem] mt-[750px] xl:mt-[200px] max-[768px]:mt-[90rem] relative px-12 lg:px-24 max-[450px]:mt-[90rem]"></div>
      <div className="mt-[100px] relative lg:px-24 px-12 bg-[#e2e8f0] dark:bg-[#232425]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
