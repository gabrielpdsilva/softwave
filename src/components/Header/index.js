import React from 'react';
import {Container, Row, StyledLink} from './styles';

const Header = ({title}) => {
    return (
        <Container>
            <Row>
                <StyledLink to="/">
                    <h1>{title}</h1>
                </StyledLink>
                <StyledLink to="/upar">Upar Imagem</StyledLink>
                <StyledLink to="/sobre">Sobre</StyledLink>
            </Row>
        </Container>
    )
}

export default Header;