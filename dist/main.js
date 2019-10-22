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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/dominiqueboyer/Desktop/acme-login/acme_login/src/index.js: Unexpected token (50:8)\n\n\u001b[0m \u001b[90m 48 | \u001b[39m    \u001b[36mconst\u001b[39m { attemptLogin } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 | \u001b[39m    \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 50 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 51 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{ ()\u001b[33m=>\u001b[39m attemptLogin(\u001b[32m'moe'\u001b[39m)}\u001b[33m>\u001b[39m\u001b[33mLogin\u001b[39m \u001b[33mAs\u001b[39m \u001b[33mMoe\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 52 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{ ()\u001b[33m=>\u001b[39m attemptLogin(\u001b[32m'lucy'\u001b[39m)}\u001b[33m>\u001b[39m\u001b[33mLogin\u001b[39m \u001b[33mAs\u001b[39m \u001b[33mLucy\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 53 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser.raise (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Parser.unexpected (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:7773:16)\n    at Parser.parseExprAtom (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8996:20)\n    at Parser.parseExprSubscripts (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Parser.parseMaybeUnary (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseExprOps (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseParenAndDistinguishExpression (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:9133:28)\n    at Parser.parseExprAtom (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8917:21)\n    at Parser.parseExprSubscripts (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Parser.parseMaybeUnary (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Parser.parseExprOps (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Parser.parseMaybeConditional (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Parser.parseMaybeAssign (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Parser.parseExpression (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:8275:23)\n    at Parser.parseReturnStatement (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10378:28)\n    at Parser.parseStatementContent (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10057:21)\n    at Parser.parseStatement (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Parser.parseBlockBody (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Parser.parseBlock (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10556:10)\n    at Parser.parseFunctionBody (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:9584:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:9554:10)\n    at Parser.parseMethod (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:9508:10)\n    at Parser.pushClassMethod (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10987:30)\n    at Parser.parseClassMemberWithIsStatic (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10912:12)\n    at Parser.parseClassMember (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10851:10)\n    at withTopicForbiddingContext (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:10806:14)\n    at Parser.withTopicForbiddingContext (/Users/dominiqueboyer/Desktop/acme-login/acme_login/node_modules/@babel/parser/lib/index.js:9884:14)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map