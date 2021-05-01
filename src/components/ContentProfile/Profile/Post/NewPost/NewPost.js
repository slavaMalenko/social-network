import React from 'react';
import PostCss from './NewPost.module.css'
import profile from './../../ProfileInformation/Photo/img/profile__img.jpg'

function NewPost(props) {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={PostCss.post}>
            <a className={PostCss.a} href="#">
                <img className={PostCss.post__img} src={profile} />
            </a>

            <div className={PostCss.form}>
                <textarea ref={newPostElement} className={PostCss.text} type="text" placeholder="Что у вас нового?"></textarea>
                <div className={PostCss.hr}></div>
                <button onClick={addPost} className={PostCss.submit} >Опубликовать</button>
            </div>
        </div >
    );
}

export default NewPost;