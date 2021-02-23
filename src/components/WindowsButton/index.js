import React from 'react';
import {Button, Icon} from './styles';
const WindowsButton = ({onClick, image, title, disabled}) => {

    return(
        <Button onClick={onClick} disabled={disabled}>               
                {
                    image && <Icon src={image} alt="Logo"/>
                }
                {title}
        </Button>
    );
}

export default WindowsButton;