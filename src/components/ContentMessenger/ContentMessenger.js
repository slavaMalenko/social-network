import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import Dialogue from './Dialogue/Dialogue';
import StoreContext from './../../StoreContext'

function ContentMessenger(props) {

    return (
        <div className={ContentMessengerCss.content}>
            <div className={ContentMessengerCss.dialogues}>
                <div className={ContentMessengerCss.bottom}></div>

                <StoreContext.Consumer>
                    {(store) => {
                        let state = store.getState();
                        const dialoguesElements = state.messengerPage.dialoguesData
                            .map(dialog => <Dialogue
                                id={dialog.id}
                                name={dialog.name}
                                message={dialog.message} />)
                        return dialoguesElements
                    }}
                </StoreContext.Consumer>
            </div>

            <div className={ContentMessengerCss.messages}></div>
        </div>
    );

}

export default ContentMessenger;