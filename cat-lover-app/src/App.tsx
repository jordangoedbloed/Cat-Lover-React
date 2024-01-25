import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Kitties from "./components/Kitties";
import CreateKittyPage from "./components/CreateKittyPage";
import KittyDetails from "./components/KittyDetails"; // Import the KittyDetails component
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/kitties" element={<Kitties />} />
          <Route path="/kitties/create" element={<CreateKittyPage />} />
          <Route path="/kitties/:id" element={<KittyDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
