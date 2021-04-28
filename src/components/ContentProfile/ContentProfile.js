import React from 'react';
import ContentProfileCss from './ContentProfile.module.css';
import MyPost from './Profile/Post/MyPost/MyPost';
import NewPost from './Profile/Post/NewPost/NewPost';
import ProfileInformation from './Profile/ProfileInformation/ProfileInformation';

function ContentProfile() {

    const postData = [
        { message: "Сегодня я освоил архетиктуру реакта" },
        { message: "Привет, сегодня я начинаю учить реакт" }
    ]

    return (
        <div className={ContentProfileCss.content}>
            <ProfileInformation />

            <NewPost />
            <MyPost message={postData[0].message} />
            <MyPost message={postData[1].message} />
        </div>
    );
}

export default ContentProfile;