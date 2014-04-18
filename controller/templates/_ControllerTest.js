/**
 * the controller needs to be loaded explicitly with requireJS as the normal application only registers the
 * controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
 */
define(['sample/SampleController', 'sample/sample', 'gettext'], function(SampleController) {

	"use strict";
	describe("the samplecontroller", function () {
		var sampleController, scope;

		beforeEach(function () {
			//load sample module, see http://docs.angularjs.org/api/angular.mock.inject
			module("sample");

			inject(["$rootScope", "$controller", function ($rootScope, $controller) {
				//instantiate the controller with a newly created scope
				scope = $rootScope.$new();
				sampleController = $controller(SampleController, {$scope: scope});
			}]);
            
		});
        
        /**
         * Write controller tests here
         */
        
	});

});
