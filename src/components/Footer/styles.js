import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Container = styled.div`
    //display: flex;
//    display: flex;
//    align-items: center;
    height: 45px;
    background-color: ${COLORS.cinzaClaro};
    border-width: 1px;
    border-style: solid;
    border-color: #FFFFFF #808080 #808080 #FFFFFF;


    //width: 100%;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Data = styled.div`
    background-color: ${COLORS.cinzaClaro};
    padding: 7px;
    border-style: solid;
    border-color: #808080 #FFFFFF #FFFFFF #808080;
    border-width: 1px;
    margin-left: auto;
    margin-right: 5px;
`;