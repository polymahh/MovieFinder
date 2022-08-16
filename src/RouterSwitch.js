import App from "./component/App";
import About from "./component/About";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import { TitleProvider } from "./titleContext";

function RouterSwitch() {
    return (
      
      <BrowserRouter>
      <TitleProvider>
        <Header/>
      <Routes>
        <Route path="/MovieFinder" element={<App/>}/>
        <Route path="/MovieFinder/about" element={<About/>}/>
        <Route path="/MovieFinder/main/:id" element={<Main/>}/>
      </Routes>
      </TitleProvider>
      </BrowserRouter>
    );
  }
  
  export default RouterSwitch;