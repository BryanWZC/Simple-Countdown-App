webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Bryan\\desktop\\Programming Projects\\02.1 Simple Count Down\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(home, _React$Component);

  var _super = _createSuper(home);

  function home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, home);

    _this = _super.call(this, props);
    _this.state = {
      time: new Date().toLocaleTimeString(),
      hours: '00',
      mins: '00',
      secs: '00',
      timerStart: false,
      enableTimer: true,
      alarmStart: false,
      audio1: '',
      getHourArr: function getHourArr() {
        var arr = [];

        for (var i = 0; i < 100; i++) {
          arr.push(i);
        }

        return arr;
      },
      getMinSecArr: function getMinSecArr() {
        var arr = [];

        for (var i = 0; i < 60; i++) {
          arr.push(i);
        }

        return arr;
      }
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleStartClick = _this.handleStartClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.countDown = _this.countDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSetTimeClick = _this.handleSetTimeClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.windowClick = _this.windowClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(home, [{
    key: "componentDidMount",

    /*Re-renders current time and countdown values */
    value: function componentDidMount() {
      var _this2 = this;

      this.localTime = setInterval(function () {
        _this2.setState({
          time: new Date().toLocaleTimeString()
        });
      }, 1000);
      this.timerTime = setInterval(this.countDown, 1000);
    }
    /*Clear the intervals to prevent memory leaks*/

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.localTime);
      clearInterval(this.timerTime);
    }
    /*Sets current time to be refreshed in componentdidMount*/

  }, {
    key: "todayDate",
    value: function todayDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth()).padStart(2, '0');
      var yyyy = today.getFullYear();
      return mm + '/' + dd + '/' + yyyy;
    }
  }, {
    key: "handleClick",

    /*Corresponds dial value to hours, mins and secs state values*/
    value: function handleClick(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value.toString().padStart(2, 0)));
    }
    /*Start and stop button for timer*/

  }, {
    key: "handleStartClick",
    value: function handleStartClick() {
      var button = document.getElementById('start-button');
      var hours = this.state.hours;
      var mins = this.state.mins;
      var secs = this.state.secs;

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

  }, {
    key: "countDown",
    value: function countDown() {
      var hours = this.state.hours;
      var mins = this.state.mins;
      var secs = this.state.secs;
      var button = document.getElementById('start-button');

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

  }, {
    key: "handleSetTimeClick",
    value: function handleSetTimeClick() {
      var hour = document.getElementById('dial-hour');
      var mins = document.getElementById('dial-min');
      var secs = document.getElementById('dial-sec');
      var button = document.getElementById('start-button');
      var height = document.getElementById('display').offsetHeight;
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

  }, {
    key: "windowClick",
    value: function windowClick() {
      if (this.state.audio1 != '' && this.state.alarmStart == true) {
        this.setState({
          alarmStart: false
        });
        this.state.audio1.pause();
        window.navigator.vibrate(0);
      }
    }
    /*2 functions below add aestetics when choosing dial*/

  }, {
    key: "hoverColor",
    value: function hoverColor(e) {
      e.target.style.background = '#373337';
      e.target.style.color = 'white';
    }
  }, {
    key: "hoverOutColor",
    value: function hoverOutColor(e) {
      e.target.style.background = '#D8B39C';
      e.target.style.color = '#373337';
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var timeButton = {
        fontSize: '20px',
        width: '100%',
        background: '#D8B39C',
        outline: 'none'
      };
      var getNumHours = this.state.getHourArr().map(function (value, i) {
        return __jsx("button", {
          name: "hours",
          key: i + 'hours',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      var getNumMin = this.state.getMinSecArr().map(function (value, i) {
        return __jsx("button", {
          name: "mins",
          key: i + 'mins',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      var getNumSec = this.state.getMinSecArr().map(function (value, i) {
        return __jsx("button", {
          name: "secs",
          key: i + 'secs',
          style: timeButton,
          onMouseOver: _this3.hoverColor,
          onMouseOut: _this3.hoverOutColor,
          value: value,
          onClick: _this3.handleClick,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      return __jsx("div", {
        onClick: this.windowClick,
        className: "jsx-3148346631" + " " + 'container',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-3148346631" + " " + 'navbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx("h1", {
        id: "title",
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, "Simple Countdown Timer"), __jsx("div", {
        className: "jsx-3148346631" + " " + 'flex-container-column',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "jsx-3148346631" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }
      }, "Today's Date: ", __jsx("u", {
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 55
        }
      }, this.todayDate())), __jsx("h2", {
        className: "jsx-3148346631" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 15
        }
      }, "Current Time: ", __jsx("u", {
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 55
        }
      }, this.state.time)))), __jsx("div", {
        id: "display",
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "timer-wrapper",
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "timer",
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-3148346631" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }
      }, this.state.hours, ":"), __jsx("div", {
        id: "dial-hour",
        className: "jsx-3148346631" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, getNumHours), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, "Hours")), __jsx("div", {
        className: "jsx-3148346631" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 17
        }
      }, this.state.mins, ":"), __jsx("div", {
        id: "dial-min",
        className: "jsx-3148346631" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, getNumMin), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }
      }, "Mins")), __jsx("div", {
        className: "jsx-3148346631" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }
      }, this.state.secs), __jsx("div", {
        id: "dial-sec",
        className: "jsx-3148346631" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }, getNumSec), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-3148346631" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, "Secs"))), __jsx("button", {
        id: "start-button",
        onClick: this.handleStartClick,
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, "Start")), __jsx("footer", {
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "jsx-3148346631",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }, "\xA9 Bryan Wong | 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1450211914",
        __self: this
      }, ".container.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box;height:100vh;}.navbar.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:10vh;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#373337;color:#D8B39C;border-bottom:3px solid #D8B39C;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}#title.jsx-3148346631{font-size:55px;cursor:auto;}.flex-container-column.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10px 0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;jistify-content:center;margin-left:2%;border:solid;}.heading.jsx-3148346631{font-weight:300;}#display.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background-image:radial-gradient( #F7F9F9 ,#E3E7D3,#849483);-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}#timer-wrapper.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:28%;bottom:33%;position:absolute;bottom:33%;}#timer.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;min-width:33.33%;}.time-place-holders.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.time-display.jsx-3148346631{height:90%;font-size:160px;font-weight:400;background-color:#373337;color:#D8B39C;}.dial-wrapper1.jsx-3148346631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0px;overflow:auto;}.dial-wrapper1.jsx-3148346631::-webkit-scrollbar{display:none;}.description.jsx-3148346631{background-color:#373337;color:#D8B39C;}#start-button.jsx-3148346631{width:100%;font-size:25px;height:32px;background:#00A676;color:#F7F9F9;}h1.jsx-3148346631:hover{cursor:pointer;}h1.jsx-3148346631:focus{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-3148346631,h2.jsx-3148346631,p.jsx-3148346631{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}footer.jsx-3148346631{background:#373337;color:#D8B39C;border-top:3px solid #D8B39C;font-size:13px;width:100%;position:flex;-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;}footer.jsx-3148346631 p.jsx-3148346631{padding:5px 0 8px 10px;}button.jsx-3148346631{outline:none;}button.jsx-3148346631:focus{outline:none;}@media screen and (max-width:1000px){#title.jsx-3148346631{font-size:42px;}.heading.jsx-3148346631{font-size:18px;}.time-display.jsx-3148346631{font-size:120px;}.description.jsx-3148346631{font-size:25px;}#start-button.jsx-3148346631{font-size:23px;}}@media screen and (max-width:750px){#title.jsx-3148346631{font-size:30px;}.heading.jsx-3148346631{font-size:15px;}.flex-container-column.jsx-3148346631{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-display.jsx-3148346631{font-size:120px;}.description.jsx-3148346631{font-size:25px;}#start-button.jsx-3148346631{font-size:23px;}footer.jsx-3148346631{font-size:13px;}}@media screen and (max-width:575px){footer.jsx-3148346631{font-size:13px;}.navbar.jsx-3148346631{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;}.flex-container-column.jsx-3148346631{margin:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:10px 0 10px 0;border:none;}}@media screen and (max-width:450px){.container.jsx-3148346631{box-sizing:border-box;}#title.jsx-3148346631{font-size:30px;}.heading.jsx-3148346631{font-size:15px;}.time-display.jsx-3148346631{font-size:90px;}.description.jsx-3148346631{font-size:25px;}#start-button.jsx-3148346631{font-size:23px;}}@media screen and (max-width:375px){#title.jsx-3148346631{font-size:24px;}.time-display.jsx-3148346631{font-size:60px;}.description.jsx-3148346631{font-size:25px;}#start-button.jsx-3148346631{font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc09vQixBQU0wQixBQU9FLEFBVUksQUFJRixBQVNHLEFBR0wsQUFTQSxBQVNFLEFBTUEsQUFLRixBQU9FLEFBTUEsQUFHWSxBQUloQixBQVVFLEFBR0YsQUFJWSxBQU1OLEFBVUssQUFHWCxBQUdELEFBT0csQUFHQSxBQUlDLEFBR0QsQUFHQSxBQUtFLEFBR0EsQUFHTyxBQUtOLEFBR0QsQUFHQSxBQUdBLEFBS0EsQUFHTyxBQUtiLEFBUWEsQUFHUCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHQSxBQUdBLEFBR0EsU0FwQ08sRUFySEosQUFvQkgsRUFQYixBQW9CYSxBQXVCbkIsQUFHQSxFQXhHa0IsQUEyRWxCLEFBb0NBLEFBR0EsQUFPQSxBQUdBLEFBS0UsQUFHQSxBQVdBLEFBR0EsQUFHQSxBQUtBLEFBbUJBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFLQSxBQUdBLEFBR0EsQUFHQSxDQTFMRSxBQXlHSixBQXNCRSxHQXBEYyxHQWtGZCxDQXhFRixFQXJDb0IsQUFxQkksQ0FoQlIsQ0FqRVosQUE2Q2tCLE1BMkNTLEtBdEJSLENBTG5CLElBZjJCLElBb0NSLFVBZkwsS0FzQkQsTUExQ0csQUFvQ0QsR0FmakIsR0F0RnNCLEFBT0osQUFjUSxBQVlELEFBU0QsQUFTRCxBQU1HLEFBWUEsR0F1Q2YsQ0E0Q2MsQUFzQmQsSUE1R1QsS0E2R1UsQUFLVyxDQXZFVCxFQXJHTSxPQXdLcEIsQ0FoRkYsSUFjZ0IsTUFyR08sQUE0S1AsWUFDZCx1QkFsSXNCLFNBbkRSLEFBcUJZLEFBcUJWLEFBZU0sQUFZUCxDQWdDakIsR0FVQSxLQTNEdUIsRUFrQkgsR0EzQkwsSUFlWCxHQXpCbUIsQ0FYRSxHQXNCSCxBQTJCaEIsQUFpRmlCLENBbkduQixpQkFSVyxNQXBDUSxLQVJDLEFBNkN0QixjQXBDZ0IsUUFSSCxNQVNxQixPQVJwQyx5QkFTa0IsQUFzQlEsQ0FYRyxHQWtJM0Isb0JBakltQixlQUNGLGFBQ2YsRUFiRix3QkFzQmEsV0FDbUQsNERBQ2hELHNEQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgLypSZS1yZW5kZXJzIGN1cnJlbnQgdGltZSBhbmQgY291bnRkb3duIHZhbHVlcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKkNsZWFyIHRoZSBpbnRlcnZhbHMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MqL1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIC8qU2V0cyBjdXJyZW50IHRpbWUgdG8gYmUgcmVmcmVzaGVkIGluIGNvbXBvbmVudGRpZE1vdW50Ki9cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICAvKkNvcnJlc3BvbmRzIGRpYWwgdmFsdWUgdG8gaG91cnMsIG1pbnMgYW5kIHNlY3Mgc3RhdGUgdmFsdWVzKi9cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIC8qU3RhcnQgYW5kIHN0b3AgYnV0dG9uIGZvciB0aW1lciovXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDaGFuZ2VzIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGhvdXJzLCBtaW5zIGFuZCBzZWNzKi9cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypFeHBhbmRzIHRoZSBkaXNwbGF5IGJveCB1cHdhcmRzIHRvIHNob3cgdGhlIGRpYWwgb3B0aW9ucyovXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypTaWxlbmNlIGFsYXJtIGFuZCB2aWJyYXRpb24gZnJvbSB0aW1lciByZWFjaGluZyB6ZXJvKi9cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qMiBmdW5jdGlvbnMgYmVsb3cgYWRkIGFlc3RldGljcyB3aGVuIGNob29zaW5nIGRpYWwqL1xyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKk5hdiBCYXIqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgey8qKipDb250ZW50KioqL31cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyoqKkZvb3RlcioqKi99XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLypJZCBhbmQgQ2xhc3MgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgLypHZW5lcmljIEVsZW1lbnQgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLCBoMiwgcHtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggNDMrICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgNDBweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCAxMHB4IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIC8qUmVzcG9uc2l2ZSBXZWIgRGVzaWduKi9cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3656819428",
        __self: this
      }, "html,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{padding:0;margin:0;border:0;box-sizing:border-box;overflow-y:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2MyQixBQU1xQixBQUlGLFVBQ0QsU0FDQSxTQUNhLHNCQUNKLGtCQUNwQixrRUFQQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgLypSZS1yZW5kZXJzIGN1cnJlbnQgdGltZSBhbmQgY291bnRkb3duIHZhbHVlcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKkNsZWFyIHRoZSBpbnRlcnZhbHMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MqL1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIC8qU2V0cyBjdXJyZW50IHRpbWUgdG8gYmUgcmVmcmVzaGVkIGluIGNvbXBvbmVudGRpZE1vdW50Ki9cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICAvKkNvcnJlc3BvbmRzIGRpYWwgdmFsdWUgdG8gaG91cnMsIG1pbnMgYW5kIHNlY3Mgc3RhdGUgdmFsdWVzKi9cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIC8qU3RhcnQgYW5kIHN0b3AgYnV0dG9uIGZvciB0aW1lciovXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDaGFuZ2VzIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGhvdXJzLCBtaW5zIGFuZCBzZWNzKi9cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypFeHBhbmRzIHRoZSBkaXNwbGF5IGJveCB1cHdhcmRzIHRvIHNob3cgdGhlIGRpYWwgb3B0aW9ucyovXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypTaWxlbmNlIGFsYXJtIGFuZCB2aWJyYXRpb24gZnJvbSB0aW1lciByZWFjaGluZyB6ZXJvKi9cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qMiBmdW5jdGlvbnMgYmVsb3cgYWRkIGFlc3RldGljcyB3aGVuIGNob29zaW5nIGRpYWwqL1xyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKk5hdiBCYXIqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgey8qKipDb250ZW50KioqL31cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyoqKkZvb3RlcioqKi99XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLypJZCBhbmQgQ2xhc3MgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgLypHZW5lcmljIEVsZW1lbnQgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLCBoMiwgcHtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggNDMrICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgNDBweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCAxMHB4IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIC8qUmVzcG9uc2l2ZSBXZWIgRGVzaWduKi9cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"));
    }
  }]);

  return home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob21lIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91cnMiLCJtaW5zIiwic2VjcyIsInRpbWVyU3RhcnQiLCJlbmFibGVUaW1lciIsImFsYXJtU3RhcnQiLCJhdWRpbzEiLCJnZXRIb3VyQXJyIiwiYXJyIiwiaSIsInB1c2giLCJnZXRNaW5TZWNBcnIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVTdGFydENsaWNrIiwiY291bnREb3duIiwiaGFuZGxlU2V0VGltZUNsaWNrIiwid2luZG93Q2xpY2siLCJsb2NhbFRpbWUiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwidGltZXJUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImlubmVySFRNTCIsIkF1ZGlvIiwicGxheSIsIndpbmRvdyIsIm5hdmlnYXRvciIsInZpYnJhdGUiLCJob3VyIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicGF1c2UiLCJjb2xvciIsInRpbWVCdXR0b24iLCJmb250U2l6ZSIsIndpZHRoIiwib3V0bGluZSIsImdldE51bUhvdXJzIiwibWFwIiwiaG92ZXJDb2xvciIsImhvdmVyT3V0Q29sb3IiLCJnZXROdW1NaW4iLCJnZXROdW1TZWMiLCJ0b2RheURhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7OztBQUNuQixnQkFBWUMsS0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGLENBREYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBOUJGLENBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdW5yQkFERjtBQXNTRDs7OztFQXpkK0JrRCw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lN2M0ODU1ZjBmNDMyM2Q1ZjIwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvMTogJycsXHJcbiAgICAgIGdldEhvdXJBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldE1pblNlY0FycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgLypSZS1yZW5kZXJzIGN1cnJlbnQgdGltZSBhbmQgY291bnRkb3duIHZhbHVlcyAqL1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5sb2NhbFRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7IHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9KX0sIDEwMDApO1xyXG4gICAgdGhpcy50aW1lclRpbWUgPSBzZXRJbnRlcnZhbCh0aGlzLmNvdW50RG93biwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICAvKkNsZWFyIHRoZSBpbnRlcnZhbHMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MqL1xyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIC8qU2V0cyBjdXJyZW50IHRpbWUgdG8gYmUgcmVmcmVzaGVkIGluIGNvbXBvbmVudGRpZE1vdW50Ki9cclxuICB0b2RheURhdGUoKXtcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgcmV0dXJuICBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICB9O1xyXG5cclxuICAvKkNvcnJlc3BvbmRzIGRpYWwgdmFsdWUgdG8gaG91cnMsIG1pbnMgYW5kIHNlY3Mgc3RhdGUgdmFsdWVzKi9cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIC8qU3RhcnQgYW5kIHN0b3AgYnV0dG9uIGZvciB0aW1lciovXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypDaGFuZ2VzIHRoZSBzdGF0ZSB2YWx1ZXMgZm9yIGhvdXJzLCBtaW5zIGFuZCBzZWNzKi9cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogbmV3IEF1ZGlvKCcuL2FsYXJtLm1wMycpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypFeHBhbmRzIHRoZSBkaXNwbGF5IGJveCB1cHdhcmRzIHRvIHNob3cgdGhlIGRpYWwgb3B0aW9ucyovXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypTaWxlbmNlIGFsYXJtIGFuZCB2aWJyYXRpb24gZnJvbSB0aW1lciByZWFjaGluZyB6ZXJvKi9cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qMiBmdW5jdGlvbnMgYmVsb3cgYWRkIGFlc3RldGljcyB3aGVuIGNob29zaW5nIGRpYWwqL1xyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIFxyXG4gICAgICB7LyoqKk5hdiBCYXIqKiovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgey8qKipDb250ZW50KioqL31cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyoqKkZvb3RlcioqKi99XHJcblxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLypJZCBhbmQgQ2xhc3MgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOCU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzMyU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpYWwtd3JhcHBlcjE6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgICBjb2xvcjogI0Y3RjlGOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgLypHZW5lcmljIEVsZW1lbnQgU3R5bGluZyovXHJcblxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxLCBoMiwgcHtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgIC8qIENocm9tZSA0OSsgKi9cclxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgIC8qIEZpcmVmb3ggNDMrICovXHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgICAvKiBObyBzdXBwb3J0IHlldCAqL1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgLyogTGlrZWx5IGZ1dHVyZSAqLyAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgNDBweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDhweCAxMHB4IDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIC8qUmVzcG9uc2l2ZSBXZWIgRGVzaWduKi9cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9