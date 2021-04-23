/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/Table.js":
/*!*************************!*\
  !*** ./src/js/Table.js ***!
  \*************************/
/***/ ((module) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = /*#__PURE__*/function () {
  function Table() {
    _classCallCheck(this, Table);
  }

  _createClass(Table, null, [{
    key: "generateTableHead",
    value: function generateTableHead(table, data) {
      var thead = table.createTHead();
      var row = thead.insertRow();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var th = document.createElement("th");
          var text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "generateTable",
    value: function generateTable(table, data) {
      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;
          var row = table.insertRow();
          console.log(element);
          var key = void 0;

          for (key in element) {
            var cell = row.insertCell();
            var text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Table;
}();

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log("Loaded");
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table */ "./src/js/Table.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Table__WEBPACK_IMPORTED_MODULE_3__);




(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {// alert(`Something went wrong: ${err}`);
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    _Table__WEBPACK_IMPORTED_MODULE_3___default().generateTableHead(table, data);
    _Table__WEBPACK_IMPORTED_MODULE_3___default().generateTable(table, dataRecords);
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this workeds  in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1RhYmxlLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyIsInRhYmxlIiwiZGF0YSIsInRoZWFkIiwiY3JlYXRlVEhlYWQiLCJyb3ciLCJpbnNlcnRSb3ciLCJrZXkiLCJ0aCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIiwiVGVzdEpTIiwiZ2V0SlNPTiIsInVybCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZXJyIiwicmVjb3JkcyIsInF1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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBWCxnREFBTTtBQUNOQyxpREFBTyxDQUFDLEVBQUQsRUFBSyxVQUFDaEIsSUFBRCxFQUFVO0FBQ2xCTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBWjtBQUNILENBRk0sQ0FBUDtBQUlBZ0IsaURBQU8sQ0FBQyxxQ0FBRCxFQUNILFVBQUNXLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUNkLE1BQUlELEdBQUcsS0FBSyxJQUFaLEVBQWtCLENBQ2Q7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFNNUIsS0FBSyxHQUFHUSxRQUFRLENBQUNzQixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxRQUFNN0IsSUFBSSxHQUFHOEIsTUFBTSxDQUFDQyxJQUFQLENBQWFILE9BQU8sQ0FBQzVCLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBYjtBQUNBLFFBQU1nQyxXQUFXLEdBQUdKLE9BQU8sQ0FBQzVCLElBQTVCO0FBRUFpQyxtRUFBQSxDQUF3QmxDLEtBQXhCLEVBQStCQyxJQUEvQjtBQUNBaUMsK0RBQUEsQ0FBb0JsQyxLQUFwQixFQUEyQmlDLFdBQTNCO0FBQ0g7QUFDSixDQVpFLENBQVA7QUFhQXZDLHNEQUFZLENBQUMsNkJBQUQsQ0FBWixDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUYWJsZSB7XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgICAgICAgbGV0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgICAgICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xuICAgICAgICAgICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNlbmQoKTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUZXN0SlMgZnJvbSAnLi9UZXN0SnMnO1xuaW1wb3J0IENvbnNvbGVMb2dJdCBmcm9tICcuL0NvbnNvbGVMb2dJdCc7XG5pbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vVGFibGUnO1xuXG5UZXN0SlMoKTtcbmdldEpTT04oJycsIChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcblxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxuICAgIChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gYWxlcnQoYFNvbWV0aGluZyB3ZW50IHdyb25nOiAke2Vycn1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcblxuICAgICAgICAgICAgVGFibGUuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgICAgICAgICAgVGFibGUuZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xuICAgICAgICB9XG4gICAgfSk7XG5Db25zb2xlTG9nSXQoJ3RoaXMgd29ya2VkcyAgaW4gdGhlIGJ1bmRsZScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==