describe("Media Search", function() {
	var scope, ctrl, httpBackend, url, mockData, rootScope, YoutubeSearch;
	var mockVideoItem = {};

	beforeEach(module("media.search"));

	beforeEach(inject(
		function($controller, $rootScope, _YoutubeSearch_, $httpBackend){
			rootScope = $rootScope;
			YoutubeSearch = _YoutubeSearch_;
			httpBackend = $httpBackend;
			// spies
			spyOn(YoutubeSearch, 'resetPageToken');
			spyOn(YoutubeSearch, 'search');
			scope = $rootScope.$new();
			ctrl = $controller("SearchCtrl as vm", {
			  $scope: scope 
			});
			scope.$digest();
		}
	));

	it('should have a params object with q for query', function() {
		expect(scope.vm.params).toBeDefined();
		expect(scope.vm.params.q).toBeDefined();
	});

	it('should have a search function', function() {
		expect(scope.vm.search).toBeDefined();
	});

	it("should reset the page token when the query has changed", function() {
		scope.vm.params.q = 'some random text ' + Date().toString();
		scope.vm.resetPageToken();
		scope.$digest();
		expect(YoutubeSearch.resetPageToken).toHaveBeenCalled();
		expect(YoutubeSearch.resetPageToken.calls.count()).toBe(1);
	});


});