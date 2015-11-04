describe("Echoes Services: Youtube Search Service", function() {
	var scope, ctrl, httpBackend, url, mockData, rootScope, YoutubeSearch, YoutubeVideoInfo;
	var mockVideoItems = {};

	beforeEach(module("echoes.services"));

	beforeEach(inject(
		function($controller, $rootScope, _YoutubeSearch_, $httpBackend, _YoutubeVideoInfo_){
			rootScope = $rootScope;
			YoutubeSearch = _YoutubeSearch_;
			YoutubeVideoInfo = _YoutubeVideoInfo_;
			httpBackend = $httpBackend;
			mockVideoItems = window.mocks['youtube.videos.mock'];
			httpBackend
				.whenGET(/www.googleapis.com\/youtube\/v3\/search/)
				.respond(mockVideoItems);
			// spies
			// spyOn(YoutubeSearch, 'resetPageToken');
			spyOn(YoutubeVideoInfo, 'list').and.callFake(function () {
				return mockVideoItems.items;
			});
			scope = $rootScope.$new();
		}
	));

	it('should have a search function', function() {
		expect(YoutubeSearch.search).toBeDefined();
	});
	
	it('search youtube when query has changed', function() {
		YoutubeSearch.params.q = 'pink floyd';
		YoutubeSearch.search('pink floyd albums');
		httpBackend.flush();
		expect(YoutubeSearch.items.length).toBeGreaterThan(0);
	});

	it('should have a searchMore function should call search with params query and true', function() {
		YoutubeSearch.params.q = 'pink floyd live';
		YoutubeSearch.search('pink floyd albums');
		httpBackend.flush();
		spyOn(YoutubeSearch, 'search').and.callThrough();
		YoutubeSearch.searchMore();
		httpBackend.flush();
		expect(YoutubeSearch.search).toHaveBeenCalledWith(YoutubeSearch.params.q, true);
	});

	it('should reset the page token to ""', function() {
		YoutubeSearch.resetPageToken();
		expect(YoutubeSearch.params.pageToken).toBe('');
	});

	// it('search, by default, should not concat results and reset items array', function() {
	// 	YoutubeSearch.params.q = 'pink floyd live';
	// 	YoutubeSearch.search('pink floyd albums');
	// 	YoutubeSearch.search('mozart', false);
	// 	httpBackend.flush();
	// 	expect(YoutubeSearch.items.length).toBe(10);
	// });
});