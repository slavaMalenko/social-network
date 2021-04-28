import React from 'react';
import DialogueCss from './Dialogue.module.css'
import profile from './../../ContentProfile/Profile/ProfileInformation/Photo/img/profile__img.jpg'
import { NavLink } from 'react-router-dom';

function Dialogue(props) {

    let path = "/messenger/" + props.id;

    return (
        <NavLink to={path} className={DialogueCss.content}>
            <img className={DialogueCss.img} src={profile} />

            <div className={DialogueCss.messages}>
                <p className={DialogueCss.name}>{props.name}</p>
                <p className={DialogueCss.message}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default Dialogue;