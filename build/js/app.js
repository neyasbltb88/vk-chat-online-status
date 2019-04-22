/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/app.js":
/*!***********************!*\
  !*** ./app/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_nav_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav-watcher */ \"./app/js/modules/nav-watcher.js\");\n\nwindow.navWatcher = new _modules_nav_watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvYXBwLmpzP2EwYjgiXSwibmFtZXMiOlsid2luZG93IiwibmF2V2F0Y2hlciIsIk5hdldhdGNoZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBQSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBSUMsNERBQUosRUFBcEIiLCJmaWxlIjoiLi9hcHAvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdldhdGNoZXIgZnJvbSAnLi9tb2R1bGVzL25hdi13YXRjaGVyJztcclxud2luZG93Lm5hdldhdGNoZXIgPSBuZXcgTmF2V2F0Y2hlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/js/app.js\n");

/***/ }),

/***/ "./app/js/modules/nav-watcher.js":
/*!***************************************!*\
  !*** ./app/js/modules/nav-watcher.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavWatcher; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar NavWatcher =\n/*#__PURE__*/\nfunction () {\n  function NavWatcher() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NavWatcher);\n\n    this.originalNavSetLoc = null;\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NavWatcher, [{\n    key: \"compareObj\",\n    value: function compareObj() {\n      var obj_1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var obj_2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var all_props = Object.assign({}, obj_1, obj_2);\n\n      for (var prop in all_props) {\n        if (obj_1[prop] !== obj_2[prop]) {\n          return false;\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"navSetLocDecorator\",\n    value: function navSetLocDecorator() {\n      var _this$originalNavSetL;\n\n      console.log('navSetLocDecorator');\n      var old_loc = Object.assign({}, window.nav.objLoc);\n\n      var res_return = (_this$originalNavSetL = this.originalNavSetLoc).call.apply(_this$originalNavSetL, [window.nav].concat(Array.prototype.slice.call(arguments)));\n\n      var new_loc = Object.assign({}, window.nav.objLoc);\n      console.log({\n        old_loc: old_loc,\n        new_loc: new_loc,\n        compare: this.compareObj(old_loc, new_loc)\n      });\n      return res_return;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (window.nav && window.nav.setLoc) {\n        console.log('%c%s', window.log_color ? window.log_color.blue : '', 'NavWatcher: Init');\n        this.originalNavSetLoc = window.nav.setLoc;\n        window.nav.setLoc = this.navSetLocDecorator.bind(this);\n      } else {\n        requestAnimationFrame(this.init);\n      }\n    }\n  }]);\n\n  return NavWatcher;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvbW9kdWxlcy9uYXYtd2F0Y2hlci5qcz8xNzFlIl0sIm5hbWVzIjpbIk5hdldhdGNoZXIiLCJvcmlnaW5hbE5hdlNldExvYyIsImluaXQiLCJvYmpfMSIsIm9ial8yIiwiYWxsX3Byb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcCIsImNvbnNvbGUiLCJsb2ciLCJvbGRfbG9jIiwid2luZG93IiwibmF2Iiwib2JqTG9jIiwicmVzX3JldHVybiIsImNhbGwiLCJhcmd1bWVudHMiLCJuZXdfbG9jIiwiY29tcGFyZSIsImNvbXBhcmVPYmoiLCJzZXRMb2MiLCJsb2dfY29sb3IiLCJibHVlIiwibmF2U2V0TG9jRGVjb3JhdG9yIiwiYmluZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQXFCQSxVOzs7QUFDakIsd0JBQWM7QUFBQTs7QUFDVixTQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUdBLFNBQUtDLElBQUw7QUFDSDs7OztpQ0FFa0M7QUFBQSxVQUF4QkMsS0FBd0IsdUVBQWhCLEVBQWdCO0FBQUEsVUFBWkMsS0FBWSx1RUFBSixFQUFJO0FBQy9CLFVBQUlDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsRUFBeUJDLEtBQXpCLENBQWhCOztBQUNBLFdBQUssSUFBSUksSUFBVCxJQUFpQkgsU0FBakIsRUFBNEI7QUFDeEIsWUFBSUYsS0FBSyxDQUFDSyxJQUFELENBQUwsS0FBZ0JKLEtBQUssQ0FBQ0ksSUFBRCxDQUF6QixFQUFpQztBQUM3QixpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxhQUFPLElBQVA7QUFDSDs7O3lDQUVvQjtBQUFBOztBQUNqQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFFQSxVQUFJQyxPQUFPLEdBQUdMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JLLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxNQUE3QixDQUFkOztBQUNBLFVBQUlDLFVBQVUsR0FBRyw4QkFBS2QsaUJBQUwsRUFBdUJlLElBQXZCLCtCQUE0QkosTUFBTSxDQUFDQyxHQUFuQyxvQ0FBMkNJLFNBQTNDLEdBQWpCOztBQUNBLFVBQUlDLE9BQU8sR0FBR1osTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkssTUFBTSxDQUFDQyxHQUFQLENBQVdDLE1BQTdCLENBQWQ7QUFFQUwsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFDUkMsZUFBTyxFQUFQQSxPQURRO0FBRVJPLGVBQU8sRUFBUEEsT0FGUTtBQUdSQyxlQUFPLEVBQUUsS0FBS0MsVUFBTCxDQUFnQlQsT0FBaEIsRUFBeUJPLE9BQXpCO0FBSEQsT0FBWjtBQU1BLGFBQU9ILFVBQVA7QUFDSDs7OzJCQUVNO0FBQ0gsVUFBSUgsTUFBTSxDQUFDQyxHQUFQLElBQWNELE1BQU0sQ0FBQ0MsR0FBUCxDQUFXUSxNQUE3QixFQUFxQztBQUNqQ1osZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFxQkUsTUFBTSxDQUFDVSxTQUFSLEdBQXFCVixNQUFNLENBQUNVLFNBQVAsQ0FBaUJDLElBQXRDLEdBQTZDLEVBQWpFLEVBQXFFLGtCQUFyRTtBQUVBLGFBQUt0QixpQkFBTCxHQUF5QlcsTUFBTSxDQUFDQyxHQUFQLENBQVdRLE1BQXBDO0FBQ0FULGNBQU0sQ0FBQ0MsR0FBUCxDQUFXUSxNQUFYLEdBQW9CLEtBQUtHLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUFwQjtBQUNILE9BTEQsTUFLTztBQUNIQyw2QkFBcUIsQ0FBQyxLQUFLeEIsSUFBTixDQUFyQjtBQUNIO0FBQ0oiLCJmaWxlIjoiLi9hcHAvanMvbW9kdWxlcy9uYXYtd2F0Y2hlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdldhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE5hdlNldExvYyA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wYXJlT2JqKG9ial8xID0ge30sIG9ial8yID0ge30pIHtcclxuICAgICAgICBsZXQgYWxsX3Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqXzEsIG9ial8yKTtcclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIGFsbF9wcm9wcykge1xyXG4gICAgICAgICAgICBpZiAob2JqXzFbcHJvcF0gIT09IG9ial8yW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2U2V0TG9jRGVjb3JhdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZTZXRMb2NEZWNvcmF0b3InKTtcclxuXHJcbiAgICAgICAgbGV0IG9sZF9sb2MgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cubmF2Lm9iakxvYyk7XHJcbiAgICAgICAgbGV0IHJlc19yZXR1cm4gPSB0aGlzLm9yaWdpbmFsTmF2U2V0TG9jLmNhbGwod2luZG93Lm5hdiwgLi4uYXJndW1lbnRzKTtcclxuICAgICAgICBsZXQgbmV3X2xvYyA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5uYXYub2JqTG9jKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICBvbGRfbG9jLFxyXG4gICAgICAgICAgICBuZXdfbG9jLFxyXG4gICAgICAgICAgICBjb21wYXJlOiB0aGlzLmNvbXBhcmVPYmoob2xkX2xvYywgbmV3X2xvYyksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNfcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5uYXYgJiYgd2luZG93Lm5hdi5zZXRMb2MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJyVjJXMnLCAod2luZG93LmxvZ19jb2xvcikgPyB3aW5kb3cubG9nX2NvbG9yLmJsdWUgOiAnJywgJ05hdldhdGNoZXI6IEluaXQnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxOYXZTZXRMb2MgPSB3aW5kb3cubmF2LnNldExvYztcclxuICAgICAgICAgICAgd2luZG93Lm5hdi5zZXRMb2MgPSB0aGlzLm5hdlNldExvY0RlY29yYXRvci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmluaXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/js/modules/nav-watcher.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz85NzBiIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFDOUMsTUFBSSxFQUFFRCxRQUFRLFlBQVlDLFdBQXRCLENBQUosRUFBd0M7QUFDdEMsVUFBTSxJQUFJQyxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUNEO0FBQ0Y7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkwsZUFBakIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcz81YmMzIl0sIm5hbWVzIjpbIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DLEVBQTBDO0FBQ3hDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxRQUFJRSxVQUFVLEdBQUdILEtBQUssQ0FBQ0MsQ0FBRCxDQUF0QjtBQUNBRSxjQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtBQUNBRCxjQUFVLENBQUNFLFlBQVgsR0FBMEIsSUFBMUI7QUFDQSxRQUFJLFdBQVdGLFVBQWYsRUFBMkJBLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQixJQUF0QjtBQUMzQkMsVUFBTSxDQUFDQyxjQUFQLENBQXNCVCxNQUF0QixFQUE4QkksVUFBVSxDQUFDTSxHQUF6QyxFQUE4Q04sVUFBOUM7QUFDRDtBQUNGOztBQUVELFNBQVNPLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DQyxVQUFuQyxFQUErQ0MsV0FBL0MsRUFBNEQ7QUFDMUQsTUFBSUQsVUFBSixFQUFnQmQsaUJBQWlCLENBQUNhLFdBQVcsQ0FBQ0csU0FBYixFQUF3QkYsVUFBeEIsQ0FBakI7QUFDaEIsTUFBSUMsV0FBSixFQUFpQmYsaUJBQWlCLENBQUNhLFdBQUQsRUFBY0UsV0FBZCxDQUFqQjtBQUNqQixTQUFPRixXQUFQO0FBQ0Q7O0FBRURJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQk4sWUFBakIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ })

/******/ });