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

    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [failAlertVisible, setFailAlertVisible] = useState(false);

    const onSuccessClick = () => setSuccessAlertVisible(false);
    const onFailureClick = () => setFailAlertVisible(false);

    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    console.log(image);

    const handleUpload = () => {

        if(!image) {
            setFailAlertVisible(true);
            return;
        }

        const file = image;
        const  fileType = file['type'];

        const validImageTypes = ['image/jpeg', 'image/png'];
        if (!validImageTypes.includes(fileType)) {
            console.log("invalid image...");
            setFailAlertVisible(true);
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
                        setSuccessAlertVisible(true);
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

                    <Row>
                        <p>Categoria: </p>
                        <Select value={category} onChange={handleSelect}>
                            <option value="cyberpunk">Cyberpunk</option>
                            <option value="doomerwave">Doomer Wave</option>
                            <option value="synthwave">Synthwave</option>
                            <option defaultValue value="vaporwave">Vaporwave</option>
                        </Select>
                    </Row>

                    <Image src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>
                
                    <Row>
                        <p> Progresso:</p>
                        <Progress value={progress} max="100"/>
                    </Row>

                    <Row>
                        <FileInput type="file" onChange={handleChange}/>
                        <WindowsButton
                            title="Enviar"
                            onClick={handleUpload}
                            disabled={failAlertVisible || successAlertVisible ? true : false}
                        />
                    </Row>

                </CentralizedContent>

            </WindowsBox>

            {
            successAlertVisible &&   
                <WindowsMessage
                    onClick={onSuccessClick}
                    title="Sucesso"
                    content="Imagem upada com sucesso!"
                />
            }

            {
            failAlertVisible &&   
                <WindowsMessage
                    onClick={onFailureClick}
                    title="Erro"
                    content="Você precisa selecionar uma imagem válida pra continuar!"
                />
            }
   
        </Container>
    )
}

export default FileUploader;