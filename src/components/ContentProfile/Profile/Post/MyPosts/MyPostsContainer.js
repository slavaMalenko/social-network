import React from 'react';
import { connect } from 'react-redux';
import MyPostsContainerCss from './MyPostsContainer.module.css'
import Posts from './Posts/Posts';

// function MyPostsContainer(props) {
//     return (
//         <div className={MyPostsContainerCss.content}>
//             <StoreContext.Consumer>
//                 {(store) => {
//                     let state = store.getState();
//                     return (
//                         <Posts state={state} />
//                     )
//                 }}
//             </StoreContext.Consumer>
//         </div>
//     );

// }

let mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const MyPostsContainer = connect(mapStateToProps)(Posts);

export default MyPostsContainer;