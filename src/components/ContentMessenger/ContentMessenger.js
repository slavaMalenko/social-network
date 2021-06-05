import React from 'react';
import { Redirect } from 'react-router-dom';
import ContentMessengerCss from './ContentMessenger.module.css';
import Dialogues from './Dialogues/Dialogues';

function ContentMessenger(props) {

    if (!props.isAuth) return <Redirect to={'./login'} />

    return (
        <div className={ContentMessengerCss.content}>
            <div className={ContentMessengerCss.dialogues}>
                <div className={ContentMessengerCss.bottom}></div>

                <Dialogues dialoguesData={props.state.dialoguesData} />
            </div>

            <div className={ContentMessengerCss.messages}></div>
        </div>
    );

}

export default ContentMessenger;