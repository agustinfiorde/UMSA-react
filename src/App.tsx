import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
