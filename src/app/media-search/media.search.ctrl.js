(function() {
    'use strict';

    angular
        .module('media.search')
        .controller('SearchCtrl', SearchCtrl);

    /* @ngInject */
    function SearchCtrl($http, $q, $window, YoutubeSearch) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'SearchCtrl';
        vm.params = YoutubeSearch.params;
        vm.resetPageToken = YoutubeSearch.resetPageToken;
        vm.search = YoutubeSearch.search;

        // activate();

        // function activate() {};

        function updateSearch($item, $model, $label) {
            YoutubeSearch.search();
        }
    }
})();