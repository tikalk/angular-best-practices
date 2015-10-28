(function() {
angular
	.module('youtube.directives')
	.directive('youtubeMedia', YoutubeMedia);

/* @ngInject */
function YoutubeMedia() {
	var directive = {
		restrict: '',
		templateUrl: '',
		replace: true,
		scope: {
			onPlay: '',
			onQueue: '',
			video: ''
		},
		controller: controller,
		controllerAs: 'vm'
	};

	return directive;

	/* @ngInject */
	function controller ($scope) {
		

	    function playVideo (video){
	    	
		}

		function queueVideo(video) {
			
		}
	}

}

})();