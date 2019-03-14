import { GET_LIST_DATA, GET_USER_INFOS } from '../constants/counter';
import { list } from '../services/list.js';

export const dispatchMyTest = () => () => {
  console.log('dis Inner');
  return new Promise((resolve, reject) => {
    console.log('pro Inner');
    const str = 'a';
    if (str === 'aa') {
      resolve('success');
    } else {
      reject('error');
    }
  });
};

export const getListData = (pageNo = 1, pageSize = 10) => dispatch => {
  console.log('getPositionsList：', list);
  list(pageNo, pageSize).then(res => {
    return new Promise((resolve, reject) => {
      if (res) {
        dispatch({
          type: GET_LIST_DATA,
          positionsList: [
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2643948,
              positionName: '广告销售',
              city: '北京',
              createTime: '今天 14:50',
              salary: '4k-8k',
              companyId: 143870,
              companyLogo: 'i/image/M00/9A/96/CgqKkVihakOAcEbTAAAiv7B528Q809.png',
              companyName: 'Gatherone',
              companyFullName: '北京聚智优创网络科技有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2651033,
              positionName: '销售（急聘）',
              city: '北京',
              createTime: '今天 14:50',
              salary: '4k-8k',
              companyId: 143870,
              companyLogo: 'i/image/M00/9A/96/CgqKkVihakOAcEbTAAAiv7B528Q809.png',
              companyName: 'Gatherone',
              companyFullName: '北京聚智优创网络科技有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2563536,
              positionName: '后台开发工程师',
              city: '深圳',
              createTime: '今天 14:50',
              salary: '22k-32k',
              companyId: 149944,
              companyLogo: 'i/image3/M00/17/00/Cgq2xlp0GMqAIP2jAABKHt7kTKc149.jpg',
              companyName: '威尔云',
              companyFullName: '深圳威尔视觉传媒有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 3094186,
              positionName: '游戏视频制作',
              city: '上海',
              createTime: '今天 14:49',
              salary: '8k-15k',
              companyId: 54514,
              companyLogo: 'i/image2/M01/84/54/CgotOVuHaleAANKhAABI0lYyrpY223.png',
              companyName: '怪猫游戏',
              companyFullName: '上海咕么信息科技有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2799622,
              positionName: 'UI设计师',
              city: '杭州',
              createTime: '今天 14:49',
              salary: '10k-20k',
              companyId: 28239,
              companyLogo: 'image2/M00/01/A3/CgpzWlXlFLaAA4SgAAAi1CerQ9Q078.jpg',
              companyName: '脸脸',
              companyFullName: '杭州脸脸会网络技术有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 3201317,
              positionName: '前端工程师',
              city: '广州',
              createTime: '今天 14:48',
              salary: '8k-16k',
              companyId: 180956,
              companyLogo: 'i/image/M00/BC/91/Cgp3O1jIu3WAaZvYAAAQAaDlarQ867.jpg',
              companyName: '极物',
              companyFullName: '广州极物网络有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2812724,
              positionName: '机器人技术支持',
              city: '北京',
              createTime: '今天 14:48',
              salary: '4k-8k',
              companyId: 9863,
              companyLogo: 'i/image3/M00/21/45/Cgq2xlqTtdaAAY_iAAB7PdrfsFc847.png',
              companyName: 'MYNTAI小觅智能',
              companyFullName: '轻客智能科技（江苏）有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2817140,
              positionName: '需求分析师',
              city: '广州',
              createTime: '今天 14:46',
              salary: '8k-16k',
              companyId: 171993,
              companyLogo: 'i/image/M00/A1/5F/CgqKkVins2aAB8gmAAC3cw0QAX0515.jpg',
              companyName: '数夫软件',
              companyFullName: '广州数夫软件科技有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2817213,
              positionName: '系统架构师',
              city: '广州',
              createTime: '今天 14:46',
              salary: '20k-40k',
              companyId: 171993,
              companyLogo: 'i/image/M00/A1/5F/CgqKkVins2aAB8gmAAC3cw0QAX0515.jpg',
              companyName: '数夫软件',
              companyFullName: '广州数夫软件科技有限公司',
            },
            {
              logger: {
                traceCapable: true,
                name: 'com.lagou.entity.mobile.MobilePosition',
              },
              positionId: 2637528,
              positionName: '.NET软件开发工程师',
              city: '上海',
              createTime: '今天 14:46',
              salary: '10k-15k',
              companyId: 137324,
              companyLogo: 'i/image/M00/0A/E7/CgpFT1jnSMqAAPXhAAAH5Sat9TI165.png',
              companyName: '威廉欧奈尔中国',
              companyFullName: '威廉欧奈尔信息科技（上海）有限公司',
            },
          ],
        });
        resolve('success');
      } else {
        reject('err');
      }
    });
  });
};

export const dispatchGetUserInfo = () => {
  return {
    type: GET_USER_INFOS,
  };
};
