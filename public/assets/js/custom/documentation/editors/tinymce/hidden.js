/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ./app/views/js/custom/documentation/editors/tinymce/hidden.js ***!
  \*********************************************************************/


// Class definition
var KTFormsTinyMCEHidden = function() {
    // Private functions
    var exampleHidden = function() {
        tinymce.init({
            selector: '#kt_docs_tinymce_hidden',
            menubar: false,
            height : "480",
            toolbar: ['styleselect fontselect fontsizeselect',
                'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify',
                'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'],
            plugins : 'advlist autolink link image lists charmap print preview code'
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleHidden();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsTinyMCEHidden.init();
});

/******/ })()
;
//# sourceMappingURL=hidden.js.map