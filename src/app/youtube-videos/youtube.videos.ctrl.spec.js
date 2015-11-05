describe("Youtube Videos", function() {
	var scope, ctrl, url, mockData, rootScope, YoutubeSearch, YoutubePlayerSettings, YoutubePlayerCreator, YoutubeVideoInfo;
	var mockVideoItem = {};
	var mockPlaylistItem = {};

	beforeEach(module("youtube-videos"));

	beforeEach(inject(
		function($controller, $rootScope, $injector, _YoutubeSearch_){
			rootScope = $rootScope;
			YoutubeSearch = _YoutubeSearch_;
			YoutubePlayerSettings = $injector.get('YoutubePlayerSettings');
			YoutubePlayerCreator = $injector.get('YoutubePlayerCreator');
			YoutubeVideoInfo = $injector.get('YoutubeVideoInfo');
			// spies
			spyOn(YoutubeSearch, 'search');
			spyOn(YoutubePlayerSettings, 'playVideo');
			spyOn(YoutubePlayerSettings, 'playPlaylist');
			spyOn(YoutubeVideoInfo, 'getPlaylist').and.callFake(function () {
				var defer = $q.defer();
				defer.resolve();
				return defer.promise;
			});
			var ytPlayerSpy = jasmine.createSpyObj('ytPlayerSpy', ['loadVideoById', 'playVideo', 'pauseVideo']);
			spyOn(YoutubePlayerCreator, 'createPlayer').and.returnValue(ytPlayerSpy);
			// create controller
			scope = $rootScope.$new();
			ctrl = $controller("YoutubeVideosCtrl as vm", {
			  $scope: scope 
			});
			scope.$digest();
			mockVideoItem = window.mocks['video.item.mock'];
			mockPlaylistItem = window.mocks['youtube.videos.mock'];
		}
	));

	it("search youtube once, when it loads", function() {
		expect(YoutubeSearch.search).toHaveBeenCalled();
		expect(YoutubeSearch.search.calls.count()).toBe(1);
	});

	it("should queue and play video", function() {
		YoutubePlayerSettings.createPlayer();
		scope.vm.playVideo(mockVideoItem);
		expect(YoutubePlayerSettings.playVideo).toHaveBeenCalledWith(mockVideoItem);
	});
});