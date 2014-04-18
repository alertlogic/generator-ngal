define(function() {
	"use strict";
	describe("the sampleservice", function () {
		var sampleService;

		beforeEach(function () {
			/**
             * Injection
             */
			inject(["SampleService", function (_sampleService) {
                sampleService = _sampleService;
			}]);
		});
        
	});

});
