import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Caixa = styled.div`
    //width: ${props => props.width}px;
    border: 1px;
    border-style:solid;
    border-color: #FFFFFF #808080 #808080 #FFFFFF;
    //height: ${props => props.height + 25}px;
    padding: 5px;
    background-color: ${COLORS.cinzaClaro};
    margin: 10px;
`;