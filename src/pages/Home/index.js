import React, { useState, useEffect } from 'react';
import {Container, Row, CustomGrid} from './styles';
import Frame from '../../components/Frame';

import {storage} from '../../firebase';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



import Loader from 'react-loader-spinner'

// util
// https://stackoverflow.com/questions/64708353/how-to-display-all-the-images-from-firebase-storage-in-react

const Home = () => {

    const images = ['https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg']

    const valorInicial = [];
    const [urls, setUrls] = useState(valorInicial);

    const [ImagesLoading, setImagesLoading] = useState(true);
    
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

    if(ImagesLoading) {
        return (
            <Container>

                <h1>Oi</h1>
                
                <Loader
                    type="Oval"
                    color="#d685ff"
                    height={100}
                    width={100}
                    //timeout={1000} //1 sec
                />
            </Container>
        )
    }

    return (
        <Container>


{/*}
            <GridList cellHeight='auto' cols={3}>
                {urls.map((url, index) => (
                    <GridListTile key={index} cols={url.cols || 1}>
                        <Frame imagem={url}/>
                    </GridListTile>
                ))}
            </GridList>
*/}

{
/*
<GridList cellHeight='auto' cols={3}>
                {urls.map((url, index) => (
                    <GridListTile key={index}>
                        <Frame imagem={url}/>
                        <img src={url}/>
                    </GridListTile>
                ))}
            </GridList>
*/
}

   
        
            
            <CustomGrid>
                {urls.map((url, index) => (
                    <div key={index}> 
                        <a href={url} target="_blank"> 
                            <img src={url} style={{borderStyle: 'solid', backgroundColor: '#c3c3c3', padding: 10, borderWidth: 1, borderColor: '#FFFFFF #808080 #808080 #FFFFFF', width: '50%'}}/>
                        </a>
                    </div>
                ))}
            </CustomGrid>

            

        
            
                    
        </Container>
    );
    
}

export default Home;