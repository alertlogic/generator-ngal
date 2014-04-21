/**
 * SampleController provides a sample page with i18n support
 *
 * @module sample/SampleController
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the SampleController
 *
 * @copyright Alert Logic, Inc 2014
 */

define(function () {
	"use strict";

    /**
     * @constructs SampleController
     * 
     * @param {Object} $scope
     * @param {Object} $location
     * @param {Object} $resource
     * @param {Object} $routeParams
     * @param {Object} SampleService
     */
	var SampleController = function($scope, $location, $resource, $routeParams, SampleService) {
        // We just do this to show usage and not have unused errors on generation - safe to delete
        $scope.sampleService = SampleService;
        
        /**
         * Write Controller Logic Here
         */
	};

	SampleController.$inject = ["$scope", '$location', '$resource', '$routeParams', 'SampleService'];

	return SampleController;
});