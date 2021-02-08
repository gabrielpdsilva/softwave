import styled from 'styled-components';

export const CustomGrid = styled.div`
    padding: 50px;
    display: grid;

    //util
    //https://codepen.io/tvweinstock/pen/wegZEW/

    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;

   
    //pra imagem nao escapar da tela
    overflow: hidden;
`;