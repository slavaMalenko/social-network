import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPost from './Profile/Post/MyPost/MyPost';
import NewPost from './Profile/Post/NewPost/NewPost';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile() {
    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />

            <NewPost />
            <MyPost message="Сегодня я освоил архетиктуру реакта" />
            <MyPost message="Привет, сегодня я начинаю учить реакт" />
        </div>
    );
}

export default ContentProfile;