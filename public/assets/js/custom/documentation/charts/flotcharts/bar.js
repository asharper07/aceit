/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ./app/views/js/custom/documentation/charts/flotcharts/bar.js ***!
  \********************************************************************/


// Class definition
var KTFlotDemoBar = function () {
    // Private functions
    var exampleBar = function () {
        // horizontal bar chart:
		var data1 = [
			[10, 10],
			[20, 20],
			[30, 30],
			[40, 40],
			[50, 50],
            [60, 60],
            [70, 70],
            [80, 80],
            [90, 90],
            [100, 100],
		];

		var options = {
			colors: [KTUtil.getCssVariableValue('--kt-active-primary')],
			series: {
				bars: {
					show: true
				}
			},
			bars: {
				horizontal: true,
				barWidth: 6,
				lineWidth: 0, // in pixels
				shadowSize: 0,
				align: 'left'
			},
			grid: {
				tickColor: KTUtil.getCssVariableValue('--kt-light-dark'),
				borderColor: KTUtil.getCssVariableValue('--kt-light-dark'),
				borderWidth: 1
			}
		};

		$.plot($("#kt_docs_flot_bar"), [data1], options);
    }

    return {
        // Public Functions
        init: function () {
            exampleBar();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoBar.init();
});

/******/ })()
;
//# sourceMappingURL=bar.js.map