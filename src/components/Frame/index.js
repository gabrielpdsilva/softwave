import React, {Component} from 'react';
import {Caixa} from './styles';

class Frame extends React.Component {
    constructor(props){
        super();
    }
    render() {
        
        const width = this.props.width;
        const height = this.props.height;
        const imagem = this.props.imagem;
        const nomeImagem = this.props.nomeImagem;

        return (
            <Caixa width={width} height={height}>
                {
                    imagem && <img src={imagem} style = {{width: width, height: height}} alt="Logo"/>
                }
                {
                    nomeImagem
                }
            </Caixa>
        )
    }
    
}

export default Frame;