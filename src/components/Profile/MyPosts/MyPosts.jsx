import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((elem, index) =>
    <Post message={elem.message} likesCount={elem.likesCount} key={index} />);



  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
    
  }

  console.log(props)
  return <div className={classes.postsBlock}>
    <h3>my posts</h3>
    <div>
      <div><textarea name="#" id="" cols="30" rows="10" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
      <div><button onClick={addPost}>add post</button></div>
    </div>
    <div className={classes.posts}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts