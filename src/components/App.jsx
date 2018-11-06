// App component represent the parent and container for the rest component 
class App extends React.Component{

  constructor(props) {
    super(props);
    // declare state and put inside it the current video  and the array of video
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
 // this function we pass it to the VideoListEntry to apply it when click on the title of video by using lifting state Up
  handleVideoChange(video) {
    // change the state depending on the value that pass during call the function in the VideoListEntry
    this.setState({currentVideo: video});
  }
 // to render the App component on the interface when Render This Component by using ReactDom.render()
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/*call VideoPlayer component and pass the current video*/}
            <VideoPlayer video ={this.state.currentVideo} />
            }
          </div>
          <div className="col-md-5">
        {/*call VideoList component and pass array of videos and pass handle funcion*/}
            <VideoList 
            videos ={this.state.videoData} 
            handleVideoChange={this.handleVideoChange.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

window.App = App;













// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video ={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos ={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

