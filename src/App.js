import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FileUploader from './pages/FileUploader';

import GlobalFonts from './styles/fonts/fonts';
import GlobalStyle from './GlobalStyle';
//font:
//https://fontsarena.com/w95fa-by-fontsarena/

//util:
//https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

function App() {
  return (
    <BrowserRouter>
      
      <GlobalFonts/>
      <GlobalStyle/>
      
      <Header titulo="Softwave"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/upload" element={<FileUploader/>}/>
        </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
