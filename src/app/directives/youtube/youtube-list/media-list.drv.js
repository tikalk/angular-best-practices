(function() {
    'use strict';

	angular
		.module('youtube.directives')
		.directive('mediaList', mediaList);
		
		/* @ngInject */
		function mediaList() {
			// Usage:
	        //	<media-list 
	        // 		model="vm.videos"
	        //   	on-select="play(video)" 
	        //    	on-queue="queue(video)">
	        //  </media-list>
	        //  
	        // Creates:
	        //
			var directive = {
				restrict: '',
				replace: true,
				templateUrl: '',
				scope: {
					videos: '',
					onSelect: '',
					onQueue: ''
				},
				link: link
			};

			return directive;

			function link (scope, element, attrs){
				
			}
		}

})();