import React from 'react';
import {CustomGrid, Image} from './styles';

import Loader from 'react-loader-spinner';
import COLORS from '../../styles/colors';

const Grid = ({urls}) => {

    return (
        <CustomGrid>
            
            { urls ?
                urls.map((url, index) => (
                    <div key={index}> 
                        <a href={url} target="_blank"> 
                            <Image src={url}/>
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