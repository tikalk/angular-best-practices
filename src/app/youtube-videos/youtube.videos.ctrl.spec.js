describe("Youtube Videos", function() {
	var scope, ctrl, url, mockData, rootScope, YoutubeSearch, $q;
	var mockVideoItem = {};
	var mockPlaylistItem = {};

	beforeEach(module("youtube-videos"));

	beforeEach(inject(
		function($controller, $rootScope, _$q_, _YoutubeSearch_){
			rootScope = $rootScope;
			$q = _$q_;
			YoutubeSearch = _YoutubeSearch_;
			// spies
			spyOn(YoutubeSearch, 'search');
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
		scope.vm.playVideo(mockVideoItem);
	});
});