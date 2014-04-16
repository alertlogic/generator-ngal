/**
 * Creates the "sample" AngularJS module
 * This module will construct a user facing URI (/sample/) with it's associated requirements
 * 
 * @module sample
 * 
 * @requires sample/SampleController
 * @requires common/MessageService
 * 
 * @param angular RequireJS inclusion of AngularJS library
 * @param SampleController RequireJS inclusion of SampleController class
 * @param MessageService RequireJS inclusion of MessageService module
 *
 * @returns instance of the sample module
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 */

define(['angular', '../sample/SampleController', '../common/MessageService', 'ngRoute', 'ngResource', 'ngCookies'], function (angular, SampleController, MessageService) {
	"use strict";

    /** @constructs sample */
	var sample = angular.module("sample", ['ngRoute', 'ngResource', 'ngCookies']);
    
    /** @borrows sample/SampleController */
	sample.controller('SampleController', SampleController);
    /** @borrows common/MessageService */
    sample.service('MessageService', MessageService);

	return sample;
    
});
