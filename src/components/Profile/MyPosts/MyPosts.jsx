import React from 'react';
import Post from './Post/Post'
import classes from './MyPosts.module.css';

const MyPosts = () => {
  let postsData = [{
    message: 'hi',
    likesCount: '22'
  }, {
    message: 'nice post',
    likesCount: '7'
  }]
  let postsElements = postsData.map((elem, index) =>
    <Post message={elem.message} likesCount={elem.likesCount} key={index} />);

  return <div className={classes.postsBlock}>
    <h3>my posts</h3>
    <div>
      <div><textarea name="#" id="" cols="30" rows="10"></textarea></div>
      <div><button>add post</button></div>
    </div>
    <div className={classes.posts}>
      {postsElements}
    </div>

  </div>

}

export default MyPosts