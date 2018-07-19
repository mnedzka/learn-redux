import React, { Component } from "react";
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <figure className="photo-grid">
        {this.props.posts.map( (post, i ) => <Photo {...this.props} key={i} i={i}/> )}
      </figure>
    )
  }
}

export default PhotoGrid;
