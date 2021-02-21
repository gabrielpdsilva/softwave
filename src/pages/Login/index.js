import React, {useEffect} from 'react';
import MessageWindow from '../../components/MessageWindow';
import WindowBox from '../../components/WindowBox';

const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>    
            <MessageWindow title="Meu título" content="Obrigado. Se você curtiu, é nozes."/>
            <WindowBox title="Upar Imagem">
                <select>
                    <option>aaaOi</option>
                    <option>aaaOi</option>
                </select>
            </WindowBox>
        </div>
    );
}

export default Login;