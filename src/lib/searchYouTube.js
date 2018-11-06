var searchYouTube = (options, callback) => {
  // TODO ???????????????????? should complete this fuction
 // send request to api
  $.get("https://www.googleapis.com/youtube/v3/search", {
  	maxResults: options.max,
  	part: 'snippet',
  	key: options.key,
  	q: options.query,
  	type: 'video',
  	videoEmbaddable: 'true'
  })
  .done(({items}) => {
  	if(callback){
  		callback(items;)
  	}
  })
  .fail((responseError) => {
  	console.log(responseError);
  })
 
};

window.searchYouTube = searchYouTube;
