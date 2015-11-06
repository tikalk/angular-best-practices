describe('Youtube Player Module', function() {
	var YoutubePlayerSettings, YoutubeSearch, YoutubePlayerCreator, YoutubePlayerCreator;
	var videosResponseMock = {};

	beforeEach(function(){
		module('youtube.player');
		inject(function (localStorageService) {
			spyOn(localStorageService, 'get').and.returnValue([]);
		});
		inject(function($controller, $injector){
			var ytPlayerSpy = jasmine.createSpyObj('ytPlayerSpy', ['loadVideoById', 'playVideo', 'pauseVideo']);
			YoutubePlayerSettings = $injector.get('YoutubePlayerSettings');
			YoutubePlayerCreator = $injector.get('YoutubePlayerCreator');

			spyOn(YoutubePlayerCreator, 'createPlayer').and.returnValue(ytPlayerSpy);
			videosResponseMock = window.mocks['youtube.videos.mock'];
		});
	});

	describe('Youtube Player Settings Service', function() {
		it('queue videos to its playlist', function() {
			YoutubePlayerSettings.queueVideo(videosResponseMock.items[1]);
			expect(YoutubePlayerSettings.nowPlaylist.length).toBe(1);
		});

		it('shouldn\'t queue the same video to a playlist', function(){
			YoutubePlayerSettings.queueVideo(videosResponseMock.items[1]);
			YoutubePlayerSettings.queueVideo(videosResponseMock.items[1]);
			expect(YoutubePlayerSettings.nowPlaylist.length).toBe(1);
		});

		it('should update the nowPlaying object when playing a video', function() {
			var video = videosResponseMock.items[3];
			YoutubePlayerSettings.createPlayer();
			YoutubePlayerSettings.playVideo(video);
			expect(YoutubePlayerSettings.nowPlaying.mediaId).toBe(video.id);
		});
	});
});