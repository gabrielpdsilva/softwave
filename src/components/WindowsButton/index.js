import React from 'react';
import {Button, Icon} from './styles';
const WindowsButton = ({onPress, image, title}) => {

    return(
        <Button onClick={onPress}>               
                {
                    image && <Icon src={image} alt="Logo"/>
                }
                {title}
        </Button>
    );
}

export default WindowsButton;