import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import Dialogue from './Dialogue/Dialogue';

function ContentMessenger() {
    return (
        <div className={ContentMessengerCss.content}>
            <div className={ContentMessengerCss.dialogues}>
                <div className={ContentMessengerCss.bottom}></div>
                <Dialogue name="Эльвина Ряпова" message="Как ты?" />
                <Dialogue name="Виктор Соляник" message="Да в универе запара" />
                <Dialogue name="Александр Нечаев" message="На физре будешь?" />
                <Dialogue name="Ахтем Маратов" message="Ты в универе был?" />
            </div>

            <div className={ContentMessengerCss.messages}>

            </div>
        </div>
    );
}

export default ContentMessenger;