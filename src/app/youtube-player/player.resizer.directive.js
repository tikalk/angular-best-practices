(function() {
    'use strict';

    angular
        .module('youtube.player')
        .directive('playerResizer', playerResizer);

    /* @ngInject */
    function playerResizer (PlayerResizer) {
        // Usage:
        //	<div player-resize="fullscreen-or-css-classname"></div>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            // watch for isFullScreen expression and 
            // toggleClass of the attribute "playerResizer" on the element
        	

        	scope.isFullScreen = function(){
        		
        	};
        }
    }
})();