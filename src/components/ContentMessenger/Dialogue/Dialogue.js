import React from 'react';
import DialogueCss from './Dialogue.module.css'
import profileAhtem from './img/ahtem.jpg';
import profileElya from './img/elya.jpg';
import profileSasha from './img/sasha.jpg';
import profileVictor from './img/victor.jpg'
import { NavLink } from 'react-router-dom';

function Dialogue(props) {
    debugger

    let path = "/messenger/" + props.id;
    let photo = profileElya;

    if (props.id === '1') photo = profileElya
    else if (props.id === '2') photo = profileVictor
    else if (props.id === '3') photo = profileSasha
    else photo = profileAhtem

    return (
        <NavLink to={path} className={DialogueCss.content}>
            <img className={DialogueCss.img} src={photo} />

            <div className={DialogueCss.messages}>
                <p className={DialogueCss.name}>{props.name}</p>
                <p className={DialogueCss.message}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default Dialogue;