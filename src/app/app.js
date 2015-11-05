(function() {
	'use strict';

	angular.module('echoes', [
		'ngRoute',
		'ngSanitize',
		'htmlTemplates',
		'youtube.directives',
		'ui.controls',
		'echoes.services',
		'echoes.resources',
		'youtube.api',
		'youtube.player',
		'youtube-videos',
		'media.search',
		'ngAnimate',
		'drawer',
		'LocalStorageModule',
		'infinite-scroll',
		'drawer',
		'ui.router',
		'youtube.video',
		'youtube.player'
	])
	.config(config);

	function config ($stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, GapiApiSetterProvider) {
		GapiApiSetterProvider.config({
			scope: 'youtube',
			api: { 
				client: 'youtube', 
				version: 'v3'
			},
			clientId: '971861197531'
		});

		localStorageServiceProvider.setPrefix('EchoesPlayer');

		$stateProvider
			.state('search', {
				url: '/',
				templateUrl: 'app/youtube-videos/youtube.videos.tpl.html',
				controller: 'YoutubeVideosCtrl',
				controllerAs: 'vm'
			})

			

		$urlRouterProvider.otherwise('/');
	}

})();