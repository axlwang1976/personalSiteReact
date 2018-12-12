import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

class BgVideo extends React.Component {
  render() {
    return (
      <Video
        autoPlay
        loop
        muted
        className="bg-video__content"
      >
        <source src="../img/header-bg.mp4" type="video/mp4" />
      </Video>
    );
  }
}

export default BgVideo;
