import React from 'react';
import { NavLink } from 'react-router-dom';
import DialoguesCss from './Dialogues.module.css'
import profileAhtem from './img/ahtem.jpg';
import profileElya from './img/elya.jpg';
import profileSasha from './img/sasha.jpg';
import profileVictor from './img/victor.jpg';


function Dialogues(props) {
    const dialoguesElements = props.dialoguesData
        .map(dialog => <Dialogue
            id={dialog.id}
            name={dialog.name}
            message={dialog.message}
        />)

    return (
        <div className={DialoguesCss.container}>
            {dialoguesElements}
        </div>
    )
}

function Dialogue(props) {
    let path = "/messenger/" + props.id;
    let photo = profileElya;

    if (props.id === 1) photo = profileElya
    else if (props.id === 2) photo = profileVictor
    else if (props.id === 3) photo = profileSasha
    else photo = profileAhtem

    return (
        <NavLink to={path} className={DialoguesCss.item}>
            <img className={DialoguesCss['item-img']} src={photo} />

            <div className={DialoguesCss.messages}>
                <p className={DialoguesCss['messages-name']}>{props.name}</p>
                <p className={DialoguesCss['messages-message']}>{props.message}</p>
            </div>
        </NavLink>
    );
}

export default Dialogues;