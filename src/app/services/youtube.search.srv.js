(function() {
	'use strict';

	angular
		.module('echoes.services')
		.factory('YoutubeSearch', YoutubeSearch);

	/* @ngInject */
	function YoutubeSearch ($http, YOUTUBE_API_KEY, YoutubeVideoInfo, localStorageService){
		var url = 'https://www.googleapis.com/youtube/v3/search';
		var Storage = {
			QUERY: 'query'
		};
		var config = {
			params: {
				part: 'snippet,id',
				key: YOUTUBE_API_KEY,
				q: '',
				maxResults: 50,
				type: 'video'
			}
		};

		var items = [];
		var isSearching = false;
		var nextPageToken;

		var exports = {
			search: search,
			setDuration: setDuration,
			items: items,
			params: config.params,
			getIsSearching: getIsSearching,
			searchMore: searchMore,
			resetPageToken: resetPageToken
		};

		return exports;

		///////////////
		
		function search (query, dontReset){
			if (!dontReset) {
				resetList();
			}
			isSearching = true;
			if (query && query !== config.params.q) {
				config.params.pageToken = '';
			}
			// remove properties not relevant to playlist search
			config.params.q = query || config.params.q;
			// save query to storage
			
			return $http.get()
				.then(fetchContentDetails)
				.then(addDuration)
				.then(finalize);

			function fetchContentDetails(response){
				nextPageToken = response.data.nextPageToken;
				var videoIds = response.data.items.map(function(video){
					return video.id.videoId;
				}).join(',');

				var _items = YoutubeVideoInfo.list(videoIds);
				return _items;
			}

			function addDuration (_items) {
                _items.forEach(function(item){
                    item.time = YoutubeVideoInfo.toFriendlyDuration(item.contentDetails.duration);
                });
	            Array.prototype.push.apply(items, _items);
			}

			function finalize () {
				isSearching = false;
			}
		}

		function searchMore () {
			if (!isSearching && items.length) {
				config.params.pageToken = nextPageToken;
				exports.search(config.params.q, true);
			}
		}
		function resetList () {
			items.length = 0;
		}

		function resetPageToken () {
			
		}

		function setDuration (duration) {
			if ('' === duration || undefined === duration) {
				delete config.params.videoDuration;
				return;
			}
			config.params.videoDuration = duration;
		}

		function getIsSearching () {
			return isSearching;
		}
	}

})();