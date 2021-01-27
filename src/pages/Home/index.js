import React from 'react';
import GlobalFonts from '../../styles/fonts/fonts';
import GlobalStyle from '../../GlobalStyle';
import {Container} from './styles';
import Frame from '../../components/Frame';
import wallpaper from '../../aesthetics.jpg';

const Home = () => {
    return (
        <Container>
                
            <h1>Oiaa</h1>
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
        
        </Container>
    );
}

export default Home;