var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      {/* show the defualt image the the video in the VideoListEntry that taken from the viedo object that pass in props  */}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* pass the video title and describition from the video object that pass in the props to video entry */}
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
