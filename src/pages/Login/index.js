import React, {useEffect} from 'react';
import MessageWindow from '../../components/MessageWindow';

const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>    
            <MessageWindow title="Meu título" content="Obrigado. Se você curtiu, é nozes."/>
        </div>
    );

}

export default Login;