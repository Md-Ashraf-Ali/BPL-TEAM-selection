import React from 'react';

const PlayerList = (props) => {
    const cart = props.cart;
   
    console.log(props);
     

    return (
        <div>
            
             <h1>{cart}</h1>

        </div>
    );
};

export default PlayerList;