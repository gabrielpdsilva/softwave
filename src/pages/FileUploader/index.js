import React, {useState} from 'react';
import WindowsButton from '../../components/WindowsButton';
import { Container, Row, Box} from './styles';
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

                <h1>Upload image</h1>
                <p>Choose an awesome image to upload to Softwave!</p>
                
                <img src={url || "https://i.imgur.com/YTmPA0u.jpg"} alt="firebase-image"/>

                <Row>    
                    <input type="file" onChange={handleChange}/>
                    <WindowsButton texto="Enviar" onPress={handleUpload}/>
                </Row>

                {!url && <progress value={progress} max="100"/>}
                
            </Box>
            
        </Container>
    )
}

export default FileUploader;