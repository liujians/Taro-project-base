import Taro from '@tarojs/taro';

const interceptor = function(chain) {
  const requestParams = chain.requestParams;
  requestParams.fail = function() {
    // fail调用接口失败
    Taro.showToast({
      title: '网络错误',
      icon: 'none',
      duration: 3000,
    });
    Taro.hideLoading();
    return { error: '网络错误', code: 0 };
  };
  requestParams.complete = function() {
    // complete
  };
  return chain
    .proceed(requestParams)
    .then(res => {
      return res;
    })
    .catch(res => {
      console.log('catch');
      console.log(res);
    });
};

Taro.addInterceptor(interceptor);
if (process.env.NODE_ENV === 'development') {
  console.log('-----拦截器信息-----');
  Taro.addInterceptor(Taro.interceptors.logInterceptor);
  Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);
  console.log('----拦截器信息结束----');
}
