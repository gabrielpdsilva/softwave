import React from 'react';
import {CustomGrid} from './styles';

import Loader from 'react-loader-spinner';
import COLORS from '../../styles/colors';

const Grid = ({urls}) => {

    return (
        <CustomGrid>
            
            { urls ?
                urls.map((url, index) => (
                    <div key={index}> 
                        <a href={url} target="_blank"> 
                            <img src={url}
                                style={{
                                    borderStyle: 'solid',
                                    backgroundColor: '#c3c3c3',
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF #808080 #808080 #FFFFFF',
                                    width: '65%',
                                    height: 'auto'
                                }}
                            />
                        </a>
                    </div>
                ))
            :
                <Loader
                    type="Oval"
                    color={COLORS.rosa}
                    height={100}
                    width={100}
                />
        }
        </CustomGrid>
    );

}

export default Grid;