import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const PlayerList = (props) => {
    console.log(props);
    
    return (
        <div>
             <h3>{props.name}</h3>   
        </div>
    );
};

export default PlayerList;