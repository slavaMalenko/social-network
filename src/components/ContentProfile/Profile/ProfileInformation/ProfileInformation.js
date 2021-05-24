import React from 'react';
import Photo from './Photo/Photo';
import Information from './Information/Information';
import './ProfileInformation.css';

function ProfileInformation(props) {
    return (
        <div className="profile">
            <Photo profile={props.profile} />

            <Information profile={props.profile} />
        </div>
    );
}



export default ProfileInformation;