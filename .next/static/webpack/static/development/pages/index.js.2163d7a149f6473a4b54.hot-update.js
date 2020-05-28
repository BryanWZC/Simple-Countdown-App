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
      audio: function audio() {
        return new Audio('./alarm.mp3');
      },
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
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleStartClick = _this.handleStartClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.countDown = _this.countDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSetTimeClick = _this.handleSetTimeClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.windowClick = _this.windowClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.localTime = setInterval(function () {
        _this2.setState({
          time: new Date().toLocaleTimeString()
        });
      }, 1000);
      this.timerTime = setInterval(this.countDown, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.localTime);
      clearInterval(this.timerTime);
    }
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
    key: "handleChange",
    value: function handleChange(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var target = e.target;
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.name, target.value.toString().padStart(2, 0)));
    }
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
            audio1: this.state.audio()
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
            lineNumber: 179,
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
            lineNumber: 180,
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
            lineNumber: 181,
            columnNumber: 67
          }
        }, value.toString().padStart(2, 0));
      });
      return __jsx("div", {
        onClick: this.windowClick,
        className: "jsx-152629551" + " " + 'container',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-152629551" + " " + 'navbar',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 9
        }
      }, __jsx("h1", {
        id: "title",
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }
      }, "Simple Countdown Timer"), __jsx("div", {
        className: "jsx-152629551" + " " + 'flex-container-column',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "jsx-152629551" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 15
        }
      }, "Today's Date: ", __jsx("u", {
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 55
        }
      }, this.todayDate())), __jsx("h2", {
        className: "jsx-152629551" + " " + 'heading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 15
        }
      }, "Current Time: ", __jsx("u", {
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 55
        }
      }, this.state.time)))), __jsx("div", {
        id: "display",
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "timer-wrapper",
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "timer",
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-152629551" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }
      }, this.state.hours, ":"), __jsx("div", {
        id: "dial-hour",
        className: "jsx-152629551" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }
      }, getNumHours), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 17
        }
      }, "Hours")), __jsx("div", {
        className: "jsx-152629551" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 17
        }
      }, this.state.mins, ":"), __jsx("div", {
        id: "dial-min",
        className: "jsx-152629551" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, getNumMin), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 17
        }
      }, "Mins")), __jsx("div", {
        className: "jsx-152629551" + " " + 'time-place-holders',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }
      }, __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'time-display',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }
      }, this.state.secs), __jsx("div", {
        id: "dial-sec",
        className: "jsx-152629551" + " " + 'dial-wrapper1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, getNumSec), __jsx("h1", {
        onClick: this.handleSetTimeClick,
        className: "jsx-152629551" + " " + 'description',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }
      }, "Secs"))), __jsx("button", {
        id: "start-button",
        onClick: this.handleStartClick,
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }
      }, "Start")), __jsx("footer", {
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }, __jsx("p", {
        className: "jsx-152629551",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, "\xA9 Bryan Wong | 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4029485476",
        __self: this
      }, ".container.jsx-152629551{min-height:calc(100vh - 18px);border:solid;}.navbar.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:10vh;padding-left:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#373337;color:#D8B39C;border-bottom:3px solid #D8B39C;}#title.jsx-152629551{font-size:55px;}.flex-container-column.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 10px 0 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;jistify-content:center;margin-left:2%;border:solid;}.heading.jsx-152629551{font-weight:300;}#timer-wrapper.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:28%;position:absolute;bottom:33%;}#display.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:calc(90vh - 20px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;background-image:radial-gradient( #F7F9F9 ,#E3E7D3,#849483);}#timer.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;min-width:33.33%;}.time-place-holders.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.dial-wrapper1.jsx-152629551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:0px;overflow:auto;}.dial-wrapper1.jsx-152629551::-webkit-scrollbar{display:none;}#start-button.jsx-152629551{width:100%;font-size:25px;height:32px;background:#00A676;color:#F7F9F9;}h1.jsx-152629551:hover{cursor:pointer;}h1.jsx-152629551:focus{outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-152629551{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}footer.jsx-152629551{position:absolute;display:block;bottom:0;left:0;padding:5px 0 8px 5px;width:100%;z-index:1;background:#373337;color:#D8B39C;font-size:15px;border-top:3px solid #D8B39C;height:5%;}.time-display.jsx-152629551{height:90%;font-size:160px;font-weight:400;background-color:#373337;color:#D8B39C;}.description.jsx-152629551{background-color:#373337;color:#D8B39C;}button.jsx-152629551{outline:none;}button.jsx-152629551:focus{outline:none;}@media screen and (max-width:1000px){#title.jsx-152629551{font-size:42px;}.heading.jsx-152629551{font-size:18px;}.time-display.jsx-152629551{font-size:120px;}.description.jsx-152629551{font-size:25px;}#start-button.jsx-152629551{font-size:23px;}footer.jsx-152629551{font-size:13px;}}@media screen and (max-width:750px){#title.jsx-152629551{font-size:30px;}.heading.jsx-152629551{font-size:15px;}.flex-container-column.jsx-152629551{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-display.jsx-152629551{font-size:120px;}.description.jsx-152629551{font-size:25px;}#start-button.jsx-152629551{font-size:23px;}footer.jsx-152629551{font-size:13px;bottom:0;}}@media screen and (max-width:575px){footer.jsx-152629551{font-size:13px;bottom:-30px;}.navbar.jsx-152629551{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;padding:0;}.flex-container-column.jsx-152629551{margin:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:10px 0 10px 0;border:none;}}@media screen and (max-width:450px){.container.jsx-152629551{box-sizing:border-box;}#title.jsx-152629551{font-size:30px;}.heading.jsx-152629551{font-size:15px;}.time-display.jsx-152629551{font-size:90px;}.description.jsx-152629551{font-size:25px;}#start-button.jsx-152629551{font-size:23px;}}@media screen and (max-width:375px){#title.jsx-152629551{font-size:24px;}#display.jsx-152629551{min-height:100vh;}.time-display.jsx-152629551{font-size:60px;}.description.jsx-152629551{font-size:25px;}#start-button.jsx-152629551{font-size:20px;}footer.jsx-152629551{bottom:-102px;}#timer-wrapper.jsx-152629551{bottom:25%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ09vQixBQUcyQyxBQUtqQixBQVNFLEFBR0YsQUFTRyxBQUlILEFBT0EsQUFTQSxBQU1BLEFBS0EsQUFNQSxBQUdGLEFBT0ksQUFHRixBQUlZLEFBTVAsQUFjUCxBQU9jLEFBSVosQUFHRCxBQUlLLEFBR0EsQUFJQyxBQUdELEFBR0EsQUFHQSxBQUtBLEFBR0EsQUFHTyxBQUtOLEFBR0QsQUFHQSxBQUdBLEFBTUEsQUFJTyxBQUtiLEFBUWEsQUFHUCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBS0EsQUFHRSxBQUdGLEFBR0EsQUFHQSxBQUdELEFBR0gsU0E3Q1csRUE1R1QsQUFrQ0MsQUF3SGxCLEVBN0pBLEFBYW1CLEFBbUNuQixBQUdBLENBdUdFLENBM01GLEFBMkRBLEFBNkNFLEFBR0EsQUFPQSxBQUdBLEFBR0EsQUFLQSxBQUdBLEFBV0EsQUFHQSxBQUdXLEFBTUksQUFvQmYsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUtBLEFBTUEsQUFHQSxBQUdBLENBNUxGLEFBbUdFLEFBeUJBLENBdURBLENBdkhjLElBZ0dkLEVBdEJBLENBaEZzQixBQTJCUixDQXhDRixDQWtDSSxDQWlFaEIsRUF0S2EsRUF1RkosTUFuQlUsQ0F3Q3JCLEVBcEJTLEVBdEZULEFBb0cyQixJQXJCSixDQVFDLFNBcEJSLFdBYUcsQUFxQkgsRUFiSCxDQXBCYixHQWpFa0IsQUFZTSxBQWFBLEFBT08sQUFTVixBQU1HLEFBS0EsSUF3RkcsQUF3QmQsR0E5RUQsQ0FhWixLQWtFYyxBQUtXLEdBektMLENBc0ZDLE1BK0VuQixDQTlGRixLQXZDeUIsS0EvQkosQUF5S0wsRUFuRkEsVUFvRmQsSUFuRmUsZUFDYyxJQWhEWCxTQTdCSSxBQWFSLEFBc0JJLEFBS1AsQ0F5QmIsUUFuQ21CLEVBV0gsR0EzQkksRUFnRVIsRUExQ1osSUFuQ3FCLEdBeUNyQixBQXNGdUIsQ0FqR3ZCLEFBZ0RBLE1BaEVhLFdBQ2IsTUExQnFCLENBK0JBLGtCQTlCTCxjQUNrQixnQ0FDbEMsQ0FTeUIsR0ErSHZCLG9CQTlIZSxLQW1CTyxVQWxCVCxhQUNmLHVEQWtCYSxXQUNtRCw0REFDaEUiLCJmaWxlIjoiQzpcXFVzZXJzXFxCcnlhblxcZGVza3RvcFxcUHJvZ3JhbW1pbmcgUHJvamVjdHNcXDAyLjEgU2ltcGxlIENvdW50IERvd25cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCksXHJcbiAgICAgIGhvdXJzOiAnMDAnLFxyXG4gICAgICBtaW5zOiAnMDAnLFxyXG4gICAgICBzZWNzOiAnMDAnLFxyXG4gICAgICB0aW1lclN0YXJ0OiBmYWxzZSxcclxuICAgICAgZW5hYmxlVGltZXI6IHRydWUsXHJcbiAgICAgIGFsYXJtU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBhdWRpbzogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXVkaW8oJy4vYWxhcm0ubXAzJylcclxuICAgICAgfSxcclxuICAgICAgYXVkaW8xOiAnJyxcclxuICAgICAgZ2V0SG91ckFycjogKCkgPT4ge1xyXG4gICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgICAgZ2V0TWluU2VjQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKXtcclxuICAgICAgICAgIGFyci5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdGFydENsaWNrID0gdGhpcy5oYW5kbGVTdGFydENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvdW50RG93biA9IHRoaXMuY291bnREb3duLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljayA9IHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvd0NsaWNrID0gdGhpcy53aW5kb3dDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmxvY2FsVGltZSA9IHNldEludGVydmFsKCgpID0+IHt0aGlzLnNldFN0YXRlKHsgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0pfSwgMTAwMCk7XHJcbiAgICB0aGlzLnRpbWVyVGltZSA9IHNldEludGVydmFsKHRoaXMuY291bnREb3duLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubG9jYWxUaW1lKVxyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyVGltZSlcclxuICB9XHJcblxyXG4gIHRvZGF5RGF0ZSgpe1xyXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpKS5wYWRTdGFydCgyLCcwJyk7XHJcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4gIG1tICsgJy8nICsgZGQgKyAnLycgKyB5eXl5O1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWV9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayhlKXtcclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1t0YXJnZXQubmFtZV0gOiB0YXJnZXQudmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVN0YXJ0Q2xpY2soKXtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT09IGZhbHNlKXtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuZW5hYmxlVGltZXIgPT09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmhhbmRsZVNldFRpbWVDbGljaygpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IHRydWV9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IHRydWV9KTtcclxuICAgICAgaWYgKGhvdXJzID09IDAgJiYgbWlucz09IDAgJiYgc2VjcyA9PSAwKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjQTQyNDJGJztcclxuICAgICAgYnV0dG9uLmlubmVySFRNTCA9ICdTdG9wJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pXHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb3VudERvd24gKCl7XHJcbiAgICBsZXQgaG91cnMgPSB0aGlzLnN0YXRlLmhvdXJzO1xyXG4gICAgbGV0IG1pbnMgPSB0aGlzLnN0YXRlLm1pbnM7XHJcbiAgICBsZXQgc2VjcyA9IHRoaXMuc3RhdGUuc2VjcztcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lclN0YXJ0ID09IHRydWUgJiYgdGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIGlmIChzZWNzICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICgrdGhpcy5zdGF0ZS5zZWNzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChtaW5zICE9IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21pbnM6ICgrdGhpcy5zdGF0ZS5taW5zIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChob3VycyAhPSAwICl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG91cnM6ICgrdGhpcy5zdGF0ZS5ob3VycyAtIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogJzU5J30pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogJzU5J30pXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YXVkaW8xIDogdGhpcy5zdGF0ZS5hdWRpbygpfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hdWRpbzEucGxheSgpO1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgyMDAwKTtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBBNjc2JztcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2V0VGltZUNsaWNrKCl7XHJcbiAgICAgIGxldCBob3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtaG91cicpO1xyXG4gICAgICBsZXQgbWlucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLW1pbicpO1xyXG4gICAgICBsZXQgc2VjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsLXNlYycpO1xyXG4gICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICBsZXQgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQ6IGZhbHNlfSlcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VuYWJsZVRpbWVyOiBmYWxzZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBzZWNzLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0YXJ0JztcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IHRydWV9KVxyXG4gICAgICBob3VyLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgbWlucy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2luZG93Q2xpY2soKXtcclxuICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvMSAhPSAnJyAmJiB0aGlzLnN0YXRlLmFsYXJtU3RhcnQgPT0gdHJ1ZSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wYXVzZSgpO1xyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnZpYnJhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBob3ZlckNvbG9yKGUpe1xyXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMzczMzM3JztcclxuICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICB9XHJcblxyXG4gIGhvdmVyT3V0Q29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNEOEIzOUMnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnIzM3MzMzNyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHRpbWVCdXR0b24gPSB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRDhCMzlDJyxcclxuICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXROdW1Ib3VycyA9IHRoaXMuc3RhdGUuZ2V0SG91ckFycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdob3Vycycga2V5ID0ge2kgKyAnaG91cnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1NaW4gPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdtaW5zJyBrZXkgPSB7aSArICdtaW5zJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG4gICAgY29uc3QgZ2V0TnVtU2VjID0gdGhpcy5zdGF0ZS5nZXRNaW5TZWNBcnIoKS5tYXAoKHZhbHVlLCBpKSA9PiA8YnV0dG9uIG5hbWUgPSAnc2Vjcycga2V5ID0ge2kgKyAnc2Vjcyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2NvbnRhaW5lcicgb25DbGljayA9IHt0aGlzLndpbmRvd0NsaWNrfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXZiYXInPlxyXG4gICAgICAgICAgPGgxIGlkID0gJ3RpdGxlJz5TaW1wbGUgQ291bnRkb3duIFRpbWVyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2ZsZXgtY29udGFpbmVyLWNvbHVtbic+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5Ub2RheSdzIERhdGU6IDx1Pnt0aGlzLnRvZGF5RGF0ZSgpfTwvdT48L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGluZyc+Q3VycmVudCBUaW1lOiA8dT57dGhpcy5zdGF0ZS50aW1lfTwvdT48L2gyPiAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZCA9ICdkaXNwbGF5Jz5cclxuICAgICAgICAgIDxkaXYgaWQgPSAndGltZXItd3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSAndGltZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuaG91cnN9OjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkID0gJ2RpYWwtaG91cicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1Ib3Vyc31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbicgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+SG91cnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUubWluc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1taW4nIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtTWlufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5NaW5zPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd0aW1lLXBsYWNlLWhvbGRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9ICd0aW1lLWRpc3BsYXknIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pnt0aGlzLnN0YXRlLnNlY3N9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1zZWMnIGNsYXNzTmFtZSA9ICdkaWFsLXdyYXBwZXIxJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0TnVtU2VjfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5TZWNzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQgPSAnc3RhcnQtYnV0dG9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU3RhcnRDbGlja30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPHA+JmNvcHk7IEJyeWFuIFdvbmcgfCAyMDIwPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxOHB4KTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0Q4QjM5QztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgamlzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICN0aW1lci13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDI4JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDMzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNkaXNwbGF5e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDkwdmggLSAyMHB4KTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoICNGN0Y5RjkgLCAjRTNFN0QzLCAjODQ5NDgzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICN0aW1lcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aW1lLXBsYWNlLWhvbGRlcnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWFsLXdyYXBwZXIxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGlhbC13cmFwcGVyMTo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEE2NzY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjdGOUY5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAgLyogQ2hyb21lIDQ5KyAqL1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICAgLyogRmlyZWZveCA0MysgKi9cclxuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgIC8qIE5vIHN1cHBvcnQgeWV0ICovXHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAgICAgICAgICAvKiBMaWtlbHkgZnV0dXJlICovICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgOHB4IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczMzM3O1xyXG4gICAgICAgICAgICBjb2xvcjogI0Q4QjM5QztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyLWNvbHVtbntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBib3R0b206IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aXRsZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjZGlzcGxheXtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgICBib3R0b206IC0xMDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjdGltZXItd3JhcHBlcntcclxuICAgICAgICAgICAgICBib3R0b206IDI1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAqe1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSAiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3161244322",
        __self: this
      }, "html,body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{padding:0;margin:0;border:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJ5YW5cXGRlc2t0b3BcXFByb2dyYW1taW5nIFByb2plY3RzXFwwMi4xIFNpbXBsZSBDb3VudCBEb3duXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWMyQixBQU1xQixBQUdGLFVBQ0QsU0FDQSxTQUNhLHNCQUN4QixvRkFOQSIsImZpbGUiOiJDOlxcVXNlcnNcXEJyeWFuXFxkZXNrdG9wXFxQcm9ncmFtbWluZyBQcm9qZWN0c1xcMDIuMSBTaW1wbGUgQ291bnQgRG93blxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2sgPSB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrID0gdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb2NhbFRpbWUpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJUaW1lKVxyXG4gIH1cclxuXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZX0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvdW50RG93biAoKXtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgaWYgKHNlY3MgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogKCt0aGlzLnN0YXRlLnNlY3MgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1pbnMgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogKCt0aGlzLnN0YXRlLm1pbnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGhvdXJzICE9IDAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3VyczogKCt0aGlzLnN0YXRlLmhvdXJzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAnNTknfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdWRpbzEgOiB0aGlzLnN0YXRlLmF1ZGlvKCl9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wbGF5KCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDIwMDApO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXRUaW1lQ2xpY2soKXtcclxuICAgICAgbGV0IGhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1ob3VyJyk7XHJcbiAgICAgIGxldCBtaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtbWluJyk7XHJcbiAgICAgIGxldCBzZWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtc2VjJyk7XHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydDogZmFsc2V9KVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IGZhbHNlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogdHJ1ZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XHJcbiAgICAgICAgICA8aDEgaWQgPSAndGl0bGUnPlNpbXBsZSBDb3VudGRvd24gVGltZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZmxleC1jb250YWluZXItY29sdW1uJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPlRvZGF5J3MgRGF0ZTogPHU+e3RoaXMudG9kYXlEYXRlKCl9PC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5DdXJyZW50IFRpbWU6IDx1Pnt0aGlzLnN0YXRlLnRpbWV9PC91PjwvaDI+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gJ2Rpc3BsYXknPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd0aW1lci13cmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBpZCA9ICd0aW1lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5ob3Vyc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1ob3VyJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bUhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5Ib3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5taW5zfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLW1pbicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1NaW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pk1pbnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuc2Vjc308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLXNlYycgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1TZWN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PlNlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9ICdzdGFydC1idXR0b24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdGFydENsaWNrfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgQnJ5YW4gV29uZyB8IDIwMjA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE4cHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqaXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTB2aCAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggI0Y3RjlGOSAsICNFM0U3RDMsICM4NDk0ODMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgNDkrICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIC8qIExpa2VseSBmdXR1cmUgKi8gICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGhlaWdodDogNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXNwbGF5e1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTEwMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aW1lci13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgaHRtbCxcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59ICJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Bryan\\\\desktop\\\\Programming Projects\\\\02.1 Simple Count Down\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob21lIiwicHJvcHMiLCJzdGF0ZSIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91cnMiLCJtaW5zIiwic2VjcyIsInRpbWVyU3RhcnQiLCJlbmFibGVUaW1lciIsImFsYXJtU3RhcnQiLCJhdWRpbyIsIkF1ZGlvIiwiYXVkaW8xIiwiZ2V0SG91ckFyciIsImFyciIsImkiLCJwdXNoIiwiZ2V0TWluU2VjQXJyIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU3RhcnRDbGljayIsImNvdW50RG93biIsImhhbmRsZVNldFRpbWVDbGljayIsIndpbmRvd0NsaWNrIiwibG9jYWxUaW1lIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInRpbWVyVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0b2RheSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0b1N0cmluZyIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJpbm5lckhUTUwiLCJwbGF5Iiwid2luZG93IiwibmF2aWdhdG9yIiwidmlicmF0ZSIsImhvdXIiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJwYXVzZSIsImNvbG9yIiwidGltZUJ1dHRvbiIsImZvbnRTaXplIiwid2lkdGgiLCJvdXRsaW5lIiwiZ2V0TnVtSG91cnMiLCJtYXAiLCJob3ZlckNvbG9yIiwiaG92ZXJPdXRDb2xvciIsImdldE51bU1pbiIsImdldE51bVNlYyIsInRvZGF5RGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJB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LGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSzhELFNBREwsQ0FGRixFQUtFO0FBQThCLGVBQU8sRUFBSSxLQUFLN0Msa0JBQTlDO0FBQUEsMkNBQWdCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsQ0FmRixDQURGLEVBd0JFO0FBQVEsVUFBRSxFQUFHLGNBQWI7QUFBNEIsZUFBTyxFQUFJLEtBQUtGLGdCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJGLENBREYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBM0JGLENBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseTVwQkFERjtBQTZSRDs7OztFQWxkK0JpRCw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yMTYzZDdhMTQ5ZjY0NzNhNGI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgaG91cnM6ICcwMCcsXHJcbiAgICAgIG1pbnM6ICcwMCcsXHJcbiAgICAgIHNlY3M6ICcwMCcsXHJcbiAgICAgIHRpbWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgICBlbmFibGVUaW1lcjogdHJ1ZSxcclxuICAgICAgYWxhcm1TdGFydDogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdWRpbygnLi9hbGFybS5tcDMnKVxyXG4gICAgICB9LFxyXG4gICAgICBhdWRpbzE6ICcnLFxyXG4gICAgICBnZXRIb3VyQXJyOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKyl7XHJcbiAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyclxyXG4gICAgICB9LFxyXG4gICAgICBnZXRNaW5TZWNBcnI6ICgpID0+IHtcclxuICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDYwOyBpKyspe1xyXG4gICAgICAgICAgYXJyLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2sgPSB0aGlzLmhhbmRsZVN0YXJ0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY291bnREb3duID0gdGhpcy5jb3VudERvd24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrID0gdGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMud2luZG93Q2xpY2sgPSB0aGlzLndpbmRvd0NsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9jYWxUaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMuc2V0U3RhdGUoeyB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfSl9LCAxMDAwKTtcclxuICAgIHRoaXMudGltZXJUaW1lID0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudERvd24sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb2NhbFRpbWUpXHJcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJUaW1lKVxyXG4gIH1cclxuXHJcbiAgdG9kYXlEYXRlKCl7XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwnMCcpO1xyXG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkpLnBhZFN0YXJ0KDIsJzAnKTtcclxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHJldHVybiAgbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZX0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3RhcmdldC5uYW1lXSA6IHRhcmdldC52YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RhcnRDbGljaygpe1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUudGltZXJTdGFydCA9PT0gZmFsc2Upe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVUaW1lciA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2V0VGltZUNsaWNrKClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbGFybVN0YXJ0IDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoaG91cnMgPT0gMCAmJiBtaW5zPT0gMCAmJiBzZWNzID09IDApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsYXJtU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNBNDI0MkYnO1xyXG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1N0b3AnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydCA6IGZhbHNlfSlcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvdW50RG93biAoKXtcclxuICAgIGxldCBob3VycyA9IHRoaXMuc3RhdGUuaG91cnM7XHJcbiAgICBsZXQgbWlucyA9IHRoaXMuc3RhdGUubWlucztcclxuICAgIGxldCBzZWNzID0gdGhpcy5zdGF0ZS5zZWNzO1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRpbWVyU3RhcnQgPT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgaWYgKHNlY3MgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VjczogKCt0aGlzLnN0YXRlLnNlY3MgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKG1pbnMgIT0gMCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWluczogKCt0aGlzLnN0YXRlLm1pbnMgLSAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlY3M6ICc1OSd9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGhvdXJzICE9IDAgKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3VyczogKCt0aGlzLnN0YXRlLmhvdXJzIC0gMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttaW5zOiAnNTknfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWNzOiAnNTknfSlcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthdWRpbzEgOiB0aGlzLnN0YXRlLmF1ZGlvKCl9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lclN0YXJ0IDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLnN0YXRlLmF1ZGlvMS5wbGF5KCk7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci52aWJyYXRlKDIwMDApO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEE2NzYnO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVyU3RhcnQgOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXRUaW1lQ2xpY2soKXtcclxuICAgICAgbGV0IGhvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbC1ob3VyJyk7XHJcbiAgICAgIGxldCBtaW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtbWluJyk7XHJcbiAgICAgIGxldCBzZWNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWwtc2VjJyk7XHJcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XHJcbiAgICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZXJTdGFydDogZmFsc2V9KVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZVRpbWVyID09PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlVGltZXI6IGZhbHNlfSlcclxuICAgICAgaG91ci5zdHlsZS5oZWlnaHQgPSAoaGVpZ2h0KjAuMikudG9TdHJpbmcoKSsncHgnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9IChoZWlnaHQqMC4yKS50b1N0cmluZygpKydweCc7XHJcbiAgICAgIHNlY3Muc3R5bGUuaGVpZ2h0ID0gKGhlaWdodCowLjIpLnRvU3RyaW5nKCkrJ3B4JztcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwQTY3Nic7XHJcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnU3RhcnQnO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVUaW1lcjogdHJ1ZX0pXHJcbiAgICAgIGhvdXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICBtaW5zLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgc2Vjcy5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3dDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8xICE9ICcnICYmIHRoaXMuc3RhdGUuYWxhcm1TdGFydCA9PSB0cnVlKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWxhcm1TdGFydCA6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUuYXVkaW8xLnBhdXNlKCk7XHJcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IudmlicmF0ZSgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyQ29sb3IoZSl7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMzNzMzMzcnO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJPdXRDb2xvcihlKXtcclxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI0Q4QjM5Qyc7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzczMzM3JztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgdGltZUJ1dHRvbiA9IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNEOEIzOUMnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldE51bUhvdXJzID0gdGhpcy5zdGF0ZS5nZXRIb3VyQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ2hvdXJzJyBrZXkgPSB7aSArICdob3Vycyd9IHN0eWxlID0ge3RpbWVCdXR0b259IG9uTW91c2VPdmVyID0ge3RoaXMuaG92ZXJDb2xvcn0gb25Nb3VzZU91dCA9IHt0aGlzLmhvdmVyT3V0Q29sb3J9IHZhbHVlID0ge3ZhbHVlfSBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9Pnt2YWx1ZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsMCl9PC9idXR0b24+KTtcclxuICAgIGNvbnN0IGdldE51bU1pbiA9IHRoaXMuc3RhdGUuZ2V0TWluU2VjQXJyKCkubWFwKCh2YWx1ZSwgaSkgPT4gPGJ1dHRvbiBuYW1lID0gJ21pbnMnIGtleSA9IHtpICsgJ21pbnMnfSBzdHlsZSA9IHt0aW1lQnV0dG9ufSBvbk1vdXNlT3ZlciA9IHt0aGlzLmhvdmVyQ29sb3J9IG9uTW91c2VPdXQgPSB7dGhpcy5ob3Zlck91dENvbG9yfSB2YWx1ZSA9IHt2YWx1ZX0gb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfT57dmFsdWUudG9TdHJpbmcoKS5wYWRTdGFydCgyLDApfTwvYnV0dG9uPik7XHJcbiAgICBjb25zdCBnZXROdW1TZWMgPSB0aGlzLnN0YXRlLmdldE1pblNlY0FycigpLm1hcCgodmFsdWUsIGkpID0+IDxidXR0b24gbmFtZSA9ICdzZWNzJyBrZXkgPSB7aSArICdzZWNzJ30gc3R5bGUgPSB7dGltZUJ1dHRvbn0gb25Nb3VzZU92ZXIgPSB7dGhpcy5ob3ZlckNvbG9yfSBvbk1vdXNlT3V0ID0ge3RoaXMuaG92ZXJPdXRDb2xvcn0gdmFsdWUgPSB7dmFsdWV9IG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja30+e3ZhbHVlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwwKX08L2J1dHRvbj4pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSAnY29udGFpbmVyJyBvbkNsaWNrID0ge3RoaXMud2luZG93Q2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdmJhcic+XHJcbiAgICAgICAgICA8aDEgaWQgPSAndGl0bGUnPlNpbXBsZSBDb3VudGRvd24gVGltZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnZmxleC1jb250YWluZXItY29sdW1uJz5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lID0gJ2hlYWRpbmcnPlRvZGF5J3MgRGF0ZTogPHU+e3RoaXMudG9kYXlEYXRlKCl9PC91PjwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9ICdoZWFkaW5nJz5DdXJyZW50IFRpbWU6IDx1Pnt0aGlzLnN0YXRlLnRpbWV9PC91PjwvaDI+ICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkID0gJ2Rpc3BsYXknPlxyXG4gICAgICAgICAgPGRpdiBpZCA9ICd0aW1lci13cmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBpZCA9ICd0aW1lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5ob3Vyc306PC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQgPSAnZGlhbC1ob3VyJyBjbGFzc05hbWUgPSAnZGlhbC13cmFwcGVyMSc+XHJcbiAgICAgICAgICAgICAgICAgICAge2dldE51bUhvdXJzfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT5Ib3VyczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndGltZS1wbGFjZS1ob2xkZXJzJz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAndGltZS1kaXNwbGF5JyBvbkNsaWNrID0ge3RoaXMuaGFuZGxlU2V0VGltZUNsaWNrfT57dGhpcy5zdGF0ZS5taW5zfTo8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLW1pbicgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1NaW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9Pk1pbnM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RpbWUtcGxhY2UtaG9sZGVycyc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gJ3RpbWUtZGlzcGxheScgb25DbGljayA9IHt0aGlzLmhhbmRsZVNldFRpbWVDbGlja30+e3RoaXMuc3RhdGUuc2Vjc308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9ICdkaWFsLXNlYycgY2xhc3NOYW1lID0gJ2RpYWwtd3JhcHBlcjEnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnZXROdW1TZWN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTZXRUaW1lQ2xpY2t9PlNlY3M8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZCA9ICdzdGFydC1idXR0b24nIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVTdGFydENsaWNrfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8cD4mY29weTsgQnJ5YW4gV29uZyB8IDIwMjA8L3A+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE4cHgpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqaXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgI3RpbWVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjglO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI2Rpc3BsYXl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoOTB2aCAtIDIwcHgpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggI0Y3RjlGOSAsICNFM0U3RDMsICM4NDk0ODMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI3RpbWVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUtcGxhY2UtaG9sZGVyc3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpYWwtd3JhcHBlcjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWFsLXdyYXBwZXIxOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNzdGFydC1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwQTY3NjtcclxuICAgICAgICAgICAgY29sb3I6ICNGN0Y5Rjk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMTpob3ZlcntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDE6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAvKiBDaHJvbWUgNDkrICovXHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAvKiBGaXJlZm94IDQzKyAqL1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogTm8gc3VwcG9ydCB5ZXQgKi9cclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgICAgIC8qIExpa2VseSBmdXR1cmUgKi8gICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvb3RlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMCA4cHggNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNEOEIzOUM7XHJcbiAgICAgICAgICAgIGhlaWdodDogNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzMzNztcclxuICAgICAgICAgICAgY29sb3I6ICNEOEIzOUM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzMzMzc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDhCMzlDO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uOmZvY3Vze1xyXG4gICAgICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkaW5ne1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxleC1jb250YWluZXItY29sdW1ue1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGltZS1kaXNwbGF5e1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgICAgICAgICBmb290ZXJ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lci1jb2x1bW57XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3RpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpbWUtZGlzcGxheXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc3RhcnQtYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gICAgICAgICAgICAjdGl0bGV7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNkaXNwbGF5e1xyXG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aW1lLWRpc3BsYXl7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3N0YXJ0LWJ1dHRvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVye1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTEwMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICN0aW1lci13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgaHRtbCxcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=