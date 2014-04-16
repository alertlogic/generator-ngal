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
     * @param {Object} $cookies
     * @param {Object} MessageService
     */
	var SampleController = function($scope, $location, $resource, $routeParams, $cookies, MessageService) {
        $scope.cookies  = $cookies;
        
        /**
         * Write Controller Logic Here
         */
	};

	SampleController.$inject = ["$scope", '$location', '$resource', '$routeParams', '$cookies', 'MessageService'];

	return SampleController;
});