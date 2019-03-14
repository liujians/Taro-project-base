import Taro from '@tarojs/taro';
// import { dispatchGetUserInfo } from '../actions/counter';

export const list = (pageNo, pageSize) => {
  return new Promise(resolve => {
    Taro.request({
      url: 'https://m.lagou.com/listmore.json',
      data: {
        pageNo: pageNo,
        pageSize: pageSize,
      },
      success(res) {
        if (res.data.state === 1) {
          resolve(res.data.content.data);
        }
      },
    });
  });
};
export default {};
