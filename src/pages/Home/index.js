import React, { useState, useEffect } from 'react';
import {Container, Row} from './styles';
import Frame from '../../components/Frame';

import {storage} from '../../firebase';

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

const Home = () => {

    const valorInicial = [];
    const [urls, setUrls] = useState(valorInicial);

    const getImageUrlsFromStorage = async () => {
        let result = await storage.ref("images/").listAll();
        let allUrls = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(allUrls);
    }

    const loadImages = async () => {
        const allUrls = await getImageUrlsFromStorage();
        setUrls(allUrls);
        console.log("URLS: ", urls);
    }

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        loadImages();
    }, []);

    return (
        <Container>

            <Row>
                {urls.map((url, index) => (
                    <div key={index}>  
                        <Frame imagem={url}/>
                    </div>
                ))}
            </Row>
                    
        </Container>
    );
    
}

export default Home;