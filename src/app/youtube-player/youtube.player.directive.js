(function() {
    'use strict';

    angular
        .module('youtube.player')
        .directive('youtubePlayer', youtubePlayer);
    
        /* @ngInject */
        function youtubePlayer (YoutubePlayerApi, YoutubePlayerSettings) {
            // Usage:
            //  <div youtube-player video-id="vm.video.id" height="vm.height" width="vm.width"></div>
            // Creates:
            //
            var directive = {
                link: link,
                controller: 'YoutubePlayerCtrl',
                controllerAs: 'vm',
                restrict: 'A',
                templateUrl: 'app/youtube-player/youtube.player.tpl.html',
                replace: true,
                bindToController: true,
                scope: {
                	playerId: '@',
                	playerHeight: '=',
                	playerWidth: '=',
                    autoNext: '@'
                }
            };
            var player;

            return directive;

            function link (scope, element, attrs) {
                YoutubePlayerApi.load().then(function () {
                    YoutubePlayerSettings.createPlayer(attrs.playerId, scope.vm.size.height, scope.vm.size.width, '', onPlayerStateChange);
                });

                function onPlayerStateChange (state) {
                    scope.$apply();
                }
            }
        }
})();