import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Container = styled.div`
    height: 90vh;
    background-color: ${COLORS.verde};
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: auto;
`;

export const Box = styled.div`
    background-color: ${COLORS.verde};
    margin: auto;
    width: 30%;
    height: 35%;
    text-align: center;
    
`;