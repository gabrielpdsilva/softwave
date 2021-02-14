import React, {useState} from 'react';
import WindowsButton from '../../components/WindowsButton';
import {Container, Row, FileInput, Box} from './styles';
import {storage} from '../../firebase';

// util:
// https://www.youtube.com/watch?v=8r1Pb6Ja90o

const FileUploader = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

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

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                        alert("Successful");
                    })
            }
        )
    };

    console.log("image -> ", image);
    return (
        <Container>

            <Box>
                
                <h1>Upar Imagem</h1>
                <p>Escolha uma imagem incrível para upar no Softwave!</p>
                
                <img style={{padding: 30, width: '50%'}} src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>
                
                <Row>
                    {!url && <progress value={progress} style={{marginLeft: 10, width: 250}} max="100"/>}
                </Row>

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