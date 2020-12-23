import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  // debugger
  let postsElements = props.postsData.map((elem, index) =>
    <Post message={elem.message} likesCount={elem.likesCount} key={index} />);

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost();
  };



  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

  console.log(props)
  return <div className={classes.postsBlock}>
    <h3>my posts</h3>
    <div>
      <div><textarea name="#" id="" cols="30" rows="10" ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
      <div><button onClick={onAddPost}>add post</button></div>
    </div>
    <div className={classes.posts}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts