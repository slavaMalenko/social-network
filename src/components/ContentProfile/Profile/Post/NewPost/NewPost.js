import React from 'react';
import PostCss from './NewPost.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function NewPost(props) {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={PostCss.post}>
            <a className={PostCss.a} href="#">
                <img
                    className={PostCss.post__img}
                    src={profile} />
            </a>

            <div className={PostCss.form}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    className={PostCss.text}
                    value={props.newPostText}
                    placeholder="Что у вас нового?"
                />

                <div className={PostCss.hr}></div>

                <button
                    onClick={onAddPost}
                    className={PostCss.submit}>
                    Опубликовать
                </button>
            </div>
        </div >
    );
}

export default NewPost;