/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************************************!*\
  !*** ./app/views/js/custom/documentation/general/jstree/dragdrop.js ***!
  \**********************************************************************/


// Class definition
var KTJSTreeDragDrop = function() {
    // Private functions
    var exampleDragDrop = function() {
        $("#kt_docs_jstree_dragdrop").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "fonticon-bookmark text-danger fs-5"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder text-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file text-waring"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "fonticon-attachments text-warning fs-6"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder text-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file text-waring"},
                                {"text": "Item 2", "icon" : "fa fa-file text-success"},
                                {"text": "Item 3", "icon" : "fa fa-file text-default"},
                                {"text": "Item 4", "icon" : "fa fa-file text-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file text-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-success"
                },
                "file" : {
                    "icon" : "fa fa-file  text-success"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "dnd", "state", "types" ]
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleDragDrop();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeDragDrop.init();
});

/******/ })()
;
//# sourceMappingURL=dragdrop.js.map