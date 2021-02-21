import styled from 'styled-components';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/9648910/how-to-set-the-background-color-of-the-whole-page-in-css

// https://styled-components.com/docs/basics#passed-props
// https://stackoverflow.com/questions/54494496/how-to-style-select-options-with-styled-components-reactjs

export const Container = styled.div`
    margin: 5px;
`;

export const Title = styled.h1`
    margin: 5px;
`;

export const Subtitle = styled.h2`
    margin-right: 10px;
    color: ${COLORS.preto};
`;

export const Text = styled.p`
    color: ${COLORS.azulEscuro};
`;

export const Select = styled.select`
    border: solid;
    border-width: 2px;
    border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    background-color: ${COLORS.branco};

    option {
        background-color: ${COLORS.branco};
    }
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