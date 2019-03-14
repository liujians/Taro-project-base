import Taro, { Component } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { dispatchGetUserInfo } from '../../actions/counter';
import styles from './index.module.less';
import notLogin from '../../assets/notLogin.png';
import minePlaceholder from '../../assets/mine.jpg';

@connect(
  ({ counter }) => ({
    counter,
  }),
  dispatch => ({
    dispatchGetUserInfo() {
      dispatch(dispatchGetUserInfo());
    },
  }),
)
class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      // can_getuserinfo: 0,
    };
  }
  componentDidMount = () => {
    // Taro.getSetting({
    //   success (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       console.log("已经授权")
    //       Taro.setStorage({
    //         key: 'can_getuserinfo',
    //         data: 1,
    //       })
    //     } else {
    //       Taro.setStorage({
    //         key: 'can_getuserinfo',
    //         data: 0,
    //       })
    //     }
    //   }
    // })

    Taro.getUserInfo({
      success: res => {
        console.log(res.userInfo);
        this.setState({
          userInfo: res.userInfo,
        });
      },
    });
  };

  tobegin = res => {
    console.log('aaa', res);
    this.setState({
      userInfo: res.detail.userInfo,
    });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <View>
        <View className={styles.avatorContainer}>
          {userInfo ? (
            <View className={styles.avatorImg}>
              <Image src={userInfo.avatarUrl} />
            </View>
          ) : (
            <View className={styles.notLogin}>
              <Image src={notLogin} />
            </View>
          )}
          <View className={styles.nickName}>{userInfo.nickName}</View>
        </View>
        {userInfo ? (
          <View className={styles.minePlaceHolder}>
            <Image src={minePlaceholder} />
          </View>
        ) : (
          <Button className={styles.getInfoBtn} openType="getUserInfo" onGetUserInfo={this.tobegin}>
            授权
          </Button>
        )}
      </View>
    );
  }
}

export default Mine;
