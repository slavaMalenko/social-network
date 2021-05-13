import React from 'react';
import StoreContext from '../../../StoreContext';
import DialoguesContainerCss from './DialoguesContainer.module.css'
import Dialogues from './Dialogues/Dialogues';

function DialoguesContainer(props) {
    return (
        <div className={DialoguesContainerCss.content}>
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    return (
                        <Dialogues state={state} />
                    )
                }}
            </StoreContext.Consumer>
        </div>
    );

}

export default DialoguesContainer;