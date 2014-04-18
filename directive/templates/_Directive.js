/**
 * SampleDirective provides.
 *
 * Specific Usage: 
 *
 * Generic Usage: 
 *
 * @module sample/SampleDirective
 *
 * @returns instance of the SampleDirective module
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 */

define(function () {
	"use strict";

    /**
     * @constructs SampleDirective
     */
    var SampleDirective = function () {
        return function(scope, element, attrs) {
            /** Do something */
            console.log(scope);
            console.log(element);
            console.log(attrs);
        };
    };
    
    SampleDirective.$inject = [];

    return SampleDirective;
    
});