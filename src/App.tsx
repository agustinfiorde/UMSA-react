import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import NavBar from "./components/nav-bar/NavBar";
import { RickAndMortyProvider } from "./hooks/RickAndMortyContext";

function App() {
  return (
    <BrowserRouter>
      <RickAndMortyProvider>
        <NavBar />
        <Router />
      </RickAndMortyProvider>
    </BrowserRouter>
  );
}

export default App;
