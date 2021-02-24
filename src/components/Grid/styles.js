import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const CustomGrid = styled.div`
    padding: 50px;
    display: grid;

    //util
    //https://codepen.io/tvweinstock/pen/wegZEW/

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    max-width: 100%;
    width: 92%;
    margin: 0 auto;

    //pra imagem nao escapar da tela
    //overflow: hidden;
    height: 500px;
    overflow-y: scroll;
`;

export const Image = styled.img`
    
    width: 65%;
    height: auto;
`;