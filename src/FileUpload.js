import React, {useState} from 'react';
// import { Container } from './styles';

const FileUpload = () => {

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
        <div>
            <h1>Upar imagem</h1>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload}>Enviar Imagem</button>
        </div>
    )
}

export default FileUpload;