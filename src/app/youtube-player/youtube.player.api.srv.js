(function() {
    'use strict';

    angular
        .module('youtube.player')

        /* @ngInject */
        .factory('YoutubePlayerApi', YoutubePlayerApi);

        function YoutubePlayerApi ($window){
            /*jshint validthis: true */
            var that = this;
            // CREATE A DEFERRED OBJECT
            var deferred;
            var service = {
                load: load
            };

            // Youtube callback when API is ready
            $window.onYouTubeIframeAPIReady = function () { 
                // RESOLVE THE RESPONSE
            };

            return service;

            // Injects YouTube's iFrame API
            function load () {
                var validProtocols = ['http:', 'https:'];
                var url = '//www.youtube.com/iframe_api';

                // We'd prefer a protocol relative url, but let's
                // fallback to `http:` for invalid protocols
                if (validProtocols.indexOf(window.location.protocol) < 0) {
                    url = 'http:' + url;
                }
                var tag = document.createElement('script');
                tag.src = url;
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                
                // WHAT THIS FUNCTION SHOULD RETURN?
            }
        }

})();