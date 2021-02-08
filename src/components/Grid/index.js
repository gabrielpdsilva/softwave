import React from 'react';
import {CustomGrid} from './styles';

const Grid = ({urls}) => {

    return (
        <CustomGrid>
            {urls.map((url, index) => (
                <div key={index}> 
                    <a href={url} target="_blank"> 
                        <img src={url} style={{borderStyle: 'solid', backgroundColor: '#c3c3c3', padding: 10, borderWidth: 1, borderColor: '#FFFFFF #808080 #808080 #FFFFFF', width: '50%'}}/>
                    </a>
                </div>
            ))}
        </CustomGrid>
    );

}

export default Grid;