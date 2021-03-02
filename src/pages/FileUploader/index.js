import React, {useState, useEffect} from 'react';
import WindowsBox from '../../components/WindowsBox';
import WindowsButton from '../../components/WindowsButton';
import WindowsMessage from '../../components/WindowsMessage';
import {storage} from '../../firebase';
import transferIcon from '../../images/transfer.png';

import {
        Container,
        Row,
        FileInput,
        Select,
        Text,
        Title,
        Image,
        Progress,
        CentralizedContent
    } from './styles';

// util:
// https://www.youtube.com/watch?v=8r1Pb6Ja90o

const FileUploader = () => {

    // TODO
    // https://stackoverflow.com/questions/29805909/jquery-how-to-check-if-uploaded-file-is-an-image-without-checking-extensions

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [category, setCategory] = useState("vaporwave");

    const [textAlert, setTextAlert] = useState("");
    const [titleAlert, setTitleAlert] = useState("");

    const [alertVisible, setAlertVisible] = useState(false);

    const onAlertClick = () => setAlertVisible(false);

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const validFormat = (image) => {
        const file = image;
        const  fileType = file['type'];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!validImageTypes.includes(fileType)) {            
            return false;
        }
        return true;
    }

    console.log(image);

    const handleUpload = () => {

        if(!image || !validFormat(image)) {
            setTitleAlert("Erro");
            setTextAlert("Você precisa selecionar um tipo válido de imagem!");
            setAlertVisible(true);
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
                        setTitleAlert("Sucesso");
                        setTextAlert("A imagem foi upada com sucesso!");
                        setAlertVisible(true);
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

            <WindowsBox icon={transferIcon} title="Upar Imagem">
                <CentralizedContent>

                    <Title>Upar Imagem</Title>
                    <Text>Escolha uma imagem incrível para upar no Softwave!</Text>
                    
                    <Text>Formatos válidos: JPEG, PNG, GIF.</Text>
                   
                    <Row>
                        <Text>Categoria: </Text>
                        <Select value={category} onChange={handleSelect}>
                            <option value="anime">80's animes</option>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="doomerwave">Doomer Wave</option>
                            <option value="synthwave">Synthwave</option>
                            <option defaultValue value="vaporwave">Vaporwave</option>
                        </Select>
                    </Row>

                    <Image src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>
                
                    <Row>
                        <Text> Progresso:</Text>
                        <Progress value={progress} max="100"/>
                    </Row>

                    <Row>
                        <FileInput type="file" onChange={handleChange}/>
                        <WindowsButton
                            title="Enviar"
                            onClick={handleUpload}
                            disabled={alertVisible ? true : false}
                        />
                    </Row>

                </CentralizedContent>

            </WindowsBox>

            {
            alertVisible &&   
                <WindowsMessage
                    onClick={onAlertClick}
                    title={titleAlert}
                    content={textAlert}
                />
            }
   
        </Container>
    )
}

export default FileUploader;