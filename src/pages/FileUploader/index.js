import React, {useState, useEffect} from 'react';
import WindowsBox from '../../components/WindowsBox';
import WindowsButton from '../../components/WindowsButton';
import {storage} from '../../firebase';
import TransferIcon from '../../images/transfer.png';

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
        Progress,
        CentralizedContent
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

            <WindowsBox logo={TransferIcon} title="Upar Imagem">
                <CentralizedContent>

                    <Title>Upar Imagem</Title>
                    <Text>Escolha uma imagem incrível para upar no Softwave!</Text>

                    <Row>
                        <p>Categoria: </p>
                        <Select value={category} onChange={handleSelect}>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="doomerwave">Doomer Wave</option>
                            <option value="synthwave">Synthwave</option>
                            <option selected value="vaporwave">Vaporwave</option>
                        </Select>
                    </Row>
                    <Image src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>
                
                    <Row>
                    <p> Progresso:</p>
                    <Progress value={progress} max="100"/>
                    </Row>
                    <Row>
                        <FileInput>
                            <input type="file" onChange={handleChange}/>
                        </FileInput>

                    <WindowsButton title="Enviar" onPress={handleUpload}/>
                    </Row>
                </CentralizedContent>

            </WindowsBox>
   
        </Container>
    )
}

export default FileUploader;