(function() {

    angular
        .module('youtube.player')
        .controller('YoutubePlayerCtrl', YoutubePlayerCtrl);

    /* @ngInject */
    function YoutubePlayerCtrl(YoutubePlayerSettings, PlayerResizer) {
        /*jshint validthis: true */
        var vm = this;
        vm.video = YoutubePlayerSettings.nowPlaying;
        vm.nowPlaylist = YoutubePlayerSettings.nowPlaylist;
        vm.size = PlayerResizer;
        vm.showPlayer = isShowPlayer;
        vm.togglePlayer = togglePlayer;
        vm.isFullScreen = false;
        vm.toggleFullScreen = toggleFullScreen;
        vm.playNextTrack = YoutubePlayerSettings.playNextTrack;
        vm.playPreviousTrack = YoutubePlayerSettings.playPreviousTrack;
        vm.isPlaying = isPlayerPlaying;
        vm.play = YoutubePlayerSettings.play;
        vm.pause = YoutubePlayerSettings.pause;

        function togglePlayer (visible) {
            YoutubePlayerSettings.nowPlaying.showPlayer = visible;
        }

        function toggleFullScreen () {
            vm.isFullScreen = !vm.isFullScreen;
            PlayerResizer.setFullScreen(vm.isFullScreen);
            YoutubePlayerSettings.setSize(vm.size.height, vm.size.width);
        }

        function isPlayerPlaying () {
            // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
            return YoutubePlayerSettings.getPlayerState() === 1;
        }

        function isShowPlayer () {
            return YoutubePlayerSettings.isShowPlayer();
        }
    }

})();