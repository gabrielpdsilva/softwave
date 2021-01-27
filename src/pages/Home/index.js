import React from 'react';
import {Container} from './styles';
import Frame from '../../components/Frame';
import wallpaper from '../../aesthetics.jpg';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            
            <Link to="/upload">Oi</Link>
            
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
        
        </Container>
    );
}

export default Home;