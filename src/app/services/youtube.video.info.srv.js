(function() {
	'use strict';

	angular
		.module('echoes.services')
		.factory('YoutubeVideoInfo', YoutubeVideoInfo);

	function YoutubeVideoInfo ($q, $http, YOUTUBE_API_KEY){
		var url = 'https://www.googleapis.com/youtube/v3/videos';
		var config = {
			params: {
				part: 'snippet,contentDetails,statistics',
				key: YOUTUBE_API_KEY,
				id: '',
				maxResults: 10
			}
		};

		var service = {
			list: list,
			setId: setId,
			toFriendlyDuration: toFriendlyDuration,
			getPlaylist: getPlaylist,
			enrichItems: enrichItems,
			enrichItemsInBulk: enrichItemsInBulk
		};

		return service;

		////////////////////////
		
		function list(id) {
			setId(id);
			var _config = {
				params: // extend config.params and return a copy of it as a literal object
			};
			return $http.get().then(function(res){
				// should return the items array from the response
			});
		}

		function setId(id) {
			config.params.id = id;
		}

		function toFriendlyDuration (time) {
			var t = time.split("PT")[1];
			var ts = '';
			if (t) {
				t = t.replace(/(H|M)/g, ":")
				.replace("S", "");
				ts = t.split(":");
				ts = ts.map(function(d){
					return d.length === 1 ? "0" + d : d;
				});
			} else {
				t = time.split("P")[1];
				t = t.replace("D", "");
				ts = [parseInt(t) * 24, ':00:00'];
			}
			return ts.join(":");
		}

		function getPlaylist (playlistId) {

		}
		
		function enrichItemsInBulk (items) {
			var amount = items.length;
			var pages = Math.ceil(amount / 50);
			var _items = [];
			var promises = [];
			for (var i = 0; i < pages; i++) {
				promises.push(createPromise(items, i));
			}
			return $q.all(promises);

			function createPromise (items, i) {
				var start = i * 50;
				var end = (i + 1) * 50;
				return fetchContentDetails({
						items: items.slice(start, end)
					})
					.then(addDuration)
					.then(function (videos) {
						_items[i] = videos;
						return _items;
				});
			}
		}
		function fetchContentDetails(data){
			var videoIds = data.items.map(function(video){
				return video.snippet.resourceId.videoId;
			}).join(',');

			return list(videoIds);
		}

		// should create a time property for each item in items
		// by using "item.contentDetails.duration" and toFriendlyDuration
		// @returns items
		function addDuration (items) {
			
		}

		function enrichItems (response) {
			// add duration in then
			return fetchContentDetails(response.result || response.data)
				.then();
		}
	}

})();