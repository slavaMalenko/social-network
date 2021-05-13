import React from 'react';
import StoreContext from './../../../../../StoreContext';
import MyPostsContainerCss from './MyPostsContainer.module.css'
import Posts from './Posts/Posts';

function MyPostsContainer(props) {
    return (
        <div className={MyPostsContainerCss.content}>
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    return (
                        <Posts state={state} />
                    )
                }}
            </StoreContext.Consumer>
        </div>
    );

}

export default MyPostsContainer;