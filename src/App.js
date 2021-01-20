import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import GlobalFonts from './styles/fonts/fonts';

import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <header>
        <FileUpload/>
        <GlobalFonts/>
        <GlobalStyle/>
      </header>
    </div>
  );
}

export default App;
