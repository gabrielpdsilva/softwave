import React, { useState, useEffect } from 'react';
import {Container, CentralizedContent} from './styles';

import {storage} from '../../firebase';

import Loader from 'react-loader-spinner';
import Grid from '../../components/Grid';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

// hooks
// https://www.digitalocean.com/community/tutorials/react-replacing-component-lifecycles-with-useeffect
// https://www.digitalocean.com/community/tutorials/react-hooks

const Home = () => {

    const initialValue = [];
    const [urls, setUrls] = useState(initialValue);
    const [imagesLoading, setImagesLoading] = useState(true);
    const [imagesExist, setImagesExist] = useState(false);

    const [category, setCategory] = useState("cyberpunk");

    const storageHasImages = (data) => {
        if(data.items.length > 0) return true;
        return false;
    }
    
    const getImageUrlsFromStorage = async () => {
        //const result = await storage.ref("images/").listAll();
        const result = await storage.ref(`images/${category}/`).listAll();

        if(!storageHasImages(result)) {
            console.log("No images here...");
            return;
        }
        console.log("There are images!");
        setImagesExist(true);

        const allUrls = result.items.map(imageRef => imageRef.getDownloadURL());
        return Promise.all(allUrls);

    }

    /*
     *  funcao para pegar todas as imagens de todas as pastas. Ainda nao funcional.
     */
    const getAllImageUrlsFromStorage = async () => {

        //https://firebase.google.com/docs/storage/web/list-files
        //https://firebase.google.com/docs/storage/web/create-reference?hl=pt-br

        const storageRef = storage.ref();
        const listRef = storageRef.child('images/');

        listRef.listAll().then(res => {
            res.prefixes.forEach(folder => {
                console.log("Folder: ", folder);
                console.log("Folder's name: ", folder.name);
                // pegando uma imagem diretamente
                // let minhaImagem = folder.parent.child('shinji.png').getDownloadURL(); 
            })
        });
    }

    const loadImages = async () => {
        const allUrls = await getImageUrlsFromStorage();
        setUrls(allUrls);
        console.log("URLS: ", urls);
        setImagesLoading(false);
    }

    const handleSelect = (event) => {
        setCategory(event.target.value);
    }

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        document.title = "SOFTWAVE";
        loadImages();
    }, [category]); // vai entrar em ação assim que a categoria mudar.

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

                    <div>
                        <div style={{margin: 5}}>
                        
                            <p>{category}</p>

                            <select value={category} onChange={handleSelect}>
                                <option value="cyberpunk">Cyberpunk</option>
                                <option value="doomerwave">Doomer Wave</option>
                                <option value="synthwave">Synthwave</option>
                                <option selected value="vaporwave">Vaporwave</option>
                            </select>
                        </div>
                        <Grid urls={urls}/> 
                    </div>
                :
                    <h1>Ainda não foram adicionadas imagens.</h1>         
            }
            </CentralizedContent>
        </Container>
    );
}

export default Home;