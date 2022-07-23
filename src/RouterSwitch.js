import App from "./component/App";
import About from "./component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";

function RouterSwitch() {
    return (
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default RouterSwitch;