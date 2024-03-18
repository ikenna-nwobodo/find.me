import Home from "./Home";
import Nav from "./components/Nav";
import Facts from "./sections/Facts";
import Footer from "./sections/Footer";
import Person from "./sections/Person";
import Stats from "./sections/Stats";

function App() {
  return (
    <div className="App bg-white min-h-screen flex flex-col relative items-center">
      <Nav />
      <div className="bg-primary w-full p-4 flex flex-col relative overflow-hidden items-center min-h-[90vh] md:min-h-screen">
        <Home />
        <div className="bg-home absolute h-full w-full top-0 bg-contain opacity-20"></div>
      </div>
      <div className="p-4 flex flex-col relative items-center min-h-screen bg-white w-full">
        <Stats />
      </div>
      <div className="p-4 flex flex-col gap-10 relative items-center bg-white min-h-screen w-full">
        <Facts />
        <Person />
      </div>
      <div className="p-4 flex flex-col gap-10 relative items-center w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
