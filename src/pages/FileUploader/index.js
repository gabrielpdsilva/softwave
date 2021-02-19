import React, {useState, useEffect} from 'react';
import WindowsButton from '../../components/WindowsButton';
import {storage} from '../../firebase';

import {
        Container,
        Row,
        FileInput,
        Box,
        Select,
        Text,
        Title,
        Subtitle,
        Image,
        Progress
    } from './styles';

// util:
// https://www.youtube.com/watch?v=8r1Pb6Ja90o

const FileUploader = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [category, setCategory] = useState("vaporwave");

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    console.log(image);

    const handleUpload = () => {

        if(!image) {
            alert("Nenhuma imagem foi selecionada.");
            return;
        }

        const uploadTask = storage.ref(`images/${category}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images/${category}/`)
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                        alert("Successful");
                    });
            }
        );
        setUrl("");
    };

    const handleSelect = (event) => {
        setCategory(event.target.value);
    }

    useEffect(() => {
        document.title = "Upar Imagem";
    }, []);

    console.log("image -> ", image);

    return (
        <Container>

            <Box>
                
                <Title>Upar Imagem</Title>
                <Text>Escolha uma imagem incrível para upar no Softwave!</Text>
                
                <Image src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>
               
                <Row>
                    <Subtitle>Categoria: </Subtitle>
                    <Select value={category} onChange={handleSelect}>
                        <option value="cyberpunk">Cyberpunk</option>
                        <option value="doomerwave">Doomer Wave</option>
                        <option value="synthwave">Synthwave</option>
                        <option selected value="vaporwave">Vaporwave</option>
                    </Select>
                </Row>

                <Progress value={progress} max="100"/>

                <Row>
                    <FileInput>
                        <input type="file" onChange={handleChange}/>
                    </FileInput>

                   <WindowsButton texto="Enviar" onPress={handleUpload}/>
                </Row>
            </Box>
            
        </Container>
    )
}

export default FileUploader;