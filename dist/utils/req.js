"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.patch = exports.post = exports.get = undefined;
exports.default = request;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("./interceptor.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(url, type, data) {
  return new Promise(function (resolve, reject) {
    //网络请求
    _index2.default.showLoading({
      title: '加载中',
      mask: true
    });
    // 从store获取token 或者从localstorage
    // var header = getStore().getState().user.header;
    // Taro.getStorageSync('token')
    _index2.default.request({
      url: "https://www.exampleSchool.cn" + url, // eslint-disable-line
      data: data || null,
      method: type || 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: header, // 设置请求的 header
      success: function success(res) {
        // success网络请求成功
        if (res.statusCode != 200) {
          reject({ error: '服务器忙，请稍后重试', code: 500 });
          return;
        }
        if (res.data.status === 0) {
          resolve(res.data.data);
          _index2.default.hideLoading();
        } else {
          _index2.default.showToast({
            title: res.data.info,
            icon: 'none',
            duration: 3000
          });
        }
      }
    });
  });
}
// import getStore from '../store';
var get = exports.get = function get(url, data) {
  return request(url, 'get', data);
};

var post = exports.post = function post(url, data) {
  return request(url, 'post', data);
};

var patch = exports.patch = function patch(url, data) {
  return request(url, 'patch', data);
};

var del = exports.del = function del(url, data) {
  return request(url, 'delete', data);
};