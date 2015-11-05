(function() {
    'use strict';

    angular
        .module('youtube-videos', [
            'echoes.services',
            'infinite-scroll',
            'youtube.player'
        ]);
})();