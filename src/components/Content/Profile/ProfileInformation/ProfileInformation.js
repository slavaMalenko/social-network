import React from 'react';
import Photo from './Photo/Photo';
import Information from './Information/Information';
import './ProfileInformation.css';

function ProfileInformation() {
    return (
        <div className="profile">
            <Photo />

            <Information />
        </div>
    );
}



export default ProfileInformation;