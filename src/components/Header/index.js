import React from 'react';
import {Container, Row, StyledLink} from './styles';

const Header = ({titulo}) => {
    return (
        <Container>
            
            <Row>
                <StyledLink to="/">
                    <h1>
                        {titulo}
                    </h1>
                </StyledLink>

                <StyledLink to="/upload">Upload Image</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                
            </Row>
                  
        </Container>
    )
}

export default Header;