import React from 'react';
import {Container, Row, StyledLink} from './styles';

const Header = ({title}) => {
    return (
        <Container>
            <Row>
                <StyledLink to="/">
                    <h1>{title}</h1>
                </StyledLink>
            </Row>
        </Container>
    )
}

export default Header;