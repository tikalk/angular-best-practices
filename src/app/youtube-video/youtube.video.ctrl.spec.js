describe("Youtube Video", function() {
	var scope, ctrl, rootScope, $location;
	var mockVideoItem = {};

	beforeEach(function(){
		module("youtube.video");
		module(function ($provide) {
			mockVideoItem = window.mocks['video.item.mock'];
			$provide.value('videoResource', mockVideoItem);
		});
		inject(function($controller, $rootScope, $injector){
			rootScope = $rootScope;
			$location = $injector.get('$location');
			// spies
			spyOn($location, 'url');
			scope = $rootScope.$new();
			ctrl = $controller("YoutubeVideoCtrl as vm", {
			  $scope: scope 
			});
			scope.$digest();
		});
	})

	it("should expose the video to scope", function() {
		expect(scope.vm.video).toBe(mockVideoItem);
	});

	it("should define the video time on scope", function() {
		expect(scope.vm.time).toBeDefined();
	});

	it('should parse the video\'s snippet description to html', function() {
		expect(scope.vm.video.snippet.description).toContain("<br>");
	});

	it('should define a "goBack" function', function() {
		expect(scope.vm.goBack).toBeDefined();
	});

	it('should navigate to root url with the "goBack"', function() {
		ctrl.goBack();
		expect($location.url).toHaveBeenCalledWith('/');
	});
});