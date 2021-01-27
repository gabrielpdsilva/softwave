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

        return (
            <Caixa largura={width} height={this.props.height}>
                
                {
                    this.props.imagem && <img src={this.props.imagem} alt="Logo"/>
                }
            </Caixa>
        )
    }
    
}

export default Frame;