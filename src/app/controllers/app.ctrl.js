(function(){

angular
    .module('echoes')
    .controller('AppCtrl', AppCtrl);

function AppCtrl($scope, YoutubeSearch){
    var vm = this;
    vm.searching = YoutubeSearch.getIsSearching;
    vm.drawerIsOpened = angular.noop;
}

})();