import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import DialoguesContainer from './DialoguesContainer/DialoguesContainer';

function ContentMessenger(props) {
    return (
        <div className={ContentMessengerCss.content}>
            <div className={ContentMessengerCss.dialogues}>
                <div className={ContentMessengerCss.bottom}></div>

                <DialoguesContainer />
            </div>

            <div className={ContentMessengerCss.messages}></div>
        </div>
    );

}

export default ContentMessenger;