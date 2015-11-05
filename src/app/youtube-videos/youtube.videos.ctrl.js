(function(){
	
	angular
		.module('youtube-videos')
		.controller('YoutubeVideosCtrl', YoutubeVideosCtrl);

	function YoutubeVideosCtrl(YoutubeSearch, YoutubeVideoInfo, YoutubePlayerSettings){
		var vm = this;

		vm.playVideo = playVideo;
		vm.queueVideo = YoutubePlayerSettings.queueVideo;
		vm.feedType = YoutubeSearch.getFeedType;
		vm.videos = YoutubeSearch.items;
		vm.loadMore = YoutubeSearch.searchMore;

		activate();
		///////////
		function activate () {
			YoutubeSearch.search();
		}

		function playVideo (video) {
			YoutubePlayerSettings.queueVideo(video);
			YoutubePlayerSettings.playVideo(video);
		}
	}

})();