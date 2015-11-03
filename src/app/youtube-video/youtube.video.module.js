(function() {
    'use strict';

    angular
        .module('youtube.video', [
            'ui.router',
            'ngSanitize',
            'echoes.services'
        ])
        .config(config);

    /* @ngInject */
    function config ($stateProvider) {
    	$stateProvider
    		.state('video', {
    			url: '/video/:id',
    			templateUrl: 'app/youtube-video/youtube.video.tpl.html',
    			controller: 'YoutubeVideoCtrl',
    			controllerAs: 'vm',
    			resolve: {
					videoResource: function (YoutubeVideoInfo, $stateParams) {
						return YoutubeVideoInfo.list($stateParams.id).then(function(items){
							return items[0];
						});
					}
				}
    		});
    }
})();