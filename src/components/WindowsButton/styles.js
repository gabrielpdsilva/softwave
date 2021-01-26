import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Botao = styled.div`
    // util:
    // https://codepen.io/supember/pen/BKmgNZ
    button {
        width: 90px;
        height: 35px;
        margin: 4px;
        color: black;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        border-width: 1px;
        background-color: ${COLORS.cinzaClaro};
        border-color:#FFFFFF #808080 #808080 #FFFFFF;
    }
`;