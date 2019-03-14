"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

var _demo = require("../../services/demo.js");

var _formatMessage = require("../../utils/formatMessage.js");

var _formatMessage2 = _interopRequireDefault(_formatMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var styles = {
  listContainer: "index-module__listContainer___3JWgd",
  listItem: "index-module__listItem___2LRTr",
  listItemImg: "index-module__listItemImg___I-OaY",
  listItemDescrtion: "index-module__listItemDescrtion___3b_Bv",
  listItemTitle: "index-module__listItemTitle___a4HX1",
  jobsInfos: "index-module__jobsInfos___1Hym-",
  companyFullName: "index-module__companyFullName___1ZL1g",
  loadingMore: "index-module__loadingMore___3-Xp6"
};
var _listContainer$listIt = {
  listContainer: "index-module__listContainer___3JWgd",
  listItem: "index-module__listItem___2LRTr",
  listItemImg: "index-module__listItemImg___I-OaY",
  listItemDescrtion: "index-module__listItemDescrtion___3b_Bv",
  listItemTitle: "index-module__listItemTitle___a4HX1",
  jobsInfos: "index-module__jobsInfos___1Hym-",
  companyFullName: "index-module__companyFullName___1ZL1g",
  loadingMore: "index-module__loadingMore___3-Xp6"
};

_objectDestructuringEmpty(_listContainer$listIt);

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "styles", "positionsList"], _this.config = {
      navigationBarTitleText: 'Demo小程序'
    }, _this.onTargetDetail = function (positionId) {
      _index2.default.navigateTo({
        url: "../detail/index?positionId=" + positionId
      });
    }, _this.anonymousFunc0Array = [], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);
      this.state = {
        // currPage: 2,
        // isLoadMore: false,
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _demo.list)().then(function (res) {
        console.log(res);
      });
      this.__triggerPropsFn("onGetListData", [null].concat([]));
      console.log('this.props.onGetListData~~~', this.props.onGetListData);
    }
  }, {
    key: "_createData",

    // onLoadMore = () => {
    //   this.props.dispatchMyTest().then((res) => {
    //     console.log(res)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // }
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var positionsList = this.__props.positionsList;
      // let { isLoadMore } = this.state;

      console.log('positionsList', positionsList);
      var anonymousState__temp = (0, _formatMessage2.default)('test');
      var loopArray0 = positionsList ? positionsList.map(function (curr, __index0) {
        curr = {
          $original: (0, _index.internal_get_original)(curr)
        };

        _this2.anonymousFunc0Array[__index0] = function () {
          return _this2.onTargetDetail(curr.$original.positionId);
        };

        return {
          $original: curr.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        styles: styles,
        positionsList: positionsList
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(__index0, e) {
      ;
      this.anonymousFunc0Array[__index0] && this.anonymousFunc0Array[__index0](e);
    }
  }]);

  return Index;
}(_index.Component), _class.properties = {
  "__fn_onGetListData": {
    "type": null,
    "value": null
  },
  "onGetListData": {
    "type": null,
    "value": null
  },
  "positionsList": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["anonymousFunc0"], _temp2);


var Index__Connected = (0, _index3.connect)(function (state) {
  return {
    positionsList: state.counter.positionsList
  };
}, {
  onGetListData: _counter.getListData,
  dispatchMyTest: _counter.dispatchMyTest
})(Index);
exports.default = Index__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index__Connected, true));