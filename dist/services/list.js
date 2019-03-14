"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { dispatchGetUserInfo } from '../actions/counter';

var list = exports.list = function list(pageNo, pageSize) {
  return new Promise(function (resolve) {
    _index2.default.request({
      url: 'https://m.lagou.com/listmore.json',
      data: {
        pageNo: pageNo,
        pageSize: pageSize
      },
      success: function success(res) {
        if (res.data.state === 1) {
          resolve(res.data.content.data);
        }
      }
    });
  });
};
exports.default = {};