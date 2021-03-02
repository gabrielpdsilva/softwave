import styled from 'styled-components';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/18368202/how-can-i-set-the-color-for-the-progress-element
// https://blog.campvanilla.com/building-a-progress-bar-component-using-reactjs-styled-components-516dc2c3075a

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FileInput = styled.input`
    width: 200px;
`;

export const Progress = styled.progress`
    margin-left: 10px;
    width: 250px;
    appearance: none;

    ::-moz-progress-bar {
        background-color: ${COLORS.azulEscuro};
    }
    ::-webkit-progress-value {
        background-color: ${COLORS.azulEscuro};
    }
`;

export const CentralizedContent = styled.div`
    text-align: center;
`;

export const Image = styled.img`
    padding: 30px;
    width: 30%;
    height: 30%;
`;

export const Title = styled.h1`
    margin: 5px;
`;

export const Subtitle = styled.h2`
    margin-right: 10px;
    color: ${COLORS.preto};
`;

export const Text = styled.p`
    color: ${COLORS.preto};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 10px;
`;

export const Select = styled.select`
    border: solid;
    border-width: 2px;
    border-color: ${COLORS.cinzaEscuro} ${COLORS.branco} ${COLORS.branco} ${COLORS.cinzaEscuro};
    background-color: ${COLORS.branco};

    //-webkit-appearance: none;
    //-moz-appearance: none;

    option {
        background-color: ${COLORS.branco};
    }
`;