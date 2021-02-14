import styled from 'styled-components';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/9648910/how-to-set-the-background-color-of-the-whole-page-in-css

export const Container = styled.div`

    // usado pra manter toda a tela verde, necessario alterar depois
    // provavelmente adicionando esse estilo como Global pelo styled components
    //* {
    //    background-color: ${COLORS.verde};
    //}
    //background-color: ${COLORS.verde};
    //height: 100vh;

`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const CentralizedContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;