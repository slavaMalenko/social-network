import React from 'react';
import ContentMessengerCss from './ContentMessenger.module.css'
import Dialogue from './Dialogue/Dialogue';

function ContentMessenger() {

    const dialoguesData = [
        { name: "Эльвина Ряпова", id: "1", message: "Как ты?" },
        { name: "Виктор Соляник", id: "2", message: "Да в универе запара" },
        { name: "Александр Нечаев", id: "3", message: "На физре будешь?" },
        { name: "Ахтем Маратов", id: "4", message: "Ты в универе был?" },
        { name: "Дмитрий Петрушин", id: "5", message: "Деньги скинул" }
    ]

    const dialoguesElements = dialoguesData
        .map(dialog => <Dialogue id={dialog.id} name={dialog.name} message={dialog.message} />)

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