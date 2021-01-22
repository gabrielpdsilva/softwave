import styled from 'styled-components';
import COLORS from '../../styles/colors'

export const Caixa = styled.div`
    //display: flex;
//    display: flex;
//    align-items: center;
    width: 292px;
    border: 1px;
    border-style:solid;
    border-color: #808080;
    height: 100px;
    margin: auto;
    padding: 10px;
    margin-top: 10px;
    background-color: ${COLORS.cinzaClaro};

    .box{
  width:292px;
  background:#C0C0C0;
  border-width:1px;
  border-color:#FFFFFF #808080 #808080 #FFFFFF;
  border-style:solid;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding:1px;
}
    
`;