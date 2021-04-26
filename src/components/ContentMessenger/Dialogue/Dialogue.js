import React from 'react';
import DialogueCss from './Dialogue.module.css'
import profile from './../../ContentProfile/Profile/ProfileInformation/Photo/img/profile__img.jpg'

function Dialogue(props) {
    return (
        <div className={DialogueCss.content}>
            <img className={DialogueCss.img} src={profile} />

            <div className={DialogueCss.messages}>
                <p className={DialogueCss.name}>{props.name}</p>
                <p className={DialogueCss.message}>{props.message}</p>
            </div>
        </div>
    );
}

export default Dialogue;