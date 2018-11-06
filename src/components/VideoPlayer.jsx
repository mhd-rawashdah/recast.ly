var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
     {/* hook the video id from the viedo object with youtube linke */}
      <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + props.video.id.videoId} allowFullScreen></iframe>
     }
    </div>
    <div className="video-player-details">
       {/* pass the video title and describition from the video object that pass in the props */}
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
