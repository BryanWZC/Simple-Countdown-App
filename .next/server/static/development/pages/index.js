module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bryan\\desktop\\Programming Projects\\02.1 Simple Count Down\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
class home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      hours: '00',
      mins: '00',
      secs: '00',
      timerStart: false,
      enableTimer: true,
      alarmStart: false,
      audio1: '',
      getHourArr: () => {
        let arr = [];

        for (let i = 0; i < 100; i++) {
          arr.push(i);
        }

        return arr;
      },
      getMinSecArr: () => {
        let arr = [];

        for (let i = 0; i < 60; i++) {
          arr.push(i);
        }

        return arr;
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.countDown = this.countDown.bind(this);
    this.handleSetTimeClick = this.handleSetTimeClick.bind(this);
    this.windowClick = this.windowClick.bind(this);
  }

  /*Re-renders current time and countdown values */
  componentDidMount() {
    this.localTime = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
    this.timerTime = setInterval(this.countDown, 1000);
  }
  /*Clear the intervals to prevent memory leaks*/


  componentWillUnmount() {
    clearInterval(this.localTime);
    clearInterval(this.timerTime);
  }
  /*Sets current time to be refreshed in componentdidMount*/


  todayDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth()).padStart(2, '0');
    let yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
  }

  /*Corresponds dial value to hours, mins and secs state values*/
  handleClick(e) {
    let target = e.target;
    this.setState({
      [target.name]: target.value.toString().padStart(2, 0)
    });
  }
  /*Start and stop button for timer*/


  handleStartClick() {
    let button = document.getElementById('start-button');
    let hours = this.state.hours;
    let mins = this.state.mins;
    let secs = this.state.secs;

    if (this.state.timerStart === false) {
      if (this.state.enableTimer === false) {
        this.handleSetTimeClick();
      }

      this.setState({
        timerStart: true
      });
      this.setState({
        alarmStart: true
      });

      if (hours == 0 && mins == 0 && secs == 0) {
        this.setState({
          alarmStart: false
        });
      }

      button.style.background = '#A4242F';
      button.innerHTML = 'Stop';
    } else {
      this.setState({
        timerStart: false
      });
      button.style.background = '#00A676';
      button.innerHTML = 'Start';
    }
  }
  /*Changes the state values for hours, mins and secs*/


  countDown() {
    let hours = this.state.hours;
    let mins = this.state.mins;
    let secs = this.state.secs;
    let button = document.getElementById('start-button');

    if (this.state.timerStart == true && this.state.enableTimer === true) {
      if (secs != 0) {
        this.setState({
          secs: (+this.state.secs - 1).toString().padStart(2, 0)
        });
      } else if (mins != 0) {
        this.setState({
          mins: (+this.state.mins - 1).toString().padStart(2, 0)
        });
        this.setState({
          secs: '59'
        });
      } else if (hours != 0) {
        this.setState({
          hours: (+this.state.hours - 1).toString().padStart(2, 0)
        });
        this.setState({
          mins: '59'
        });
        this.setState({
          secs: '59'
        });
      } else if (this.state.alarmStart == true) {
        this.setState({
          audio1: new Audio('./alarm.mp3')
        });
        this.setState({
          timerStart: false
        });
        this.state.audio1.play();
        window.navigator.vibrate(2000);
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
      } else {
        button.style.background = '#00A676';
        button.innerHTML = 'Start';
        this.setState({
          timerStart: false
        });
      }
    }
  }
  /*Expands the display box upwards to show the dial options*/


  handleSetTimeClick() {
    let hour = document.getElementById('dial-hour');
    let mins = document.getElementById('dial-min');
    let secs = document.getElementById('dial-sec');
    let button = document.getElementById('start-button');
    let height = document.getElementById('display').offsetHeight;
    this.setState({
      timerStart: false
    });

    if (this.state.enableTimer === true) {
      this.setState({
        enableTimer: false
      });
      hour.style.height = (height * 0.2).toString() + 'px';
      mins.style.height = (height * 0.2).toString() + 'px';
      secs.style.height = (height * 0.2).toString() + 'px';
      button.style.background = '#00A676';
      button.innerHTML = 'Start';
    } else {
      this.setState({
        enableTimer: true
      });
      hour.style.height = '0';
      mins.style.height = '0';
      secs.style.height = '0';
    }
  }
  /*Silence alarm and vibration from timer reaching zero*/


  windowClick() {
    if (this.state.audio1 != '' && this.state.alarmStart == true) {
      this.setState({
        alarmStart: false
      });
      this.state.audio1.pause();
      window.navigator.vibrate(0);
    }
  }
  /*2 functions below add aestetics when choosing dial*/


  hoverColor(e) {
    e.target.style.background = '#373337';
    e.target.style.color = 'white';
  }

  hoverOutColor(e) {
    e.target.style.background = '#D8B39C';
    e.target.style.color = '#373337';
  }

  render() {
    const timeButton = {
      fontSize: '20px',
      width: '100%',
      background: '#D8B39C',
      outline: 'none'
    };
    const getNumHours = this.state.getHourArr().map((value, i) => __jsx("button", {
      name: "hours",
      key: i + 'hours',
      style: timeButton,
      onMouseOver: this.hoverColor,
      onMouseOut: this.hoverOutColor,
      value: value,
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 67
      }
    }, value.toString().padStart(2, 0)));
    const getNumMin = this.state.getMinSecArr().map((value, i) => __jsx("button", {
      name: "mins",
      key: i + 'mins',
      style: timeButton,
      onMouseOver: this.hoverColor,
      onMouseOut: this.hoverOutColor,
      value: value,
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 67
      }
    }, value.toString().padStart(2, 0)));
    const getNumSec = this.state.getMinSecArr().map((value, i) => __jsx("button", {
      name: "secs",
      key: i + 'secs',
      style: timeButton,
      onMouseOver: this.hoverColor,
      onMouseOut: this.hoverOutColor,
      value: value,
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 67
      }
    }, value.toString().padStart(2, 0)));
    return __jsx("div", {
      onClick: this.windowClick,
      className: "jsx-1331696737" + " " + 'container',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-1331696737" + " " + 'navbar',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, __jsx("h1", {
      id: "title",
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, "Simple Countdown Timer"), __jsx("div", {
      className: "jsx-1331696737" + " " + 'flex-container-column',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx("h2", {
      className: "jsx-1331696737" + " " + 'heading',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 15
      }
    }, "Today's Date: ", __jsx("u", {
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 55
      }
    }, this.todayDate())), __jsx("h2", {
      className: "jsx-1331696737" + " " + 'heading',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 15
      }
    }, "Current Time: ", __jsx("u", {
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 55
      }
    }, this.state.time)))), __jsx("div", {
      id: "display",
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "timer-wrapper",
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    }, __jsx("div", {
      id: "timer",
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1331696737" + " " + 'time-place-holders',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }
    }, __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'time-display',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    }, this.state.hours, ":"), __jsx("div", {
      id: "dial-hour",
      className: "jsx-1331696737" + " " + 'dial-wrapper1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, getNumHours), __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'description',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }, "Hours")), __jsx("div", {
      className: "jsx-1331696737" + " " + 'time-place-holders',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }, __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'time-display',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, this.state.mins, ":"), __jsx("div", {
      id: "dial-min",
      className: "jsx-1331696737" + " " + 'dial-wrapper1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, getNumMin), __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'description',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, "Mins")), __jsx("div", {
      className: "jsx-1331696737" + " " + 'time-place-holders',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 15
      }
    }, __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'time-display',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, this.state.secs), __jsx("div", {
      id: "dial-sec",
      className: "jsx-1331696737" + " " + 'dial-wrapper1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, getNumSec), __jsx("h1", {
      onClick: this.handleSetTimeClick,
      className: "jsx-1331696737" + " " + 'description',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, "Secs"))), __jsx("button", {
      id: "start-button",
      onClick: this.handleStartClick,
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 13
      }
    }, "Start")), __jsx("footer", {
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "jsx-1331696737",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }
    }, "\xA9 Bryan Wong | 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3495234922",
      __self: this
    }, ".container.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box;height:100vh;}.navbar.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:10vh;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#373337;color:#D8B39C;border-bottom:3px solid #D8B39C;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}#title.jsx-1331696737{font-size:55px;cursor:auto;}.flex-container-column.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10px 0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;jistify-content:center;margin-left:2%;border:solid;}.heading.jsx-1331696737{font-weight:300;}#display.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background-image:radial-gradient( #F7F9F9 ,#E3E7D3,#849483);-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}#timer-wrapper.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:28%;bottom:33%;position:absolute;bottom:33%;}#timer.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;min-width:33.33%;}.time-place-holders.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.time-display.jsx-1331696737{height:90%;font-size:160px;font-weight:400;background-color:#373337;color:#D8B39C;}.dial-wrapper1.jsx-1331696737{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0px;overflow:auto;}.dial-wrapper1.jsx-1331696737::-webkit-scrollbar{display:none;}.description.jsx-1331696737{background-color:#373337;color:#D8B39C;}#start-button.jsx-1331696737{width:100%;font-size:25px;height:32px;background:#00A676;color:#F7F9F9;}h1.jsx-1331696737:hover{cursor:pointer;}h1.jsx-1331696737:focus{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-1331696737,h2.jsx-1331696737,p.jsx-1331696737{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}footer.jsx-1331696737{background:#373337;color:#D8B39C;border-top:3px solid #D8B39C;font-size:13px;width:100%;position:absolute;bottom:0;left:0;height:30px;}footer.jsx-1331696737 p.jsx-1331696737{padding:5px 0 8px 10px;}button.jsx-1331696737{outline:none;}button.jsx-1331696737:focus{outline:none;}@media screen and (max-width:1000px){#title.jsx-1331696737{font-size:42px;}.heading.jsx-1331696737{font-size:18px;}.time-display.jsx-1331696737{font-size:120px;}.description.jsx-1331696737{font-size:25px;}#start-button.jsx-1331696737{font-size:23px;}}@media screen and (max-width:750px){#title.jsx-1331696737{font-size:30px;}.heading.jsx-1331696737{font-size:15px;}.flex-container-column.jsx-1331696737{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-display.jsx-1331696737{font-size:120px;}.description.jsx-1331696737{font-size:25px;}#start-button.jsx-1331696737{font-size:23px;}footer.jsx-1331696737{font-size:13px;}}@media screen and (max-width:575px){footer.jsx-1331696737{font-size:13px;}.navbar.jsx-1331696737{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;}.flex-container-column.jsx-1331696737{margin:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:10px 0 10px 0;border:none;}}@media screen and (max-width:450px){.container.jsx-1331696737{box-sizing:border-box;}#title.jsx-1331696737{font-size:30px;}.heading.jsx-1331696737{font-size:15px;}.time-display.jsx-1331696737{font-size:90px;}.description.jsx-1331696737{font-size:25px;}#start-button.jsx-1331696737{font-size:23px;}}@media screen and (max-width:375px){#title.jsx-1331696737{font-size:24px;}.time-display.jsx-1331696737{font-size:60px;}.description.jsx-1331696737{font-size:25px;}#start-button.jsx-1331696737{font-size:20px;}#timer-wrapper.jsx-1331696737{bottom:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc09vQixBQU0wQixBQU9FLEFBVUksQUFJRixBQVNHLEFBR0wsQUFTQSxBQVNFLEFBTUEsQUFLRixBQU9FLEFBTUEsQUFHWSxBQUloQixBQVVFLEFBR0YsQUFJWSxBQU1OLEFBV0ssQUFHWCxBQUdELEFBT0csQUFHQSxBQUlDLEFBR0QsQUFHQSxBQUtFLEFBR0EsQUFHTyxBQUtOLEFBR0QsQUFHQSxBQUdBLEFBS0EsQUFHTyxBQUtiLEFBUWEsQUFHUCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHQSxBQUdBLEFBR0EsQUFHSixTQXZDVyxFQXRISixBQW9CSCxBQTBJbkIsRUFqSk0sQUFvQmEsQUF3Qm5CLEFBR0EsRUF6R2tCLEFBMkVsQixBQXFDQSxBQUdBLEFBT0EsQUFHQSxBQUtFLEFBR0EsQUFXQSxBQUdBLEFBR0EsQUFLQSxBQW1CQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHQSxBQUdBLEFBR0EsQ0EzTEUsQUEwR0osQUFzQkUsR0FyRGMsR0FtRmQsQ0F4RUYsRUF0Q29CLEFBcUJJLENBaEJSLENBakVaLEFBNkNrQixNQTJDUyxLQXRCUixDQUxuQixJQWYyQixJQW9DUixVQWZMLEtBc0JELE1BMUNHLEFBb0NELEdBZmpCLEdBdEZzQixBQU9KLEFBY1EsQUFZRCxBQVNELEFBU0QsQUFNRyxBQVlBLEdBdUNmLENBNkNjLEFBc0JkLElBN0dULEtBOEdVLEFBS1csQ0F4RUwsRUFyR0UsT0F5S3BCLENBakZGLFFBY1csRUFyR1ksQUE2S1AsT0F2RVAsS0F3RVAsRUF2RVksWUFDZCxTQTdEd0IsU0FuRFIsQUFxQlksQUFxQlYsQUFlTSxBQVlQLENBZ0NqQixRQWpEdUIsRUFrQkgsR0EzQkwsSUFlWCxHQXpCbUIsQ0FYRSxHQXNCSCxBQTJCaEIsQUFrRmlCLENBcEduQixpQkFSVyxNQXBDUSxLQVJDLEFBNkN0QixjQXBDZ0IsUUFSSCxNQVNxQixPQVJwQyx5QkFTa0IsQUFzQlEsQ0FYRyxHQW1JM0Isb0JBbEltQixlQUNGLGFBQ2YsRUFiRix3QkFzQmEsV0FDbUQsNERBQ2hELHNEQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgLypSZS1yZW5kZXJzIGN1cnJlbnQgdGltZSBhbmQgY291bnRkb3duIHZhbHVlcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKkNsZWFyIHRoZSBpbnRlcnZhbHMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MqL1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIC8qU2V0cyBjdXJyZW50IHRpbWUgdG8gYmUgcmVmcmVzaGVkIGluIGNvbXBvbmVudGRpZE1vdW50Ki9cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICAvKkNvcnJlc3BvbmRzIGRpYWwgdmFsdWUgdG8gaG91cnMsIG1pbnMgYW5kIHNlY3Mgc3RhdGUgdmFsdWVzKi9cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIC8qU3RhcnQgYW5kIHN0b3AgYnV0dG9uIGZvciB0aW1lciovXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDaGFuZ2VzIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGhvdXJzLCBtaW5zIGFuZCBzZWNzKi9cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypFeHBhbmRzIHRoZSBkaXNwbGF5IGJveCB1cHdhcmRzIHRvIHNob3cgdGhlIGRpYWwgb3B0aW9ucyovXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypTaWxlbmNlIGFsYXJtIGFuZCB2aWJyYXRpb24gZnJvbSB0aW1lciByZWFjaGluZyB6ZXJvKi9cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qMiBmdW5jdGlvbnMgYmVsb3cgYWRkIGFlc3RldGljcyB3aGVuIGNob29zaW5nIGRpYWwqL1xyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKk5hdiBCYXIqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgey8qKipDb250ZW50KioqL31cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyoqKkZvb3RlcioqKi99XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLypJZCBhbmQgQ2xhc3MgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgLypHZW5lcmljIEVsZW1lbnQgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLCBoMiwgcHtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggNDMrICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCAxMHB4IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIC8qUmVzcG9uc2l2ZSBXZWIgRGVzaWduKi9cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBodG1sLFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0gIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3161244322",
      __self: this
    }, "html,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{padding:0;margin:0;border:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNGMyQixBQU1xQixBQUdGLFVBQ0QsU0FDQSxTQUNhLHNCQUN4QixvRkFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgLypSZS1yZW5kZXJzIGN1cnJlbnQgdGltZSBhbmQgY291bnRkb3duIHZhbHVlcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKkNsZWFyIHRoZSBpbnRlcnZhbHMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MqL1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIC8qU2V0cyBjdXJyZW50IHRpbWUgdG8gYmUgcmVmcmVzaGVkIGluIGNvbXBvbmVudGRpZE1vdW50Ki9cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICAvKkNvcnJlc3BvbmRzIGRpYWwgdmFsdWUgdG8gaG91cnMsIG1pbnMgYW5kIHNlY3Mgc3RhdGUgdmFsdWVzKi9cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIC8qU3RhcnQgYW5kIHN0b3AgYnV0dG9uIGZvciB0aW1lciovXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDaGFuZ2VzIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGhvdXJzLCBtaW5zIGFuZCBzZWNzKi9cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypFeHBhbmRzIHRoZSBkaXNwbGF5IGJveCB1cHdhcmRzIHRvIHNob3cgdGhlIGRpYWwgb3B0aW9ucyovXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypTaWxlbmNlIGFsYXJtIGFuZCB2aWJyYXRpb24gZnJvbSB0aW1lciByZWFjaGluZyB6ZXJvKi9cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qMiBmdW5jdGlvbnMgYmVsb3cgYWRkIGFlc3RldGljcyB3aGVuIGNob29zaW5nIGRpYWwqL1xyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKk5hdiBCYXIqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgey8qKipDb250ZW50KioqL31cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyoqKkZvb3RlcioqKi99XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLypJZCBhbmQgQ2xhc3MgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgLypHZW5lcmljIEVsZW1lbnQgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLCBoMiwgcHtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggNDMrICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCAxMHB4IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIC8qUmVzcG9uc2l2ZSBXZWIgRGVzaWduKi9cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBodG1sLFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgKntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0gIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bryan\desktop\Programming Projects\02.1 Simple Count Down\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiaG9tZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidGltZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VycyIsIm1pbnMiLCJzZWNzIiwidGltZXJTdGFydCIsImVuYWJsZVRpbWVyIiwiYWxhcm1TdGFydCIsImF1ZGlvMSIsImdldEhvdXJBcnIiLCJhcnIiLCJpIiwicHVzaCIsImdldE1pblNlY0FyciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZVN0YXJ0Q2xpY2siLCJjb3VudERvd24iLCJoYW5kbGVTZXRUaW1lQ2xpY2siLCJ3aW5kb3dDbGljayIsImNvbXBvbmVudERpZE1vdW50IiwibG9jYWxUaW1lIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInRpbWVyVGltZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInRvZGF5RGF0ZSIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImlubmVySFRNTCIsIkF1ZGlvIiwicGxheSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInZpYnJhdGUiLCJob3VyIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicGF1c2UiLCJob3ZlckNvbG9yIiwiY29sb3IiLCJob3Zlck91dENvbG9yIiwicmVuZGVyIiwidGltZUJ1dHRvbiIsImZvbnRTaXplIiwid2lkdGgiLCJvdXRsaW5lIiwiZ2V0TnVtSG91cnMiLCJtYXAiLCJnZXROdW1NaW4iLCJnZXROdW1TZWMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZlLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQWtDO0FBQy9DQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNoQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxJQUFJQyxJQUFKLEdBQVdDLGtCQUFYLEVBREs7QUFFWEMsV0FBSyxFQUFFLElBRkk7QUFHWEMsVUFBSSxFQUFFLElBSEs7QUFJWEMsVUFBSSxFQUFFLElBSks7QUFLWEMsZ0JBQVUsRUFBRSxLQUxEO0FBTVhDLGlCQUFXLEVBQUUs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ZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXNyQkFERjtBQXdTRDs7QUEzZDhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGpELGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCksXHJcbiAgICAgIGhvdXJzOiAnMDAnLFxyXG4gICAgICBtaW5zOiAnMDAnLFxyXG4gICAgICBzZWNzOiAnMDAnLFxyXG4gICAgICB0aW1lclN0YXJ0OiBmYWxzZSxcclxuICAgICAgZW5hYmxlVGltZXI6IHRydWUsXHJcbiAgICAgIGFsYXJtU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3RhcnRDbGljayA9IHRoaXMuaGFuZGxlU3RhcnRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb3VudERvd24gPSB0aGlzLmNvdW50RG93bi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2sgPSB0aGlzLmhhbmRsZVNldFRpbWVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy53aW5kb3dDbGljayA9IHRoaXMud2luZG93Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIH07XHJcblxyXG4gIC8qUmUtcmVuZGVycyBjdXJyZW50IHRpbWUgYW5kIGNvdW50ZG93biB2YWx1ZXMgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgLypDbGVhciB0aGUgaW50ZXJ2YWxzIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzKi9cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvY2FsVGltZSlcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclRpbWUpXHJcbiAgfVxyXG5cclxuICAvKlNldHMgY3VycmVudCB0aW1lIHRvIGJlIHJlZnJlc2hlZCBpbiBjb21wb25lbnRkaWRNb3VudCovXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgLypDb3JyZXNwb25kcyBkaWFsIHZhbHVlIHRvIGhvdXJzLCBtaW5zIGFuZCBzZWNzIHN0YXRlIHZhbHVlcyovXHJcbiAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbdGFyZ2V0Lm5hbWVdIDogdGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgfVxyXG5cclxuICAvKlN0YXJ0IGFuZCBzdG9wIGJ1dHRvbiBmb3IgdGltZXIqL1xyXG4gIGhhbmRsZVN0YXJ0Q2xpY2soKXtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT09IGZhbHNlKXtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljaygpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IHRydWV9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IHRydWV9KTtcclxuICAgICAgaWYgKGhvdXJzID09IDAgJiYgbWlucz09IDAgJiYgc2VjcyA9PSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjQTQyNDJGJztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdG9wJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pXHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qQ2hhbmdlcyB0aGUgc3RhdGUgdmFsdWVzIGZvciBob3VycywgbWlucyBhbmQgc2VjcyovXHJcbiAgY291bnREb3duICgpe1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5zdGF0ZS5ob3VycztcclxuICAgIGxldCBtaW5zID0gdGhpcy5zdGF0ZS5taW5zO1xyXG4gICAgbGV0IHNlY3MgPSB0aGlzLnN0YXRlLnNlY3M7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PSB0cnVlICYmIHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICBpZiAoc2VjcyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAoK3RoaXMuc3RhdGUuc2VjcyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAobWlucyAhPSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAoK3RoaXMuc3RhdGUubWlucyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoaG91cnMgIT0gMCApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdXJzOiAoK3RoaXMuc3RhdGUuaG91cnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICc1OSd9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5zdGF0ZS5hbGFybVN0YXJ0ID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2F1ZGlvMSA6IG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKX0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBsYXkoKTtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMjAwMCk7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qRXhwYW5kcyB0aGUgZGlzcGxheSBib3ggdXB3YXJkcyB0byBzaG93IHRoZSBkaWFsIG9wdGlvbnMqL1xyXG4gIGhhbmRsZVNldFRpbWVDbGljaygpe1xyXG4gICAgICBsZXQgaG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLWhvdXInKTtcclxuICAgICAgbGV0IG1pbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1taW4nKTtcclxuICAgICAgbGV0IHNlY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1zZWMnKTtcclxuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgICAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jykub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0OiBmYWxzZX0pXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IHRydWUpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogZmFsc2V9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdGFydCc7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiB0cnVlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIG1pbnMuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qU2lsZW5jZSBhbGFybSBhbmQgdmlicmF0aW9uIGZyb20gdGltZXIgcmVhY2hpbmcgemVybyovXHJcbiAgd2luZG93Q2xpY2soKXtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvMSAhPSAnJyAmJiB0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wYXVzZSgpO1xyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKjIgZnVuY3Rpb25zIGJlbG93IGFkZCBhZXN0ZXRpY3Mgd2hlbiBjaG9vc2luZyBkaWFsKi9cclxuICBob3ZlckNvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMzczMzM3JztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICB9XHJcblxyXG4gIGhvdmVyT3V0Q29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNEOEIzOUMnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzM3MzMzNyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHRpbWVCdXR0b24gPSB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRDhCMzlDJyxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXROdW1Ib3VycyA9IHRoaXMuc3RhdGUuZ2V0SG91ckFycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdob3Vycycga2V5ID0ge2kgKyAnaG91cnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1NaW4gPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdtaW5zJyBrZXkgPSB7aSArICdtaW5zJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtU2VjID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnc2Vjcycga2V5ID0ge2kgKyAnc2Vjcyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcicgb25DbGljayA9IHt0aGlzLndpbmRvd0NsaWNrfT5cclxuICAgICAgICBcclxuICAgICAgey8qKipOYXYgQmFyKioqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2YmFyJz5cclxuICAgICAgICAgIDxoMSBpZCA9ICd0aXRsZSc+U2ltcGxlIENvdW50ZG93biBUaW1lcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdmbGV4LWNvbnRhaW5lci1jb2x1bW4nPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+VG9kYXkncyBEYXRlOiA8dT57dGhpcy50b2RheURhdGUoKX08L3U+PC9oMj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPkN1cnJlbnQgVGltZTogPHU+e3RoaXMuc3RhdGUudGltZX08L3U+PC9oMj4gIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIHsvKioqQ29udGVudCoqKi99XHJcblxyXG4gICAgICAgIDxkaXYgaWQgPSAnZGlzcGxheSc+XHJcbiAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyLXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gJ3RpbWVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLmhvdXJzfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLWhvdXInIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtSG91cnN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PkhvdXJzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLm1pbnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtbWluJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bU1pbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+TWluczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5zZWNzfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtc2VjJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bVNlY31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+U2VjczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkID0gJ3N0YXJ0LWJ1dHRvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVN0YXJ0Q2xpY2t9PlN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qKipGb290ZXIqKiovfVxyXG5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyBCcnlhbiBXb25nIHwgMjAyMDwvcD5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC8qSWQgYW5kIENsYXNzIFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGppc3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCAjRjdGOUY5ICwgI0UzRTdEMywgIzg0OTQ4Myk7XHJcbiAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDMzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICN0aW1lcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50aW1lLXBsYWNlLWhvbGRlcnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEE2NzY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgIC8qR2VuZXJpYyBFbGVtZW50IFN0eWxpbmcqL1xyXG5cclxuICAgICAgICAgIGgxOmhvdmVye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSwgaDIsIHB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgNDkrICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIC8qIExpa2VseSBmdXR1cmUgKi8gICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVyIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggMTBweCA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAvKlJlc3BvbnNpdmUgV2ViIERlc2lnbiovXHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aW1lci13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgaHRtbCxcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==