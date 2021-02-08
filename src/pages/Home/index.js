import React, { useState, useEffect } from 'react';
import {Container, CentralizedContent} from './styles';

import {storage} from '../../firebase';

import Loader from 'react-loader-spinner';
import Grid from '../../components/Grid';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

const Home = () => {

    const valorInicial = [];
    const [urls, setUrls] = useState(valorInicial);

    const [imagesLoading, setImagesLoading] = useState(true);
    
    const getImageUrlsFromStorage = async () => {
        let result = await storage.ref("images/").listAll();
        let allUrls = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(allUrls);
    }

    const loadImages = async () => {
        const allUrls = await getImageUrlsFromStorage();
        setUrls(allUrls);
        console.log("URLS: ", urls);
        setImagesLoading(false);
    }

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        loadImages();
    }, []);

    return (
        <Container>
            <CentralizedContent>
            
            {
            imagesLoading ?
            
                <Loader
                    type="Oval"
                    color={COLORS.rosa}
                    height={100}
                    width={100}
                    //timeout={1000} //1 sec
                />
            :
                <Grid urls={urls}/>   
            }
            </CentralizedContent>
        </Container>
    );
}

export default Home;