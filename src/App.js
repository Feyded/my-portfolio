import "./App.css";
import { NavBar } from "./components/navBar";
import { About } from "./pages/about";
import { Certificate } from "./pages/certificate";
import { Home } from "./pages/home";
import { Works } from "./pages/works";
function App() {
  return (
    <div className="App">
       <NavBar />
      <Home />
      <About />
      <Works />
      <Certificate/>
    </div>
  );
}

export default App;
