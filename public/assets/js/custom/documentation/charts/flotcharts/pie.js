/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ./app/views/js/custom/documentation/charts/flotcharts/pie.js ***!
  \********************************************************************/


// Class definition
var KTFlotDemoPie = function () {
    // Private functions
    var examplePie = function () {
        var data = [
            { label: "CSS", data: 10, color: KTUtil.getCssVariableValue('--kt-active-primary') },
            { label: "HTML5", data: 40, color: KTUtil.getCssVariableValue('--kt-active-success') },
            { label: "PHP", data: 30, color: KTUtil.getCssVariableValue('--kt-active-danger') },
            { label: "Angular", data: 20, color: KTUtil.getCssVariableValue('--kt-active-warning') }
        ];

        $.plot($("#kt_docs_flot_pie"), data, {
            series: {
                pie: {
                    show: true
                }
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            examplePie();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFlotDemoPie.init();
});

/******/ })()
;
//# sourceMappingURL=pie.js.map