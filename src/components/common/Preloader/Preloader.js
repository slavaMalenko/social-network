import React from 'react';
import PrelodaerCss from './Preloader.module.css'

function Preloader() {
    return (
        <div className={PrelodaerCss.ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Preloader;