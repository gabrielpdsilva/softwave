import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import FileUploader from './pages/FileUploader';
import About from './pages/About';

import GlobalStyles from './styles/GlobalStyles';

//font:
//https://fontsarena.com/w95fa-by-fontsarena/

//util:
//https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header title="Softwave"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/upload" element={<FileUploader/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
