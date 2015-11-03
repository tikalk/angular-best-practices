(function() {
	'use strict';

	angular
		.module('youtube.video')
		.controller('YoutubeVideoCtrl', YoutubeVideoCtrl)

	/* @ngInject */
	function YoutubeVideoCtrl($scope, videoResource, $location){
		var vm = this;
		vm.goBack = goBack;
		vm.playVideo = playVideo;

		activate();
		////////////////////////
		
		function activate () {
			vm.video = videoResource;
			vm.time = getDuration(videoResource.contentDetails.duration);
			vm.video.snippet.description = toHtml(vm.video.snippet.description);
		}

		function playVideo () {
			
		}

		function goBack () {
			$location.url('/');
		}

		function getDuration (time) {
			var t = time.split("PT")[1]
				.replace(/(H|M)/g, ":")
				.replace("S", "");
			var ts = t.split(":");
			ts = ts.map(function(d){
				return d.length === 1 ? "0" + d : d;
			});
			return ts.join(":");
		}

		function toHtml (text) {
    		var breakLineReg = /\n/gm
    		var linksReg = /(http:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/
    		if (!text) return text;
    		return text
    			.replace(breakLineReg, '<br>')
    			.replace(linksReg, '<a href="$1" target="blank" title="opens in a new tab">$1</a>');
	    }
	}
})();