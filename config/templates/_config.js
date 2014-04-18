/**
 * @module sample/config/config
 * 
 * @requires sample/config/configuration
 *
 * @param angular RequireJS inclusion of AngularJS library
 * @param configuration RequireJS inclusion of sample/config/configuration
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 */

define(['angular', 'config/configuration'], function(angular, configuration) {
   'use strict';

    var standardAngularModules = ['ngRoute', 'ngResource', 'ngCookies', 'gettext',
                                'config', 'navbar', 'sample'],
        standardRequireModules = ['angular', 'ngAnimate', 'ui.bootstrap', 'angular-ui-utils', 'angular-growl',
                                  'ngSanitize', 'app', 'translations'],
        config = angular.module('config', []);

    if (configuration.useMock) {
        standardAngularModules.push('ngMockE2E');
        standardRequireModules.push('angular-mocks');
    }
    
    configuration.standardAngularModules = standardAngularModules;
    configuration.standardRequireModules = standardRequireModules;

    config.constant('config', configuration);

    return configuration;

});
