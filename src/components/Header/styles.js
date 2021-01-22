import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Container = styled.div`
    //display: flex;
//    display: flex;
//    align-items: center;
    background-color: ${COLORS.cinzaClaro};

    border-width: 1px;
    border-style: solid;
    border-color:#FFFFFF #808080 #808080 #FFFFFF;
    // util:
    // https://codepen.io/supember/pen/BKmgNZ
    button {
        width: 80px;
        height: 35px;
        margin: 4px;
        color: black;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        border-width: 1px;
        background: ${COLORS.cinzaClaro};
        border-color:#FFFFFF #808080 #808080 #FFFFFF;
    }
/*
    * {

        margin:2px 2px 2px 0;
        float:right;
        width:14px;
        height:13.5px;
        background:#C0C0C0;
        border-width:1px;
        border-color:#FFFFFF #808080 #808080 #FFFFFF;
        padding:0;
        font-size:9px;
        font-weight:bold;
        font-family:Tahoma;
        text-align:center;
        focus:none;

    }*/
`;