/**
 * Creates the "sample" AngularJS module
 * This module will construct a user facing URI (/sample/) with it's associated requirements
 * 
 * @module sample
 * 
 * @requires sample/SampleController
 * @requires sample/SampleService
 * 
 * @param angular RequireJS inclusion of AngularJS library
 * @param SampleController RequireJS inclusion of SampleController class
 * @param SampleService RequireJS inclusion of SampleService module
 * @param SampleDirective RequireJS inclusion of SampleDirective module
 *
 * @returns instance of the sample module
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 */

define(['angular', '../sample/SampleController', '../sample/SampleService', '../sample/SampleDirective', 'ngRoute', 'ngResource', 'LocalStorageModule'], function (angular, SampleController, SampleService, SampleDirective) {
	"use strict";

    /** @constructs sample */
	var sample = angular.module("sample", ['ngRoute', 'ngResource', 'LocalStorageModule']);
    
    /** @borrows sample/SampleController */
	sample.controller('SampleController', SampleController);
    /** @borrows sample/SampleService */
    sample.service('SampleService', SampleService);
    /** @borrows sampleSampleDirective */
    sample.directive('SampleDirective', SampleDirective);
    
	return sample;
    
});
