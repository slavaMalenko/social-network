import React from 'react';
import { connect } from 'react-redux';
import DialoguesContainerCss from './DialoguesContainer.module.css'
import Dialogues from './Dialogues/Dialogues';

// function DialoguesContainer(props) {
//     return (
//         <div className={DialoguesContainerCss.content}>
//             <StoreContext.Consumer>
//                 {(store) => {
//                     let state = store.getState();
//                     return (
//                         <Dialogues state={state} />
//                     )
//                 }}
//             </StoreContext.Consumer>
//         </div>
//     );

// }

let mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const DialoguesContainer = connect(mapStateToProps)(Dialogues);

export default DialoguesContainer;