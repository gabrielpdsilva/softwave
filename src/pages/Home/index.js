import React, { useState, useEffect } from 'react';
import {Container, CentralizedContent} from './styles';

import {storage} from '../../firebase';

import Loader from 'react-loader-spinner';
import Grid from '../../components/Grid';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

const Home = () => {

    const initialValue = [];
    const [urls, setUrls] = useState(initialValue);
    const [imagesLoading, setImagesLoading] = useState(true);
    const [imagesExist, setImagesExist] = useState(false);

    const storageHasImages = (data) => {
        if(data.items.length > 0) return true;
        return false;
    }
    
    const getImageUrlsFromStorage = async () => {
        const result = await storage.ref("images/").listAll();

        if(!storageHasImages(result)) {
            console.log("No images here...");
            return;
        }
        console.log("There are images!");
        setImagesExist(true);

        const allUrls = result.items.map(imageRef => imageRef.getDownloadURL());
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
        document.title = "SOFTWAVE";
        loadImages();
    }, []);

    if(imagesLoading) {
        return (
            <Container>
                <CentralizedContent>
                    <Loader
                        type="Oval"
                        color={COLORS.rosa}
                        height={100}
                        width={100}
                        //timeout={1000} //1 sec
                    />
                </CentralizedContent>
            </Container>
        );
    }

    return (
        <Container>
            <CentralizedContent>
            {
                imagesExist ?
                    <Grid urls={urls}/>  
                :
                    <h1>Ainda não foram adicionadas imagens.</h1>         
            }
            </CentralizedContent>
        </Container>
    );
}

export default Home;