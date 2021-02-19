import styled from 'styled-components';
import COLORS from '../../styles/colors';

// util
// https://stackoverflow.com/questions/18368202/how-can-i-set-the-color-for-the-progress-element
// https://blog.campvanilla.com/building-a-progress-bar-component-using-reactjs-styled-components-516dc2c3075a

export const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FileInput = styled.div`
    input {
        width: 200px;
    }
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
    color: ${COLORS.azulEscuro};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Select = styled.select`
    border: solid;
    border-width: 2px;
    border-color: ${COLORS.branco} ${COLORS.cinzaEscuro} ${COLORS.cinzaEscuro} ${COLORS.branco};
    background-color: ${COLORS.cinzaClaro};

    option {
        background-color: ${COLORS.cinzaClaro};
    }
`;

export const Box = styled.div`

    box-sizing: border-box;
    max-width: 1000px;
    width: 500px;
    max-height: 75%;
    min-height: 300px;

    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    border-style: solid;
    border-width: 1px;

    background-color: ${COLORS.cinzaClaro};
//    margin: auto;
//    width: 30%;
    height: 60%;
    text-align: center;
    margin-bottom: 100px;
`;