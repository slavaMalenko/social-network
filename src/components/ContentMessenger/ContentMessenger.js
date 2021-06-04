import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import Dialogues from './Dialogues/Dialogues';

function ContentMessenger(props) {
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