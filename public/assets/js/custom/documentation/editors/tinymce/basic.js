/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ./app/views/js/custom/documentation/editors/tinymce/basic.js ***!
  \********************************************************************/


// Class definition
var KTFormsTinyMCEBasic = function() {
    // Private functions
    var exampleBasic = function() {
        var options = {selector: "#kt_docs_tinymce_basic",  height : "480"};
        
        if (KTThemeMode.getMode() === "dark") {
            options["skin"] = "oxide-dark";
            options["content_css"] = "dark";
        }
        
        tinymce.init(options);
    }

    return {
        // Public Functions
        init: function() {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsTinyMCEBasic.init();
});

/******/ })()
;
//# sourceMappingURL=basic.js.map