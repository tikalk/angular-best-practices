(function() {
    'use strict';

    angular
        .module('media.search')
        .directive('validateQuery', validateQuery);

    /* @ngInject */
    function validateQuery () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, $ctrl) {
        	var QUERY_REGEXP = /http:\/\//
    	    $ctrl.$validators.query = function queryParser(modelValue, viewValue) {
				var value = modelValue || viewValue;
				return !QUERY_REGEXP.test(value);
    	    };
        }
    }
})();