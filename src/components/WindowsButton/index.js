import React, { Component } from 'react';
import {Botao} from './styles';
const WindowsButton = ({onPress, imagem, texto}) => {


       return(
           <Botao>
               <button onClick={onPress}>                  
                    {
                        imagem && <img src={imagem} style={{width: 20, height: 15, marginRight: 3}} alt="Logo"/>
                    }
                    {texto}
               </button>
           </Botao>
       )
   
}

export default WindowsButton;