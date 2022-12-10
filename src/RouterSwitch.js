import App from "./component/App";
import About from "./component/About";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import { TitleProvider } from "./titleContext";

function RouterSwitch() {
    return (
      
      <BrowserRouter>
      <TitleProvider>
        <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/moviefinder" />}/>
        <Route path="/moviefinder" element={<App/>}/>
        <Route path="/moviefinder/about" element={<About/>}/>
        <Route path="/moviefinder/:id" element={<Main/>}/>
      </Routes>
      </TitleProvider>
      </BrowserRouter>
    );
  }
  
  export default RouterSwitch;