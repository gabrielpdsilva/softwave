import React, {useState} from 'react';
import WindowsButton from '../../components/WindowsButton';
import Frame from '../../components/Frame';
import { Container, Row } from './styles';
import wallpaper from '../../aesthetics.jpg'

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
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
            <Frame imagem={wallpaper} nomeImagem="Retro 90s" width={200} height={100}/>
        
        </Container>
    )
}

export default FileUploader;