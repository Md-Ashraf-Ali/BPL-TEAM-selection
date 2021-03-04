import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus } from '@fortawesome/free-solid-svg-icons'
import imageTk from '../../images/image/download.jpg'


const Team = (props) => {
    const {name,image,salary,age } = props.player;
    const handleSelectPlayer = props.handleSelectPlayer;
    return (
        <div className='team-container'>
            <div className="playerImage-container">
                <img className ="Img" src={image} alt=""/> 
            </div>
            <div className="playerDetail-container">
                <h1>Name: <i>{name}</i></h1>
                <h2>Age: {age + "year"}</h2>
                <h2>Salary: {salary + "tk"}</h2>
                <button className= 'mainBtn' onClick = {()=>props.handleSelectPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus}/> Select</button>
            </div>
           
        </div>
    );
};

export default Team;
