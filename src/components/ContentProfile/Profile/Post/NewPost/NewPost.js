import React from 'react';
import PostCss from './NewPost.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function NewPost(props) {

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {
            type: 'ADD-POST'
        }

        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;

        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        }

        props.dispatch(action);
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
                    onClick={addPost}
                    className={PostCss.submit}>
                    Опубликовать
                </button>
            </div>
        </div >
    );
}

export default NewPost;