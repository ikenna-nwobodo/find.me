import Home from "./Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App bg-black min-h-screen flex flex-col relative items-center">
      <Nav />
      <div className="bg-primary w-full p-4 flex flex-col relative items-center min-h-screen">
        <Home />
      </div>
    </div>
  );
}

export default App;
