describe("Youtube Videos", function() {
	var scope, ctrl, url, mockData, rootScope, YoutubeSearch, YoutubePlayerSettings, YoutubePlayerCreator;
	var mockVideoItem = {};
	var mockPlaylistItem = {};

	beforeEach(module("youtube-videos"));

	beforeEach(inject(
		function($controller, $rootScope, $injector, _YoutubeSearch_){
			rootScope = $rootScope;
			YoutubeSearch = _YoutubeSearch_;
			YoutubePlayerSettings = $injector.get('YoutubePlayerSettings');
			YoutubePlayerCreator = $injector.get('YoutubePlayerCreator');
			// spies
			spyOn(YoutubeSearch, 'search');
			spyOn(YoutubePlayerSettings, 'playVideo');
			var ytPlayerSpy = jasmine.createSpyObj('ytPlayerSpy', ['loadVideoById', 'playVideo', 'pauseVideo']);
			spyOn(YoutubePlayerCreator, 'createPlayer').and.returnValue(ytPlayerSpy);
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
		YoutubePlayerSettings.createPlayer();
		expect(YoutubeSearch.search).toHaveBeenCalled();
		expect(YoutubeSearch.search.calls.count()).toBe(1);
	});

	it("should queue and play video", function() {
		scope.vm.playVideo(mockVideoItem);
		expect(YoutubePlayerSettings.playVideo).toHaveBeenCalledWith(mockVideoItem);
	});
});