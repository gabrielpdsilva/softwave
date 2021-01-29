import React, { useState, useEffect } from 'react';
import {Container} from './styles';
import Frame from '../../components/Frame';
import {Link} from 'react-router-dom';

import {storage} from '../../firebase';

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

const Home = () => {

    const valorInicial = [];
    const [urls, setUrl] = useState(valorInicial);

    const getImageUrlsFromStorage = async () => {
        let result = await storage.ref("images/").listAll();
        let allUrls = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(allUrls);
    }

    const loadImages = async () => {
        const allUrls = await getImageUrlsFromStorage();
        setUrl(allUrls);
        console.log("URLS: ", urls);
    }

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        loadImages();
    }, []);

    return (
        <Container>
            
            <Link to="/upload">Upload image</Link> 

            <div>
                {urls.map((url, index) => (
                    <div key={index}>         
                        <Frame imagem={url} nomeImagem="Retro 90s" width={200} height={100}/>
                    </div>
                ))}
            </div>
                    
        </Container>
    );
    
}

export default Home;