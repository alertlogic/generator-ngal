/**
 * Creates the application root for an angular application at uri (/sample/)
 *
 * @module sample/app
 * 
 * @requires config/config
 * @requires gettext
 * @requires ngRoute
 * @require LocalStorageModule
 * @requires common/common
 * @requires sample/sample
 * @requires navbar/navbar
 *
 * @param angular RequireJS inclusion of AngularJS library
 * @param config RequireJS inclusion of config/config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the app
 *
 * @copyright Alert Logic, Inc 2014
 */

define(['angular',
        'config/config',
        'gettext',
        'ngRoute',
        'LocalStorageModule',
        '../common/common',
        '../sample/sample',
        '../navbar/navbar'], function(angular, config) {
	"use strict";

    /** @constructs app */
    var app = angular.module("app", config.standardAngularModules);

	app.config(['$locationProvider', function($locationProvider) {
                        
        $locationProvider.html5Mode(false);
        
	}]);
    
	return app;
});

