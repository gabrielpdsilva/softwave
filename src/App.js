import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import FileUploader from './pages/FileUploader';
import About from './pages/About';
import NotFound from './pages/NotFound';

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
          <Route path="/cadastro" element={<Registration/>}/>
          <Route path="/upar" element={<FileUploader/>}/>
          <Route path="/sobre" element={<About/>}/>

          {/*TODO*/}
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
