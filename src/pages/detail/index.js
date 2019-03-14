import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
// import { connect } from '@tarojs/redux';
import styles from './index.module.less';
import backlogo from '../../assets/backlogo.png';

class Detail extends Component {
  componentWillMount() {
    console.log(this.$router.params.positionId);
  }
  render() {
    return (
      <View className={styles.detailContainer}>
        <View className={styles.companyHeader}>
          <View className={styles.companyName}>拜腾春招</View>
          <View className={styles.companyDay}>还剩17天</View>
          <Image className={styles.backlogo} src={backlogo} />
        </View>
        <View className={styles.instrItems}>
          <View className={styles.title}>公司介绍</View>
          <View className={styles.content}>
            1、负责网站PC端和移动软件APP产品的界面视觉设计和交互设计工作；
            2、参与产品团队设计讨论，和开发团队共同创建用户界面，跟踪产品效果，持续提出设计改善方案；
            3、从用户体验角度出发，提供有效的视觉设计，并保持高水准的设计品质；
            4、负责市场等品牌宣传的活动页面、宣传资料及其他相关的设计工作。
          </View>
        </View>
        <View className={styles.instrItems}>
          <View className={styles.title}>招聘职位</View>
          <View className={styles.content}>
            <View>校招岗位：</View>
            <View>包装工程师</View>
            <View>运输管理专员</View>
            <View>供应商质量工程师-热管理系统</View>
            <View>项目财务分析</View>
            <View>进出口专员</View>
            <View>生产计划工程师</View>
            <View>其他</View>
            <View>进入网申地址，查看岗位详情</View>
          </View>
        </View>
        <View className={styles.instrItems}>
          <View className={styles.title}>招聘方式</View>
          <View className={styles.content}>
            <View>http://campus.51job.com.Byton2019/info.html</View>
            <View className={styles.tips}>（收藏可在官网icebear.me同步查看，投递更方便）</View>
          </View>
        </View>
      </View>
    );
  }
}

export default Detail;
