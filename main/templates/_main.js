/**
 * Configuration for pathing for requireJS to include modules
 *
 * @module sample/RequireJS
 * 
 * @requires sample/config/config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 */

(function (require) {
	"use strict";
	require.config({
		paths: {
			'angular': '../js/angular/angular.min',
            'ngAnimate': '../js/angular-animate/angular-animate.min',
            'ui.bootstrap': '../js/angular-bootstrap/ui-bootstrap.min',
            'ngCookies': '../js/angular-cookies/angular-cookies.min',
            'gettext': '../js/angular-gettext/dist/angular-gettext.min',
            'angular-growl': '../js/angular-growl/build/angular-growl.min',
            'angular-mocks': '../js/angular-mocks/angular-mocks',
            'ngResource': '../js/angular-resource/angular-resource.min',
			'ngRoute': '../js/angular-route/angular-route.min',
            'ngSanitize': '../js/angular-sanitize/angular-sanitize.min',
            'angular-ui-utils': '../js/angular-ui-utils/ui-utils.min',
            'ng-grid': '../js/ng-grid/build/ng-grid.min',
            'translations': '../translations'
		},
		shim: {
			'angular': { deps: [], exports: 'angular' },
            'ngAnimate': {deps: ['angular']},
            'ui.bootstrap': {deps: ['angular']},
            'ngCookies': {deps: ['angular']},
            'gettext': {deps: ['angular']},
            'angular-growl': {deps: ['angular']},
            'angular-mocks': {deps: ['angular']},
            'ngResource': {deps: ['angular']},
            'ngRoute': {deps: ['angular']},
            'ngSanitize': {deps: ['angular']},
            'angular-ui-utils': {deps: ['angular']},
            'ng-grid': {deps: ['angular']},
            'translations': {deps: ['app']}
		}
	});

	require(["config/config"], function (config) {

		require(config.standardRequireModules, function (angular) {
			angular.bootstrap(document, ["app"]);
		});
        
	});
}(require));