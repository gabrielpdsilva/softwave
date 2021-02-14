import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FileInput = styled.div`
    input {
        width: 200px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;  
`;

export const Box = styled.div`

    box-sizing: border-box;
    max-width: 1000px;
    width: 500px;

    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    border-style: solid;
    border-width: 1px;

    background-color: ${COLORS.cinzaClaro};
//    margin: auto;
//    width: 30%;
    height: 50%;
    text-align: center;
    margin-bottom: 100px;
`;