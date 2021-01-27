import React, {useState} from 'react';
import WindowsButton from '../../components/WindowsButton';
import { Container, Row } from './styles';

const FileUploader = () => {

    const [imagem, setImagem] = useState(null);
    const [url, setUrl] = useState("");

    const handleChange = e => {
        if(e.target.files[0]) {
            setImagem(e.target.files[0]);
        }
    };

    console.log(imagem);

    const handleUpload = () => {
        alert("Clicou em Enviar");
    };
    return (
        <Container>
            
            <h1>Upar imagem</h1>
            <Row>    
                <input type="file" onChange={handleChange}/>
                <WindowsButton texto="Enviar" onPress={handleUpload}/>
            </Row>
            
        </Container>
    )
}

export default FileUploader;