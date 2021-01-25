import React from 'react';

import GlobalFonts from '../../styles/fonts/fonts';
import GlobalStyle from '../../GlobalStyle';
import Header from '../../components/Header'
import Box from '../../components/Box'
import FileUpload from '../../FileUpload'
const Home = () => {
    return (
        <div>
            <header>
                <Header/>
                <FileUpload/>
                <GlobalFonts/>
                <GlobalStyle/>
                <Header/>
            </header>
        </div>
    );
}

export default Home;