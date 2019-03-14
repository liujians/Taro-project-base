import Taro from '@tarojs/taro';
// import getStore from '../store';
import './interceptor';

export default function request(url, type, data) {
  return new Promise(function(resolve, reject) {
    //网络请求
    Taro.showLoading({
      title: '加载中',
      mask: true,
    });
    // 从store获取token 或者从localstorage
    // var header = getStore().getState().user.header;
    // Taro.getStorageSync('token')
    Taro.request({
      url: `${baseUrl}${url}`, // eslint-disable-line
      data: data || null,
      method: type || 'get', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: header, // 设置请求的 header
      success: function(res) {
        // success网络请求成功
        if (res.statusCode != 200) {
          reject({ error: '服务器忙，请稍后重试', code: 500 });
          return;
        }
        if (res.data.status === 0) {
          resolve(res.data.data);
          Taro.hideLoading();
        } else {
          Taro.showToast({
            title: res.data.info,
            icon: 'none',
            duration: 3000,
          });
        }
      },
    });
  });
}

export const get = (url, data) => request(url, 'get', data);

export const post = (url, data) => request(url, 'post', data);

export const patch = (url, data) => request(url, 'patch', data);

export const del = (url, data) => request(url, 'delete', data);
