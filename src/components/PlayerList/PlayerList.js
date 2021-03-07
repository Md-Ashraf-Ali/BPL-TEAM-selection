import React from 'react';
import './PlayerList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser } from '@fortawesome/free-solid-svg-icons'

const PlayerList = (props) => {
    const {name, email, salary, images} = props.player;
    const addEvenHandler = props.addEvenHandler;
    
    return (
        <div className="player-data">
            <div className="player-img">
                <img src= {images} alt=""/>
            </div>
            <div className="player-detail">
                <h1>Name : {name}</h1>
                <h3>Email :{email}</h3>
                <h2>Salary : {salary+ " "+"TK"}</h2>
                <button onClick = {() => props.addEvenHandler(props.player)} className="mainBtn"><FontAwesomeIcon icon={faUser}/> Hire Me</button>
            </div>
            
            
        </div>
    );
};

export default PlayerList;