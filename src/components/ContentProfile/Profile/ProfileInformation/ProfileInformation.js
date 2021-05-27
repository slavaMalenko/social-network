import React from 'react';
import Photo from './Photo/Photo';
import Information from './Information/Information';
import ProfileInformationCss from './ProfileInformation.module.css';

function ProfileInformation(props) {
    return (
        <div className={ProfileInformationCss.container}>
            <Photo profile={props.profile} />

            <Information profile={props.profile} />
        </div>
    );
}



export default ProfileInformation;