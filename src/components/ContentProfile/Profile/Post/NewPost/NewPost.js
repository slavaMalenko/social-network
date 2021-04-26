import React from 'react';
import PostCss from './NewPost.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function NewPost() {
    return (
        <div class={PostCss.post}>
            <a className={PostCss.a} href="#">
                <img className={PostCss.post__img} src={profile} />
            </a>

            <form className={PostCss.form} sction="send.php">
                <textarea className={PostCss.text} type="text" placeholder="Что у вас нового?"></textarea>
                <div className={PostCss.hr}></div>
                <input className={PostCss.submit} type="submit" value="Опубликовать" />
            </form>
        </div>
    );
}

export default NewPost;