import "./App.css";
import { NavBar } from "./components/navBar";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Works } from "./pages/works";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
    </div>
  );
}

export default App;

