import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
// import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>{(store) => {
//           let state = store.getState();
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           };       
//           let onPostChange = (text) => {
//             store.dispatch(updateNewPostTextActionCreator(text));
//             debugger       
//           }
//         return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}
//           newPostText={state.profilePage.newPostText} />)
//       }}
//     </StoreContext.Consumer>
//   )

// }
const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost:() => {
//       dispatch(addPostActionCreator())
//     },
//     updateNewPostText:(text) => {
//       dispatch(updateNewPostTextActionCreator(text))
//     }
//   }
// }

const MyPostsContainer = connect(mapStateToProps,{addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer