"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/main.js?{"page":"pages%2Fnvue2%2Fnvue2"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);\n/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_nvue2_nvue2_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/nvue2/nvue2.nvue?mpType=page */ 8);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_nvue2_nvue2_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_nvue2_nvue2_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/nvue2/nvue2'\n        _pages_nvue2_nvue2_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_nvue2_nvue2_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxRQUFvQztBQUNwQyxRQUE4QjtBQUM5QixRQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQSxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxnQkFBZ0IsMkVBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL252dWUyL252dWUyLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvbnZ1ZTIvbnZ1ZTInXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var DIFF_TIME = 60 * 1000 * 60 * 24;

var statConfig = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {var _platformList;
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx' }, _defineProperty(_platformList,
  aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList,
  'mp-baidu', 'bd'), _defineProperty(_platformList,
  'mp-toutiao', 'tt'), _defineProperty(_platformList,
  'mp-qq', 'qq'), _defineProperty(_platformList,
  'mp-jd', 'jd'), _defineProperty(_platformList,
  'quickapp-native', 'qn'), _defineProperty(_platformList,
  'mp-kuaishou', 'ks'), _platformList);

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  if (!page) return '';
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var isReportData = function isReportData() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }

    if (report_status === '') {
      requestData(function (_ref)

      {var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }

    if (report_status === 1) {
      resolve();
    }

    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }

    if (end_time - start_time > diff_time) {
      requestData(function (_ref2)

      {var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }

  });
};

var requestData = function requestData(done) {
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: statConfig.appid }) };


  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {var

      data =
      res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable });

      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' && done({
        enable: report_status_code });

    } });

};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig$1 = __webpack_require__(/*! uni-stat-config */ 3).default || __webpack_require__(/*! uni-stat-config */ 3);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig$1.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "getIsReportData", value: function getIsReportData()

    {
      return isReportData();
    } }, { key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref3$key = _ref3.key,key = _ref3$key === void 0 ? '' : _ref3$key,_ref3$value = _ref3.value,value = _ref3$value === void 0 ? "" : _ref3$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig$1.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      this.getIsReportData().then(function () {
        uni.request({
          url: STAT_URL,
          method: 'POST',
          // header: {
          //   'content-type': 'application/json' // 默认值
          // },
          data: optionsData,
          success: function success() {
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('stat request success');
            // }
          },
          fail: function fail(e) {
            if (++_this5._retry < 3) {
              setTimeout(function () {
                _this5._sendRequest(optionsData);
              }, 1000);
            }
          } });

      });
    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = getSgin(GetEncodeURIComponentOptions(data)).options;
        image.src = STAT_H5_URL + '?' + options;
      });
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@next\",\"_id\":\"@dcloudio/uni-stat@2.0.1-33920220314002\",\"_inBundle\":false,\"_integrity\":\"sha512-NDx9DUamZDPlKVfdub0drT+WU6Bf9ziGh4xRpT5w/lXo8vWxEl0TwKxB2vWjCS+GXeXcjynU+FIdYtWi1F/iVw==\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@next\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"next\",\"saveSpec\":null,\"fetchSpec\":\"next\"},\"_requiredBy\":[\"#USER\",\"/\",\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.1-33920220314002.tgz\",\"_shasum\":\"743c418b1611118ba667838111156aef90d648c3\",\"_spec\":\"@dcloudio/uni-stat@next\",\"_where\":\"/Users/guoshengqiang/Documents/hbx-plugins/uniapp-cli\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"b6484524de28ad9526d248f3f95838b6c51058db\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.1-33920220314002\"}");

/***/ }),
/* 3 */
/*!**********************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages.json?{"type":"stat"} ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B0CAD34"});

/***/ }),
/* 4 */
/*!***********************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages.json?{"type":"style"} ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!***********************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 8 */
/*!******************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nvue2.nvue?vue&type=template&id=4f21281c&mpType=page */ 9);\n/* harmony import */ var _nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nvue2.nvue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./nvue2.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./nvue2.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"488d02dc\",\n  false,\n  _nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/nvue2/nvue2.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9udnVlMi5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmMjEyODFjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9udnVlMi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL252dWUyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL252dWUyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9udnVlMi5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMi4yMDIxMDIwNi5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI0ODhkMDJkY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9udnVlMi9udnVlMi5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=template&id=4f21281c&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue2.nvue?vue&type=template&id=4f21281c&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_template_id_4f21281c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=template&id=4f21281c&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", [
        _c("view", { staticClass: ["body"] }, [
          _c(
            "view",
            { staticClass: ["mess"] },
            [
              _c("u-image", {
                staticClass: ["ren"],
                attrs: { src: "../../static/cc.png" }
              }),
              _c(
                "scroll-view",
                {
                  staticClass: ["messro"],
                  attrs: {
                    scrollTop: _vm.scrollTop,
                    duration: "true",
                    scrollY: "true"
                  }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["mess-in"] },
                    _vm._l(_vm.messages, function(one, i) {
                      return _c(
                        "view",
                        { class: one[1] },
                        [
                          _c("u-image", {
                            staticClass: ["bian"],
                            attrs: { src: one[2] }
                          }),
                          _c("view", { staticClass: ["ball"] }, [
                            _c(
                              "u-text",
                              {
                                staticClass: ["info"],
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [_vm._v(_vm._s(one[0]))]
                            )
                          ])
                        ],
                        1
                      )
                    }),
                    0
                  )
                ]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["send"] },
            [
              _c("u-input", {
                staticClass: ["in"],
                attrs: {
                  type: "text",
                  placeholder: "输入发送内容",
                  value: _vm.ams
                },
                on: {
                  input: function($event) {
                    _vm.ams = $event.detail.value
                  }
                }
              }),
              _c(
                "view",
                {
                  staticClass: ["sendout"],
                  on: {
                    click: function($event) {
                      _vm.send()
                    }
                  }
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["FA"],
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [_vm._v("发送")]
                  )
                ]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue2.nvue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRnQixDQUFnQixxakJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9udnVlMi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYLjMuMS4yLjIwMjEwMjA2LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclguMy4xLjIuMjAyMTAyMDYuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9udnVlMi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      messages: [[\"同学你好\", \"m1\", \"../../static/left.png\"]],\n      ams: \"\",\n      timer: null,\n      answer: { \"你好\": \"你好\",\n        \"在吗\": \"在的\",\n        \"再见\": \"再见\",\n        \"拜拜\": \"再见\",\n        \"哈喽\": \"你好\",\n        \"我是一个生活很消极的人\": \"其实，任何人都会遇到问题，有些人遇到问题解决了，而有些人没有。\",\n        \"好心态\": \"好的心态注定一个人的成功与否。\",\n        \"非常希望在这些时刻得到帮助和开导\": \"让我感受最深的是你叙事能力很棒，文采了得。你应该是一个充满自信的人！\",\n        \"改不了\": \"在我们一生走过的路途中，有绿洲，也会有风沙。\",\n        \"与人交往很困难\": \"大家都认真学习，哪有那么多时间交朋友。即使不认真学习的，只想交朋友，但其他人还没时间呢。\",\n        \"我这段时间心情一直不好\": \"只是需要情绪上的安慰，可以寻找支持。\",\n        \"被人歧视\": \"一个人面对困难考验的时候，是会挫伤到我们的自尊。\",\n        \"异地恋五年了\": \"感情的事情就是这样让人纠结，左右为难，两种力量的较量结果要看哪个力量更大些。\",\n        \"学校不适应\": \"就您的问题看，很难达到两全齐美！就综合师资水平看，重点高中肯定要高于普通高中。\",\n        \"生完二胎，感觉自己很压抑\": \"建议去正规医院做个检查，评估诊断一下，以便有针对性的治疗。\",\n        \"孩子自己感觉状态不好\": \"能感受到你对孩子抑郁症的诊断还无法接受，感到迷茫和无助。\",\n        \"心疼我的儿子\": \"我们需要尽量找到适合自己家孩子的教育方法，所以需要用心并需要一些时间。\",\n        \"一年级小孩不愿再上学\": \"长期缺乏父母在身边的陪伴，内心会安全感不足。\",\n        \"不再与他人沟通交流\": \"尤其是青春期的孩子，所以我们需要了解清楚问题背后的原因。\",\n        \"母亲的很多行为想法我无法理解\": \"人们常说，清官难断家务事。看了你的描述，觉得你母亲有自己的想法，非常直爽，也能干。\",\n        \"自己想的太多\": \"关于您的这个困扰，或许主要是源于一直在这纠结要不要辞职的困扰，那么您尝试做两种假设，那就是离职与不离职的利弊分别是什么。\",\n        \"迷茫人生\": \"想要通过努力提升自己，却又没有动力，难以坚持，说明你的内心是一个矛盾状态。\",\n        \"离了才发现他早已出轨\": \"折磨我们的往往是想象，而不是真实。\",\n        \"6岁儿童行为问题\": \"不要随便给孩子贴标签，是不是你们平时对孩子陪伴得不够等等。\",\n        \"关于成长的烦恼\": \"尝试放下和别人的比较，之后再去感受自己是谁。\",\n        \"生活痛苦\": \"你感受不到他们对你的理解和支持。这样的关系让你痛苦。\",\n        \"老想偷拿别人东西\": \"感谢你的信任告诉我你的这个秘密，想了解一下我们你提到的这种快感以前有过吗？\",\n        \"工作中遇到恶人领导\": \"你现在有烦的感觉，有情绪，是对这样的境遇不能接纳。\",\n        \"一出门或者在堵车的时候就要去洗手间\": \"如果您已经通过体检排除没有任何躯体方面的疾病的话，那么这种现象就是心因性的。\",\n        \"依赖同性女老师\": \"都需要有一个基本的定位，比如，是友情，是亲情，是爱情。\",\n        \"刻意放大声音\": \"看完您所有的描述，尝试不给开门声附加其他含义，而仅仅就理解成有人进出的开门声。\",\n        \"高中抑郁\": \"尝试做自信的自信，因为当一个人拥有了自信就等于拥有了无穷的力量。\",\n        \"死亡恐惧症\": \"请问您是否还记得在初二下学期生活中或学校是有没有发生过什么压力过大，或令您感觉到恐惧的事？\",\n        \"赤面恐惧症\": \"遇到不熟悉的人脸红是非常常见的情况，很多的人都曾经出现过。\",\n        \"异地恋\": \"和男友认识时间不长，慢慢了解，关系发展的情况还未可知。\",\n        \"翻手机是不是不对\": \"如果对方接纳或者是心甘情愿的让您去翻他的手机，那么这种行为就没什么，如果对方是介意的，那么最好不要去私下翻对方的手机。\",\n        \"关于孩子高考报考的问题\": \"既然事情已经发生没有办法改变了，那就不如坦然面对现实，也许没有我们想象的那么糟糕。\",\n        \"看不惯办公室的小姑娘怎么办\": \"天下的事有三种，自己的事，别人的事，还有老天的事。\",\n        \"该不该结婚呢\": \"其实假如咨询师随意的给出了答案，那未必是适合自己的。\" },\n      scrollTop: 0,\n      m1: \"../../static/left.png\",\n      m2: \"../../static/right.png\" };\n\n  },\n  methods: {\n    send: function send() {var _this = this;\n      if (this.ams != \"\")\n      {\n        var out = 0;\n        var BALL = \"m2\";\n        if (this.ams.length >= 5 && this.ams.length <= 7)\n        {\n          var BALL = \"m2-1\";\n        } else\n        if (this.ams.length > 7 && this.ams.length <= 10)\n        {\n          var BALL = \"m2-2\";\n        } else\n        if (this.ams.length > 10 && this.ams.length <= 20)\n        {\n          var BALL = \"m2-3\";\n        } else\n        if (this.ams.length > 20 && this.ams.length <= 30)\n        {\n          var BALL = \"m2-4\";\n        } else\n        if (this.ams.length > 30)\n        {\n          uni.showToast({\n            title: \"字数超出限制\",\n            icon: \"none\" });\n\n          out = 1;\n        }\n        if (out != 1)\n        this.messages.push([this.ams, BALL, this.m2.toString()]);\n\n        this.timer = setTimeout(function () {\n          var that = _this;\n          if (_this.answer[_this.ams.toString()] != undefined)\n          {\n            BALL = \"m1\";\n            if (_this.answer[_this.ams.toString()].length >= 5 && _this.answer[_this.ams.toString()].length <= 7)\n            {\n              var BALL = \"m1-1\";\n            } else\n            if (_this.answer[_this.ams.toString()].length > 7 && _this.answer[_this.ams.toString()].length <= 10)\n            {\n              var BALL = \"m1-2\";\n            } else\n            if (_this.answer[_this.ams.toString()].length > 10 && _this.answer[_this.ams.toString()].length <= 20)\n            {\n              var BALL = \"m1-3\";\n            } else\n            if (_this.answer[_this.ams.toString()].length > 20 && _this.answer[_this.ams.toString()].length <= 30)\n            {\n              var BALL = \"m1-4\";\n            }\n            _this.messages.push([_this.answer[_this.ams.toString()], BALL, _this.m1.toString()]);\n          }\n          if (out != 1) _this.ams = \"\";\n\n        }, 200);\n        this.scrollTop = 0;\n        this.timer = setTimeout(function () {\n          _this.$nextTick(function () {\n            this.scrollTop = 20000000;\n          });}, 200);\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbnZ1ZTIvbnZ1ZTIubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHlEQURBO0FBRUEsYUFGQTtBQUdBLGlCQUhBO0FBSUE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBO0FBR0Esa0JBSEE7QUFJQSxrQkFKQTtBQUtBLHdEQUxBO0FBTUEsZ0NBTkE7QUFPQSxnRUFQQTtBQVFBLHVDQVJBO0FBU0EsaUVBVEE7QUFVQSwyQ0FWQTtBQVdBLDBDQVhBO0FBWUEsMERBWkE7QUFhQSwwREFiQTtBQWNBLHVEQWRBO0FBZUEsb0RBZkE7QUFnQkEsdURBaEJBO0FBaUJBLDhDQWpCQTtBQWtCQSxtREFsQkE7QUFtQkEscUVBbkJBO0FBb0JBLGdGQXBCQTtBQXFCQSx1REFyQkE7QUFzQkEseUNBdEJBO0FBdUJBLG1EQXZCQTtBQXdCQSwyQ0F4QkE7QUF5QkEsNENBekJBO0FBMEJBLDJEQTFCQTtBQTJCQSxnREEzQkE7QUE0QkEscUVBNUJBO0FBNkJBLGdEQTdCQTtBQThCQSwyREE5QkE7QUErQkEsa0RBL0JBO0FBZ0NBLGdFQWhDQTtBQWlDQSxnREFqQ0E7QUFrQ0EsNENBbENBO0FBbUNBLGlGQW5DQTtBQW9DQSxrRUFwQ0E7QUFxQ0Esb0RBckNBO0FBc0NBLDhDQXRDQSxFQUpBO0FBMkNBLGtCQTNDQTtBQTRDQSxpQ0E1Q0E7QUE2Q0Esa0NBN0NBOztBQStDQSxHQWpEQTtBQWtEQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsYUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBLGFBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQXpCQSxFQXlCQSxHQXpCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxDQUhBLEVBR0EsR0FIQTtBQUlBO0FBQ0EsS0FqRUEsRUFsREEsRSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJvZHlcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZXNzXCI+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwicmVuXCIgc3JjPVwiLi4vLi4vc3RhdGljL2NjLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwibWVzc3JvXCIgOnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIiBkdXJhdGlvbj1cInRydWVcIiBzY3JvbGwteT1cInRydWVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVzcy1pblwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihvbmUsaSkgaW4gbWVzc2FnZXNcIiA6Y2xhc3M9XCJvbmVbMV1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJiaWFuXCIgOnNyYz1cIm9uZVsyXVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJiYWxsXCI+PHRleHQgY2xhc3M9XCJpbmZvXCI+e3tvbmVbMF19fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VuZFwiPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICB2LW1vZGVsPVwiYW1zXCIgcGxhY2Vob2xkZXI9XCLovpPlhaXlj5HpgIHlhoXlrrlcIiBjbGFzcz1cImluXCIvPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VuZG91dFwiIEBjbGljaz1cInNlbmQoKVwiPjx0ZXh0IGNsYXNzPVwiRkFcIj7lj5HpgIE8L3RleHQ+PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bWVzc2FnZXM6IFtbXCLlkIzlrabkvaDlpb1cIixcIm0xXCIsXCIuLi8uLi9zdGF0aWMvbGVmdC5wbmdcIl1dLFxyXG5cdFx0XHRcdGFtczogXCJcIixcclxuXHRcdFx0XHR0aW1lcjogbnVsbCxcclxuXHRcdFx0XHRhbnN3ZXI6IHtcIuS9oOWlvVwiOlwi5L2g5aW9XCIsXHJcblx0XHRcdFx0XCLlnKjlkJdcIjpcIuWcqOeahFwiLFxyXG5cdFx0XHRcdFwi5YaN6KeBXCI6XCLlho3op4FcIixcclxuXHRcdFx0XHRcIuaLnOaLnFwiOlwi5YaN6KeBXCIsXHJcblx0XHRcdFx0XCLlk4jllr1cIjpcIuS9oOWlvVwiLFxyXG5cdFx0XHRcdFwi5oiR5piv5LiA5Liq55Sf5rS75b6I5raI5p6B55qE5Lq6XCI6XCLlhbblrp7vvIzku7vkvZXkurrpg73kvJrpgYfliLDpl67popjvvIzmnInkupvkurrpgYfliLDpl67popjop6PlhrPkuobvvIzogIzmnInkupvkurrmsqHmnInjgIJcIixcclxuXHRcdFx0XHRcIuWlveW/g+aAgVwiOlwi5aW955qE5b+D5oCB5rOo5a6a5LiA5Liq5Lq655qE5oiQ5Yqf5LiO5ZCm44CCXCIsXHJcblx0XHRcdFx0XCLpnZ7luLjluIzmnJvlnKjov5nkupvml7bliLvlvpfliLDluK7liqnlkozlvIDlr7xcIjpcIuiuqeaIkeaEn+WPl+acgOa3seeahOaYr+S9oOWPmeS6i+iDveWKm+W+iOajku+8jOaWh+mHh+S6huW+l+OAguS9oOW6lOivpeaYr+S4gOS4quWFhea7oeiHquS/oeeahOS6uu+8gVwiLFxyXG5cdFx0XHRcdFwi5pS55LiN5LqGXCI6XCLlnKjmiJHku6zkuIDnlJ/otbDov4fnmoTot6/pgJTkuK3vvIzmnInnu7/mtLLvvIzkuZ/kvJrmnInpo47mspnjgIJcIixcclxuXHRcdFx0XHRcIuS4juS6uuS6pOW+gOW+iOWbsOmavlwiOlwi5aSn5a626YO96K6k55yf5a2m5Lmg77yM5ZOq5pyJ6YKj5LmI5aSa5pe26Ze05Lqk5pyL5Y+L44CC5Y2z5L2/5LiN6K6k55yf5a2m5Lmg55qE77yM5Y+q5oOz5Lqk5pyL5Y+L77yM5L2G5YW25LuW5Lq66L+Y5rKh5pe26Ze05ZGi44CCXCIsXHJcblx0XHRcdFx0XCLmiJHov5nmrrXml7bpl7Tlv4Pmg4XkuIDnm7TkuI3lpb1cIjpcIuWPquaYr+mcgOimgeaDhee7quS4iueahOWuieaFsO+8jOWPr+S7peWvu+aJvuaUr+aMgeOAglwiLFxyXG5cdFx0XHRcdFwi6KKr5Lq65q2n6KeGXCI6XCLkuIDkuKrkurrpnaLlr7nlm7Dpmr7ogIPpqoznmoTml7blgJnvvIzmmK/kvJrmjKvkvKTliLDmiJHku6znmoToh6rlsIrjgIJcIixcclxuXHRcdFx0XHRcIuW8guWcsOaBi+S6lOW5tOS6hlwiOlwi5oSf5oOF55qE5LqL5oOF5bCx5piv6L+Z5qC36K6p5Lq657qg57uT77yM5bem5Y+z5Li66Zq+77yM5Lik56eN5Yqb6YeP55qE6L6D6YeP57uT5p6c6KaB55yL5ZOq5Liq5Yqb6YeP5pu05aSn5Lqb44CCXCIsXHJcblx0XHRcdFx0XCLlrabmoKHkuI3pgILlupRcIjpcIuWwseaCqOeahOmXrumimOeci++8jOW+iOmavui+vuWIsOS4pOWFqOm9kOe+ju+8geWwsee7vOWQiOW4iOi1hOawtOW5s+eci++8jOmHjeeCuemrmOS4reiCr+WumuimgemrmOS6juaZrumAmumrmOS4reOAglwiLFxyXG5cdFx0XHRcdFwi55Sf5a6M5LqM6IOO77yM5oSf6KeJ6Ieq5bex5b6I5Y6L5oqRXCI6XCLlu7rorq7ljrvmraPop4TljLvpmaLlgZrkuKrmo4Dmn6XvvIzor4TkvLDor4rmlq3kuIDkuIvvvIzku6Xkvr/mnInpkojlr7nmgKfnmoTmsrvnlpfjgIJcIixcclxuXHRcdFx0XHRcIuWtqeWtkOiHquW3seaEn+inieeKtuaAgeS4jeWlvVwiOlwi6IO95oSf5Y+X5Yiw5L2g5a+55a2p5a2Q5oqR6YOB55eH55qE6K+K5pat6L+Y5peg5rOV5o6l5Y+X77yM5oSf5Yiw6L+36Iyr5ZKM5peg5Yqp44CCXCIsXHJcblx0XHRcdFx0XCLlv4PnlrzmiJHnmoTlhL/lrZBcIjpcIuaIkeS7rOmcgOimgeWwvemHj+aJvuWIsOmAguWQiOiHquW3seWutuWtqeWtkOeahOaVmeiCsuaWueazle+8jOaJgOS7pemcgOimgeeUqOW/g+W5tumcgOimgeS4gOS6m+aXtumXtOOAglwiLFxyXG5cdFx0XHRcdFwi5LiA5bm057qn5bCP5a2p5LiN5oS/5YaN5LiK5a2mXCI6XCLplb/mnJ/nvLrkuY/niLbmr43lnKjouqvovrnnmoTpmarkvLTvvIzlhoXlv4PkvJrlronlhajmhJ/kuI3otrPjgIJcIixcclxuXHRcdFx0XHRcIuS4jeWGjeS4juS7luS6uuayn+mAmuS6pOa1gVwiOlwi5bCk5YW25piv6Z2S5pil5pyf55qE5a2p5a2Q77yM5omA5Lul5oiR5Lus6ZyA6KaB5LqG6Kej5riF5qWa6Zeu6aKY6IOM5ZCO55qE5Y6f5Zug44CCXCIsXHJcblx0XHRcdFx0XCLmr43kurLnmoTlvojlpJrooYzkuLrmg7Pms5XmiJHml6Dms5XnkIbop6NcIjpcIuS6uuS7rOW4uOivtO+8jOa4heWumOmavuaWreWutuWKoeS6i+OAgueci+S6huS9oOeahOaPj+i/sO+8jOinieW+l+S9oOavjeS6suacieiHquW3seeahOaDs+azle+8jOmdnuW4uOebtOeIve+8jOS5n+iDveW5suOAglwiLFxyXG5cdFx0XHRcdFwi6Ieq5bex5oOz55qE5aSq5aSaXCI6XCLlhbPkuo7mgqjnmoTov5nkuKrlm7DmibDvvIzmiJborrjkuLvopoHmmK/mupDkuo7kuIDnm7TlnKjov5nnuqDnu5PopoHkuI3opoHovp7ogYznmoTlm7DmibDvvIzpgqPkuYjmgqjlsJ3or5XlgZrkuKTnp43lgYforr7vvIzpgqPlsLHmmK/nprvogYzkuI7kuI3nprvogYznmoTliKnlvIrliIbliKvmmK/ku4DkuYjjgIJcIixcclxuXHRcdFx0XHRcIui/t+iMq+S6uueUn1wiOlwi5oOz6KaB6YCa6L+H5Yqq5Yqb5o+Q5Y2H6Ieq5bex77yM5Y205Y+I5rKh5pyJ5Yqo5Yqb77yM6Zq+5Lul5Z2a5oyB77yM6K+05piO5L2g55qE5YaF5b+D5piv5LiA5Liq55+b55u+54q25oCB44CCXCIsXHJcblx0XHRcdFx0XCLnprvkuobmiY3lj5HnjrDku5bml6nlt7Llh7rovahcIjpcIuaKmOejqOaIkeS7rOeahOW+gOW+gOaYr+aDs+ixoe+8jOiAjOS4jeaYr+ecn+WunuOAglwiLFxyXG5cdFx0XHRcdFwiNuWygeWEv+erpeihjOS4uumXrumimFwiOlwi5LiN6KaB6ZqP5L6/57uZ5a2p5a2Q6LS05qCH562+77yM5piv5LiN5piv5L2g5Lus5bmz5pe25a+55a2p5a2Q6Zmq5Ly05b6X5LiN5aSf562J562J44CCXCIsXHJcblx0XHRcdFx0XCLlhbPkuo7miJDplb/nmoTng6bmgbxcIjpcIuWwneivleaUvuS4i+WSjOWIq+S6uueahOavlOi+g++8jOS5i+WQjuWGjeWOu+aEn+WPl+iHquW3seaYr+iwgeOAglwiLFxyXG5cdFx0XHRcdFwi55Sf5rS755eb6IumXCI6XCLkvaDmhJ/lj5fkuI3liLDku5bku6zlr7nkvaDnmoTnkIbop6PlkozmlK/mjIHjgILov5nmoLfnmoTlhbPns7vorqnkvaDnl5voi6bjgIJcIixcclxuXHRcdFx0XHRcIuiAgeaDs+WBt+aLv+WIq+S6uuS4nOilv1wiOlwi5oSf6LCi5L2g55qE5L+h5Lu75ZGK6K+J5oiR5L2g55qE6L+Z5Liq56eY5a+G77yM5oOz5LqG6Kej5LiA5LiL5oiR5Lus5L2g5o+Q5Yiw55qE6L+Z56eN5b+r5oSf5Lul5YmN5pyJ6L+H5ZCX77yfXCIsXHJcblx0XHRcdFx0XCLlt6XkvZzkuK3pgYfliLDmgbbkurrpooblr7xcIjpcIuS9oOeOsOWcqOacieeDpueahOaEn+inie+8jOacieaDhee7qu+8jOaYr+Wvuei/meagt+eahOWig+mBh+S4jeiDveaOpee6s+OAglwiLFxyXG5cdFx0XHRcdFwi5LiA5Ye66Zeo5oiW6ICF5Zyo5aC16L2m55qE5pe25YCZ5bCx6KaB5Y675rSX5omL6Ze0XCI6XCLlpoLmnpzmgqjlt7Lnu4/pgJrov4fkvZPmo4DmjpLpmaTmsqHmnInku7vkvZXouq/kvZPmlrnpnaLnmoTnlr7nl4XnmoTor53vvIzpgqPkuYjov5nnp43njrDosaHlsLHmmK/lv4Plm6DmgKfnmoTjgIJcIixcclxuXHRcdFx0XHRcIuS+nei1luWQjOaAp+Wls+iAgeW4iFwiOlwi6YO96ZyA6KaB5pyJ5LiA5Liq5Z+65pys55qE5a6a5L2N77yM5q+U5aaC77yM5piv5Y+L5oOF77yM5piv5Lqy5oOF77yM5piv54ix5oOF44CCXCIsXHJcblx0XHRcdFx0XCLliLvmhI/mlL7lpKflo7Dpn7NcIjpcIueci+WujOaCqOaJgOacieeahOaPj+i/sO+8jOWwneivleS4jee7meW8gOmXqOWjsOmZhOWKoOWFtuS7luWQq+S5ie+8jOiAjOS7heS7heWwseeQhuino+aIkOacieS6uui/m+WHuueahOW8gOmXqOWjsOOAglwiLFxyXG5cdFx0XHRcdFwi6auY5Lit5oqR6YOBXCI6XCLlsJ3or5XlgZroh6rkv6HnmoToh6rkv6HvvIzlm6DkuLrlvZPkuIDkuKrkurrmi6XmnInkuoboh6rkv6HlsLHnrYnkuo7mi6XmnInkuobml6DnqbfnmoTlipvph4/jgIJcIixcclxuXHRcdFx0XHRcIuatu+S6oeaBkOaDp+eXh1wiOlwi6K+36Zeu5oKo5piv5ZCm6L+Y6K6w5b6X5Zyo5Yid5LqM5LiL5a2m5pyf55Sf5rS75Lit5oiW5a2m5qCh5piv5pyJ5rKh5pyJ5Y+R55Sf6L+H5LuA5LmI5Y6L5Yqb6L+H5aSn77yM5oiW5Luk5oKo5oSf6KeJ5Yiw5oGQ5oOn55qE5LqL77yfXCIsXHJcblx0XHRcdFx0XCLotaTpnaLmgZDmg6fnl4dcIjpcIumBh+WIsOS4jeeGn+aCieeahOS6uuiEuOe6ouaYr+mdnuW4uOW4uOingeeahOaDheWGte+8jOW+iOWkmueahOS6uumDveabvue7j+WHuueOsOi/h+OAglwiLFxyXG5cdFx0XHRcdFwi5byC5Zyw5oGLXCI6XCLlkoznlLflj4vorqTor4bml7bpl7TkuI3plb/vvIzmhaLmhaLkuobop6PvvIzlhbPns7vlj5HlsZXnmoTmg4XlhrXov5jmnKrlj6/nn6XjgIJcIixcclxuXHRcdFx0XHRcIue/u+aJi+acuuaYr+S4jeaYr+S4jeWvuVwiOlwi5aaC5p6c5a+55pa55o6l57qz5oiW6ICF5piv5b+D55SY5oOF5oS/55qE6K6p5oKo5Y6757+75LuW55qE5omL5py677yM6YKj5LmI6L+Z56eN6KGM5Li65bCx5rKh5LuA5LmI77yM5aaC5p6c5a+55pa55piv5LuL5oSP55qE77yM6YKj5LmI5pyA5aW95LiN6KaB5Y6756eB5LiL57+75a+55pa555qE5omL5py644CCXCIsXHJcblx0XHRcdFx0XCLlhbPkuo7lranlrZDpq5jogIPmiqXogIPnmoTpl67pophcIjpcIuaXoueEtuS6i+aDheW3sue7j+WPkeeUn+ayoeacieWKnuazleaUueWPmOS6hu+8jOmCo+WwseS4jeWmguWdpueEtumdouWvueeOsOWunu+8jOS5n+iuuOayoeacieaIkeS7rOaDs+ixoeeahOmCo+S5iOezn+ezleOAglwiLFxyXG5cdFx0XHRcdFwi55yL5LiN5oOv5Yqe5YWs5a6k55qE5bCP5aeR5aiY5oCO5LmI5YqeXCI6XCLlpKnkuIvnmoTkuovmnInkuInnp43vvIzoh6rlt7HnmoTkuovvvIzliKvkurrnmoTkuovvvIzov5jmnInogIHlpKnnmoTkuovjgIJcIixcclxuXHRcdFx0XHRcIuivpeS4jeivpee7k+WpmuWRolwiOlwi5YW25a6e5YGH5aaC5ZKo6K+i5biI6ZqP5oSP55qE57uZ5Ye65LqG562U5qGI77yM6YKj5pyq5b+F5piv6YCC5ZCI6Ieq5bex55qE44CCXCJ9LFxyXG5cdFx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdFx0XHRtMTogXCIuLi8uLi9zdGF0aWMvbGVmdC5wbmdcIixcclxuXHRcdFx0XHRtMjogXCIuLi8uLi9zdGF0aWMvcmlnaHQucG5nXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNlbmQoKXtcclxuXHRcdFx0XHRpZih0aGlzLmFtcyAhPSBcIlwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBvdXQgPSAwO1xyXG5cdFx0XHRcdFx0dmFyIEJBTEwgPSBcIm0yXCI7XHJcblx0XHRcdFx0XHRpZih0aGlzLmFtcy5sZW5ndGg+PTUmJnRoaXMuYW1zLmxlbmd0aDw9NylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIEJBTEwgPSBcIm0yLTFcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYodGhpcy5hbXMubGVuZ3RoPjcmJnRoaXMuYW1zLmxlbmd0aDw9MTApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBCQUxMID0gXCJtMi0yXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuYW1zLmxlbmd0aD4xMCYmdGhpcy5hbXMubGVuZ3RoPD0yMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmFyIEJBTEwgPSBcIm0yLTNcIjtcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmFtcy5sZW5ndGg+MjAmJnRoaXMuYW1zLmxlbmd0aDw9MzApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZhciBCQUxMID0gXCJtMi00XCI7XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYodGhpcy5hbXMubGVuZ3RoPjMwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTpcIuWtl+aVsOi2heWHuumZkOWItlwiLFxyXG5cdFx0XHRcdFx0XHRcdGljb246XCJub25lXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0b3V0ID0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKG91dCE9MSlcclxuXHRcdFx0XHRcdHRoaXMubWVzc2FnZXMucHVzaChbdGhpcy5hbXMsQkFMTCx0aGlzLm0yLnRvU3RyaW5nKCldKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLmFuc3dlclt0aGlzLmFtcy50b1N0cmluZygpXSE9dW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QkFMTCA9IFwibTFcIjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzLmFuc3dlclt0aGlzLmFtcy50b1N0cmluZygpXS5sZW5ndGg+PTUmJnRoaXMuYW5zd2VyW3RoaXMuYW1zLnRvU3RyaW5nKCldLmxlbmd0aDw9NylcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgQkFMTCA9IFwibTEtMVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbHNlIGlmKHRoaXMuYW5zd2VyW3RoaXMuYW1zLnRvU3RyaW5nKCldLmxlbmd0aD43JiZ0aGlzLmFuc3dlclt0aGlzLmFtcy50b1N0cmluZygpXS5sZW5ndGg8PTEwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBCQUxMID0gXCJtMS0yXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2UgaWYodGhpcy5hbnN3ZXJbdGhpcy5hbXMudG9TdHJpbmcoKV0ubGVuZ3RoPjEwJiZ0aGlzLmFuc3dlclt0aGlzLmFtcy50b1N0cmluZygpXS5sZW5ndGg8PTIwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBCQUxMID0gXCJtMS0zXCI7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSBpZih0aGlzLmFuc3dlclt0aGlzLmFtcy50b1N0cmluZygpXS5sZW5ndGg+MjAmJnRoaXMuYW5zd2VyW3RoaXMuYW1zLnRvU3RyaW5nKCldLmxlbmd0aDw9MzApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIEJBTEwgPSBcIm0xLTRcIjtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1lc3NhZ2VzLnB1c2goW3RoaXMuYW5zd2VyW3RoaXMuYW1zLnRvU3RyaW5nKCldLEJBTEwsdGhpcy5tMS50b1N0cmluZygpXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYob3V0IT0xKSB0aGlzLmFtcyA9IFwiXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSwyMDApO1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDIwMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICB9KTt9LDIwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxyXG5cdC5yZW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAxMHJweDtcclxuXHRcdHRvcDogNTBycHg7XHJcblx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0fVxyXG5cdC5ib2R5e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRoZWlnaHQ6IDc4MHJweDtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjM2LDIzNiwyMzYsMC41KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDc1cnB4O1xyXG5cdFx0ei1pbmRleDogMTAwO1xyXG5cdH1cclxuXHQubWVzc3tcclxuXHRcdHdpZHRoOiA1NTBycHg7XHJcblx0XHRoZWlnaHQ6IDY0MHJweDtcclxuXHRcdGxlZnQ6IDBycHg7XHJcblx0fVxyXG5cdC5tZXNzcm97XHJcblx0XHR3aWR0aDogNTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiA2NDBycHg7XHJcblx0XHRsZWZ0OiA3MHJweDtcclxuXHR9XHJcblx0Lm1lc3Nyby1pbntcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0fVxyXG5cdC5zZW5ke1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDUzMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0dG9wOiA2NTBycHg7XHJcblx0XHRsZWZ0OiAzNXJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDc1cnB4O1xyXG5cdFx0Ym9yZGVyOiAjMDAwMDAwIHNvbGlkIDFweDtcclxuXHR9XHJcblx0Lmlue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDM1MHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiA0NXJweDtcclxuXHR9XHJcblx0LnNlbmRvdXR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDc1cnB4O1xyXG5cdFx0bGVmdDogMzc1cnB4O1xyXG5cdFx0dG9wOiA1cnB4O1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgxOCw0MywyMzcsMC44KTtcclxuXHR9XHJcblx0LkZBe1xyXG5cdFx0d2lkdGg6IDE1MHJweDtcclxuXHRcdGhlaWdodDogOTBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogNDVycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5pbmZve1xyXG5cdFx0bWFyZ2luLXRvcDogMTdycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTFycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5tMXtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdFx0bGVmdDogMzBycHg7XHJcblx0fVxyXG5cdC5tMSAuYmlhbntcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHR0b3A6IDE1cnB4O1xyXG5cdFx0bGVmdDogLTlycHg7XHJcblx0fVxyXG5cdC5tMSAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMjJycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5tMS0xe1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGhlaWdodDogODhycHg7XHJcblx0XHRsZWZ0OiAzMHJweDtcclxuXHR9XHJcblx0Lm0xLTEgLmJpYW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dG9wOiAxNXJweDtcclxuXHRcdGxlZnQ6IC05cnB4O1xyXG5cdH1cclxuXHQubTEtMSAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAzMDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMjJycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5tMS0ye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGhlaWdodDogODhycHg7XHJcblx0XHRsZWZ0OiAzMHJweDtcclxuXHR9XHJcblx0Lm0xLTIgLmJpYW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dG9wOiAxNXJweDtcclxuXHRcdGxlZnQ6IC05cnB4O1xyXG5cdH1cclxuXHQubTEtMiAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMjJycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5tMS0ze1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGhlaWdodDogMTI4cnB4O1xyXG5cdFx0bGVmdDogMzBycHg7XHJcblx0fVxyXG5cdC5tMS0zIC5iaWFue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdHRvcDogMTVycHg7XHJcblx0XHRsZWZ0OiAtOXJweDtcclxuXHR9XHJcblx0Lm0xLTMgLmJhbGx7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogNDAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMjBycHg7XHJcblx0XHR0b3A6IDBycHg7XHJcblx0XHRsZWZ0OiAyMnJweDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHR9XHJcblx0XHJcblx0Lm0xLTR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogNTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNjhycHg7XHJcblx0XHRsZWZ0OiAzMHJweDtcclxuXHR9XHJcblx0Lm0xLTQgLmJpYW57XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dG9wOiAxNXJweDtcclxuXHRcdGxlZnQ6IC05cnB4O1xyXG5cdH1cclxuXHQubTEtNCAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDE2MHJweDtcclxuXHRcdHRvcDogMHJweDtcclxuXHRcdGxlZnQ6IDIycnB4O1xyXG5cdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQubTJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogNTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4OHJweDtcclxuXHR9XHJcblx0Lm0yIC5iaWFue1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDMwcnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdHRvcDogMTVycHg7XHJcblx0XHRsZWZ0OiA0MjVycHg7XHJcblx0fVxyXG5cdC5tMiAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMjMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzRDRDk2NDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQubTItMXtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdH1cclxuXHQubTItMSAuYmlhbntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHR0b3A6IDE1cnB4O1xyXG5cdFx0bGVmdDogNDI1cnB4O1xyXG5cdH1cclxuXHQubTItMSAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiAzMDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMTMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzRDRDk2NDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQubTItMntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHRoZWlnaHQ6IDg4cnB4O1xyXG5cdH1cclxuXHQubTItMiAuYmlhbntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHR0b3A6IDE1cnB4O1xyXG5cdFx0bGVmdDogNDI1cnB4O1xyXG5cdH1cclxuXHQubTItMiAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0dG9wOiAwcnB4O1xyXG5cdFx0bGVmdDogMzBycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNENEOTY0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTVycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5tMi0ze1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDUwMHJweDtcclxuXHRcdGhlaWdodDogMTI4cnB4O1xyXG5cdH1cclxuXHQubTItMyAuYmlhbntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiAzMHJweDtcclxuXHRcdGhlaWdodDogMzBycHg7XHJcblx0XHR0b3A6IDE1cnB4O1xyXG5cdFx0bGVmdDogNDI1cnB4O1xyXG5cdH1cclxuXHQubTItMyAuYmFsbHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA0MDBycHg7XHJcblx0XHRoZWlnaHQ6IDEyMHJweDtcclxuXHRcdHRvcDogMHJweDtcclxuXHRcdGxlZnQ6IDMwcnB4O1xyXG5cdFx0YmFja2dyb3VuZDogIzRDRDk2NDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cnB4O1xyXG5cdH1cclxuXHRcclxuXHQubTItNHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHdpZHRoOiA1MDBycHg7XHJcblx0XHRoZWlnaHQ6IDE2OHJweDtcclxuXHR9XHJcblx0Lm0yLTQgLmJpYW57XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0dG9wOiAxNXJweDtcclxuXHRcdGxlZnQ6IDQyNXJweDtcclxuXHR9XHJcblx0Lm0yLTQgLmJhbGx7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogNDAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNjBycHg7XHJcblx0XHR0b3A6IDBycHg7XHJcblx0XHRsZWZ0OiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQ6ICM0Q0Q5NjQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxNXJweDtcclxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue2.nvue?vue&type=style&index=0&lang=css&mpType=page */ 14);
/* harmony import */ var _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_D_HBuilderX_3_1_2_20210206_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue2_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/心理咨询/pages/nvue2/nvue2.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".ren": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "left": [
        "10rpx",
        0,
        0,
        0
      ],
      "top": [
        "50rpx",
        0,
        0,
        0
      ],
      "width": [
        "150rpx",
        0,
        0,
        0
      ],
      "height": [
        "200rpx",
        0,
        0,
        0
      ]
    }
  },
  ".body": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        1
      ],
      "width": [
        "600rpx",
        0,
        0,
        1
      ],
      "height": [
        "780rpx",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "rgba(236,236,236,0.5)",
        0,
        0,
        1
      ],
      "borderRadius": [
        "75rpx",
        0,
        0,
        1
      ],
      "zIndex": [
        100,
        0,
        0,
        1
      ]
    }
  },
  ".mess": {
    "": {
      "width": [
        "550rpx",
        0,
        0,
        2
      ],
      "height": [
        "640rpx",
        0,
        0,
        2
      ],
      "left": [
        "0rpx",
        0,
        0,
        2
      ]
    }
  },
  ".messro": {
    "": {
      "width": [
        "500rpx",
        0,
        0,
        3
      ],
      "height": [
        "640rpx",
        0,
        0,
        3
      ],
      "left": [
        "70rpx",
        0,
        0,
        3
      ]
    }
  },
  ".messro-in": {
    "": {
      "width": [
        "500rpx",
        0,
        0,
        4
      ]
    }
  },
  ".send": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        5
      ],
      "width": [
        "530rpx",
        0,
        0,
        5
      ],
      "height": [
        "100rpx",
        0,
        0,
        5
      ],
      "top": [
        "650rpx",
        0,
        0,
        5
      ],
      "left": [
        "35rpx",
        0,
        0,
        5
      ],
      "borderRadius": [
        "75rpx",
        0,
        0,
        5
      ],
      "borderWidth": [
        "1",
        0,
        0,
        5
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        5
      ],
      "borderColor": [
        "#000000",
        0,
        0,
        5
      ]
    }
  },
  ".in": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "width": [
        "350rpx",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        6
      ],
      "fontSize": [
        "45rpx",
        0,
        0,
        6
      ]
    }
  },
  ".sendout": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        7
      ],
      "width": [
        "150rpx",
        0,
        0,
        7
      ],
      "height": [
        "90rpx",
        0,
        0,
        7
      ],
      "borderRadius": [
        "75rpx",
        0,
        0,
        7
      ],
      "left": [
        "375rpx",
        0,
        0,
        7
      ],
      "top": [
        "5rpx",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "rgba(18,43,237,0.8)",
        0,
        0,
        7
      ]
    }
  },
  ".FA": {
    "": {
      "width": [
        "150rpx",
        0,
        0,
        8
      ],
      "height": [
        "90rpx",
        0,
        0,
        8
      ],
      "marginTop": [
        "20rpx",
        0,
        0,
        8
      ],
      "fontSize": [
        "45rpx",
        0,
        0,
        8
      ],
      "textAlign": [
        "center",
        0,
        0,
        8
      ]
    }
  },
  ".info": {
    "": {
      "marginTop": [
        "17rpx",
        0,
        0,
        9
      ],
      "marginLeft": [
        "11rpx",
        0,
        0,
        9
      ]
    }
  },
  ".m1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        10
      ],
      "width": [
        "500rpx",
        0,
        0,
        10
      ],
      "height": [
        "88rpx",
        0,
        0,
        10
      ],
      "left": [
        "30rpx",
        0,
        0,
        10
      ]
    }
  },
  ".bian": {
    ".m1 ": {
      "position": [
        "absolute",
        0,
        1,
        11
      ],
      "width": [
        "30rpx",
        0,
        1,
        11
      ],
      "height": [
        "30rpx",
        0,
        1,
        11
      ],
      "top": [
        "15rpx",
        0,
        1,
        11
      ],
      "left": [
        "-9rpx",
        0,
        1,
        11
      ]
    },
    ".m1-1 ": {
      "position": [
        "absolute",
        0,
        1,
        14
      ],
      "width": [
        "30rpx",
        0,
        1,
        14
      ],
      "height": [
        "30rpx",
        0,
        1,
        14
      ],
      "top": [
        "15rpx",
        0,
        1,
        14
      ],
      "left": [
        "-9rpx",
        0,
        1,
        14
      ]
    },
    ".m1-2 ": {
      "position": [
        "absolute",
        0,
        1,
        17
      ],
      "width": [
        "30rpx",
        0,
        1,
        17
      ],
      "height": [
        "30rpx",
        0,
        1,
        17
      ],
      "top": [
        "15rpx",
        0,
        1,
        17
      ],
      "left": [
        "-9rpx",
        0,
        1,
        17
      ]
    },
    ".m1-3 ": {
      "position": [
        "absolute",
        0,
        1,
        20
      ],
      "width": [
        "30rpx",
        0,
        1,
        20
      ],
      "height": [
        "30rpx",
        0,
        1,
        20
      ],
      "top": [
        "15rpx",
        0,
        1,
        20
      ],
      "left": [
        "-9rpx",
        0,
        1,
        20
      ]
    },
    ".m1-4 ": {
      "position": [
        "absolute",
        0,
        1,
        23
      ],
      "width": [
        "30rpx",
        0,
        1,
        23
      ],
      "height": [
        "30rpx",
        0,
        1,
        23
      ],
      "top": [
        "15rpx",
        0,
        1,
        23
      ],
      "left": [
        "-9rpx",
        0,
        1,
        23
      ]
    },
    ".m2 ": {
      "position": [
        "relative",
        0,
        1,
        26
      ],
      "width": [
        "30rpx",
        0,
        1,
        26
      ],
      "height": [
        "30rpx",
        0,
        1,
        26
      ],
      "top": [
        "15rpx",
        0,
        1,
        26
      ],
      "left": [
        "425rpx",
        0,
        1,
        26
      ]
    },
    ".m2-1 ": {
      "position": [
        "relative",
        0,
        1,
        29
      ],
      "width": [
        "30rpx",
        0,
        1,
        29
      ],
      "height": [
        "30rpx",
        0,
        1,
        29
      ],
      "top": [
        "15rpx",
        0,
        1,
        29
      ],
      "left": [
        "425rpx",
        0,
        1,
        29
      ]
    },
    ".m2-2 ": {
      "position": [
        "relative",
        0,
        1,
        32
      ],
      "width": [
        "30rpx",
        0,
        1,
        32
      ],
      "height": [
        "30rpx",
        0,
        1,
        32
      ],
      "top": [
        "15rpx",
        0,
        1,
        32
      ],
      "left": [
        "425rpx",
        0,
        1,
        32
      ]
    },
    ".m2-3 ": {
      "position": [
        "relative",
        0,
        1,
        35
      ],
      "width": [
        "30rpx",
        0,
        1,
        35
      ],
      "height": [
        "30rpx",
        0,
        1,
        35
      ],
      "top": [
        "15rpx",
        0,
        1,
        35
      ],
      "left": [
        "425rpx",
        0,
        1,
        35
      ]
    },
    ".m2-4 ": {
      "position": [
        "relative",
        0,
        1,
        38
      ],
      "width": [
        "30rpx",
        0,
        1,
        38
      ],
      "height": [
        "30rpx",
        0,
        1,
        38
      ],
      "top": [
        "15rpx",
        0,
        1,
        38
      ],
      "left": [
        "425rpx",
        0,
        1,
        38
      ]
    }
  },
  ".ball": {
    ".m1 ": {
      "position": [
        "absolute",
        0,
        1,
        12
      ],
      "width": [
        "200rpx",
        0,
        1,
        12
      ],
      "height": [
        "80rpx",
        0,
        1,
        12
      ],
      "top": [
        "0rpx",
        0,
        1,
        12
      ],
      "left": [
        "22rpx",
        0,
        1,
        12
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        1,
        12
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        12
      ]
    },
    ".m1-1 ": {
      "position": [
        "absolute",
        0,
        1,
        15
      ],
      "width": [
        "300rpx",
        0,
        1,
        15
      ],
      "height": [
        "80rpx",
        0,
        1,
        15
      ],
      "top": [
        "0rpx",
        0,
        1,
        15
      ],
      "left": [
        "22rpx",
        0,
        1,
        15
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        1,
        15
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        15
      ]
    },
    ".m1-2 ": {
      "position": [
        "absolute",
        0,
        1,
        18
      ],
      "width": [
        "400rpx",
        0,
        1,
        18
      ],
      "height": [
        "80rpx",
        0,
        1,
        18
      ],
      "top": [
        "0rpx",
        0,
        1,
        18
      ],
      "left": [
        "22rpx",
        0,
        1,
        18
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        1,
        18
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        18
      ]
    },
    ".m1-3 ": {
      "position": [
        "absolute",
        0,
        1,
        21
      ],
      "width": [
        "400rpx",
        0,
        1,
        21
      ],
      "height": [
        "120rpx",
        0,
        1,
        21
      ],
      "top": [
        "0rpx",
        0,
        1,
        21
      ],
      "left": [
        "22rpx",
        0,
        1,
        21
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        1,
        21
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        21
      ]
    },
    ".m1-4 ": {
      "position": [
        "absolute",
        0,
        1,
        24
      ],
      "width": [
        "400rpx",
        0,
        1,
        24
      ],
      "height": [
        "160rpx",
        0,
        1,
        24
      ],
      "top": [
        "0rpx",
        0,
        1,
        24
      ],
      "left": [
        "22rpx",
        0,
        1,
        24
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        1,
        24
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        24
      ]
    },
    ".m2 ": {
      "position": [
        "absolute",
        0,
        1,
        27
      ],
      "width": [
        "200rpx",
        0,
        1,
        27
      ],
      "height": [
        "80rpx",
        0,
        1,
        27
      ],
      "top": [
        "0rpx",
        0,
        1,
        27
      ],
      "left": [
        "230rpx",
        0,
        1,
        27
      ],
      "backgroundColor": [
        "#4CD964",
        0,
        1,
        27
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        27
      ]
    },
    ".m2-1 ": {
      "position": [
        "absolute",
        0,
        1,
        30
      ],
      "width": [
        "300rpx",
        0,
        1,
        30
      ],
      "height": [
        "80rpx",
        0,
        1,
        30
      ],
      "top": [
        "0rpx",
        0,
        1,
        30
      ],
      "left": [
        "130rpx",
        0,
        1,
        30
      ],
      "backgroundColor": [
        "#4CD964",
        0,
        1,
        30
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        30
      ]
    },
    ".m2-2 ": {
      "position": [
        "absolute",
        0,
        1,
        33
      ],
      "width": [
        "400rpx",
        0,
        1,
        33
      ],
      "height": [
        "80rpx",
        0,
        1,
        33
      ],
      "top": [
        "0rpx",
        0,
        1,
        33
      ],
      "left": [
        "30rpx",
        0,
        1,
        33
      ],
      "backgroundColor": [
        "#4CD964",
        0,
        1,
        33
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        33
      ]
    },
    ".m2-3 ": {
      "position": [
        "absolute",
        0,
        1,
        36
      ],
      "width": [
        "400rpx",
        0,
        1,
        36
      ],
      "height": [
        "120rpx",
        0,
        1,
        36
      ],
      "top": [
        "0rpx",
        0,
        1,
        36
      ],
      "left": [
        "30rpx",
        0,
        1,
        36
      ],
      "backgroundColor": [
        "#4CD964",
        0,
        1,
        36
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        36
      ]
    },
    ".m2-4 ": {
      "position": [
        "absolute",
        0,
        1,
        39
      ],
      "width": [
        "400rpx",
        0,
        1,
        39
      ],
      "height": [
        "160rpx",
        0,
        1,
        39
      ],
      "top": [
        "0rpx",
        0,
        1,
        39
      ],
      "left": [
        "30rpx",
        0,
        1,
        39
      ],
      "backgroundColor": [
        "#4CD964",
        0,
        1,
        39
      ],
      "borderRadius": [
        "15rpx",
        0,
        1,
        39
      ]
    }
  },
  ".m1-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "width": [
        "500rpx",
        0,
        0,
        13
      ],
      "height": [
        "88rpx",
        0,
        0,
        13
      ],
      "left": [
        "30rpx",
        0,
        0,
        13
      ]
    }
  },
  ".m1-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        16
      ],
      "width": [
        "500rpx",
        0,
        0,
        16
      ],
      "height": [
        "88rpx",
        0,
        0,
        16
      ],
      "left": [
        "30rpx",
        0,
        0,
        16
      ]
    }
  },
  ".m1-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        19
      ],
      "width": [
        "500rpx",
        0,
        0,
        19
      ],
      "height": [
        "128rpx",
        0,
        0,
        19
      ],
      "left": [
        "30rpx",
        0,
        0,
        19
      ]
    }
  },
  ".m1-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        22
      ],
      "width": [
        "500rpx",
        0,
        0,
        22
      ],
      "height": [
        "168rpx",
        0,
        0,
        22
      ],
      "left": [
        "30rpx",
        0,
        0,
        22
      ]
    }
  },
  ".m2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        25
      ],
      "width": [
        "500rpx",
        0,
        0,
        25
      ],
      "height": [
        "88rpx",
        0,
        0,
        25
      ]
    }
  },
  ".m2-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        28
      ],
      "width": [
        "500rpx",
        0,
        0,
        28
      ],
      "height": [
        "88rpx",
        0,
        0,
        28
      ]
    }
  },
  ".m2-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        31
      ],
      "width": [
        "500rpx",
        0,
        0,
        31
      ],
      "height": [
        "88rpx",
        0,
        0,
        31
      ]
    }
  },
  ".m2-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        34
      ],
      "width": [
        "500rpx",
        0,
        0,
        34
      ],
      "height": [
        "128rpx",
        0,
        0,
        34
      ]
    }
  },
  ".m2-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        37
      ],
      "width": [
        "500rpx",
        0,
        0,
        37
      ],
      "height": [
        "168rpx",
        0,
        0,
        37
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);