import React from 'react';
import Photo from './Photo';
// import Comments from './Comments';

const Single = React.createClass({
  render() {

    return (
      <div className="single-photo">
        
      </div>
    )
  }
});

export default Single;
// <Comments postComments={postComments} />
// this code was on line 17

// const Single = React.createClass({
  // render() {
//     const { postId } = this.props.params;

//     const i = this.props.posts.findIndex((post) => post.code === postId);
//     const post = this.props.posts[i];
//     console.log(i);

//     // const postComments = this.props.comments[postId] || [];

//     return (
//       <div className="single-photo">
//         <Photo i={i} post={post} {...this.props} />
        
//       </div>
//     )
//   }
// });
