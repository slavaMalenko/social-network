import React from 'react';
import { connect } from 'react-redux';
import DialoguesContainerCss from './DialoguesContainer.module.css'
import Dialogues from './Dialogues/Dialogues';

let mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const DialoguesContainer = connect(mapStateToProps)(Dialogues);

export default DialoguesContainer;