import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import GlobalFonts from './styles/fonts/fonts';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header'
//font:
//https://fontsarena.com/w95fa-by-fontsarena/

//util:
//https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni

function App() {
  return (
    <div>
      <header>
        <Header/>
        <FileUpload/>
        <GlobalFonts/>
        <GlobalStyle/>
      </header>
    </div>
  );
}

export default App;
