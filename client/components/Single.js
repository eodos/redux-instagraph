import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { photoId } = this.props.params;
    const i = this.props.posts.findIndex(post => post.code === photoId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[photoId] || [];
    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    );
  }
});

export default Single;
