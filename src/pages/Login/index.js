import React, {useEffect, useState} from 'react';
import WindowsMessage from '../../components/WindowsMessage';

const Login = () => {

    const [alertVisible, setAlertVisible] = useState(true);
    const onClick = () => setAlertVisible(false);

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div style={{justifyContent: 'center', display: 'flex'}}>
            {
            alertVisible &&
            
                <WindowsMessage
                    onClick={onClick}
                    title="Meu título"
                    content="Obrigado. Se você curtiu, é nozes."
                />
            }
        </div>
    );
}

export default Login;