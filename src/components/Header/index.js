import React from 'react';
import {Container} from './styles';

const Header = ({titulo}) => {
    return (
        <Container>
            <h1>{titulo}</h1>
        </Container>
    )
}

export default Header;