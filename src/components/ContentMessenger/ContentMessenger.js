import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import Dialogue from './Dialogue/Dialogue';

function ContentMessenger(props) {

    const dialoguesElements = props.state.messengerPage.dialoguesData
        .map(dialog => <Dialogue
            id={dialog.id}
            name={dialog.name}
            message={dialog.message} />)

    return (
        <div className={ContentMessengerCss.content}>
            <div className={ContentMessengerCss.dialogues}>
                <div className={ContentMessengerCss.bottom}></div>
                {dialoguesElements}
            </div>

            <div className={ContentMessengerCss.messages}></div>
        </div>
    );

}

export default ContentMessenger;