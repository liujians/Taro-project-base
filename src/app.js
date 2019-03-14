import '@tarojs/async-await';
import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';

import configStore from './store';

import './app.less';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: ['pages/index/index', 'pages/detail/index', 'pages/mine/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#a7342a',
      // navigationBarTitleText: 'WeChat Test',
      navigationBarTextStyle: 'white',
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '职位',
          iconPath: 'assets/position.png',
          selectedIconPath: 'assets/positon_active.png',
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: 'assets/mine.png',
          selectedIconPath: 'assets/mine_active.png',
        },
      ],
      selectedColor: '#f00',
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
