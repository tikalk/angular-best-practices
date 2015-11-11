describe("Youtube Videos", function() {
	var scope, ctrl, url, mockData, rootScope, YoutubeSearch;
	var mockVideoItem = {};
	var mockPlaylistItem = {};

	beforeEach(module("youtube-videos"));

	beforeEach(inject(
		function($controller, $rootScope, $injector){
			rootScope = $rootScope;
			YoutubeSearch = $injector.get('YoutubeSearch');
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
	it('should expose items props', function() {
		expect(scope.vm.videos).toBe(YoutubeSearch.items);
	});

	it('should define set a feedType prop', function() {
		expect(scope.vm.feedType).toBe(YoutubeSearch.getFeedType);
	});

	it('should have a loadMore function', function() {
		expect(scope.vm.loadMore).toBe(YoutubeSearch.searchMore);
	});

	it("search youtube once, when it loads", function() {
		expect(YoutubeSearch.search).toHaveBeenCalled();
		expect(YoutubeSearch.search.calls.count()).toBe(1);
	});

	it("should queue and play video", function() {
		expect(scope.vm.playVideo).toBeDefined();
	});
});