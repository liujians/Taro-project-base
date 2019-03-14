'use strict';

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interceptor = function interceptor(chain) {
  var requestParams = chain.requestParams;
  requestParams.fail = function () {
    // fail调用接口失败
    _index2.default.showToast({
      title: '网络错误',
      icon: 'none',
      duration: 3000
    });
    _index2.default.hideLoading();
    return { error: '网络错误', code: 0 };
  };
  requestParams.complete = function () {
    // complete
  };
  return chain.proceed(requestParams).then(function (res) {
    return res;
  }).catch(function (res) {
    console.log('catch');
    console.log(res);
  });
};

_index2.default.addInterceptor(interceptor);
{
  console.log('-----拦截器信息-----');
  _index2.default.addInterceptor(_index2.default.interceptors.logInterceptor);
  _index2.default.addInterceptor(_index2.default.interceptors.timeoutInterceptor);
  console.log('----拦截器信息结束----');
}