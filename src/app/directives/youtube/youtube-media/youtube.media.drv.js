(function() {
angular.module('youtube.directives')
.directive('youtubeMedia', YoutubeMedia);

/* @ngInject */
function YoutubeMedia(UserPlaylists) {
	var directive = {
		restrict: 'E',
		templateUrl: 'app/directives/youtube/youtube-media/youtube.media.tpl.html',
		replace: true,
		scope: {
			onPlay: '&',
			onQueue: '&',
			video: '='
		},
		controller: controller,
		controllerAs: 'vm'
	};

	return directive;

	/* @ngInject */
	function controller ($scope) {
		var vm = this;
	    vm.playVideo = playVideo;
		vm.queueVideo = queueVideo;

	    function playVideo (video){
	    	$scope.onPlay({
	    		video: video
	    	});
		}

		function queueVideo(video) {
			$scope.onQueue({
				video: video
			});
		}
	}

}

})();