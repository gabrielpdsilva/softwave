import React from 'react';

import GlobalFonts from '../../styles/fonts/fonts';
import GlobalStyle from '../../GlobalStyle';
import Header from '../../components/Header'
import FileUpload from '../../components/FileUpload'
import WindowsButton from '../../components/WindowsButton';
import logo from '../../windows-logo.png';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <header>
                <Header/>
                <FileUpload/>
                <GlobalFonts/>
                <GlobalStyle/>
                <Header/>
                <WindowsButton imagem={logo} texto="Start"/>
                <Footer/>
            </header>
        </div>
    );
}

export default Home;