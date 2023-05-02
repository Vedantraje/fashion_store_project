import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
function App() {
  return (
      <BrowserRouter ClassName="container-fluid">
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
