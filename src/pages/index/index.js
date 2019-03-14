import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getListData, dispatchMyTest } from '@/actions/counter';
import { list } from '@/services/demo';
import formatMessage from '@/utils/formatMessage';
import styles from './index.module.less';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currPage: 2,
      // isLoadMore: false,
    };
  }
  config = {
    navigationBarTitleText: 'Demo小程序',
  };
  componentDidMount() {
    list().then(res => {
      console.log(res);
    });
    this.props.onGetListData();
    console.log('this.props.onGetListData~~~', this.props.onGetListData);
  }
  onTargetDetail = positionId => {
    Taro.navigateTo({
      url: `../detail/index?positionId=${positionId}`,
    });
  };
  // onLoadMore = () => {
  //   this.props.dispatchMyTest().then((res) => {
  //     console.log(res)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }
  render() {
    let { positionsList } = this.props;
    // let { isLoadMore } = this.state;
    console.log('positionsList', positionsList);
    return (
      <View className="index">
        <View className={styles.listContainer}>
          {formatMessage('test')}
          {positionsList &&
            positionsList.map(curr => {
              return (
                <View
                  key={curr.companyId}
                  className={styles.listItem}
                  onClick={() => this.onTargetDetail(curr.positionId)}
                >
                  <View className={styles.listItemImg}>
                    <Image src={`https://www.lgstatic.com/${curr.companyLogo}`} />
                  </View>
                  <View className={styles.listItemDescrtion}>
                    <View className={styles.listItemTitle}>{curr.positionName}</View>
                    <View className={styles.jobsInfos}>
                      <View>{curr.salary}</View>
                      <View>[{curr.city}]</View>
                    </View>
                    <View className={styles.companyFullName}>{curr.companyFullName}</View>
                  </View>
                </View>
              );
            })}
          {/* <View className={styles.loadingMore} onClick={() => this.onLoadMore()}>
            {
              isLoadMore ? "加载中..." : "加载更多"
            }
          </View> */}
        </View>
      </View>
    );
  }
}

export default connect(
  state => {
    return {
      positionsList: state.counter.positionsList,
    };
  },
  {
    onGetListData: getListData,
    dispatchMyTest,
  },
)(Index);
