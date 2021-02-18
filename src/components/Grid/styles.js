import styled from 'styled-components';
import COLORS from '../../styles/colors';

export const CustomGrid = styled.div`
    padding: 50px;
    display: grid;

    //util
    //https://codepen.io/tvweinstock/pen/wegZEW/

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

    //pra imagem nao escapar da tela
    overflow: hidden;
`;

export const Image = styled.img`
    border-style: solid;
    background-color: ${COLORS.cinzaClaro};
    padding: 10px;
    border-width: 1px;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
    width: 65%;
    height: auto;
`;