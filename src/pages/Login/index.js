import React, {useEffect} from 'react';
import WindowsMessage from '../../components/WindowsMessage';
import WindowsBox from '../../components/WindowsBox';

const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>    
            <WindowsMessage title="Meu título" content="Obrigado. Se você curtiu, é nozes."/>
            <WindowsBox title="Upar Imagem">
                <select>
                    <option>aaaOi</option>
                    <option>aaaOi</option>
                </select>
            </WindowsBox>
        </div>
    );
}

export default Login;