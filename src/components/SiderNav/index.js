import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '服务器管理',
    icon: 'laptop',
    // key: '/home/general',
    key: '/server_info',
    // subs: [
    //   {key: '/home/general/button', title: '按钮', icon: '',},
    //   {key: '/home/general/icon', title: '图标', icon: '',},
    // ]
  },
  {
    title: '学生管理',
    icon: 'bars',
    // key: '/home/navigation',
    key: '/student_info',
    // subs: [
    //   {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
    //   {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
    //   {key: '/home/navigation/steps', title: '步骤条', icon: ''},
    // ]
  },
  {
    title: '数据管理',
    icon: 'edit',
    // key: '/home/entry',
    key: '/data_info',
    // subs: [
    //   {
    //     key: '/home/entry/form',
    //     title: '表单',
    //     icon: '',
    //     subs: [
    //       {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
    //       {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
    //     ]
    //   },
    //   {key: '/home/entry/upload', title: '上传', icon: ''},
    // ]
  },
  {
    title: '模型库',
    icon: 'desktop',
    key: '/model_zoo',
    subs: [
      {key: '/model_zoo/classification_sub', title: '分类', icon: ''},
      {key: '/model_zoo/detection_sub', title: '检测', icon: ''},
      {key: '/model_zoo/segmentation_sub', title: '语义分割', icon: ''},
      {key: '/model_zoo/keypoints_sub', title: '关键点', icon: ''},
    ]
  },
  // {
  //   title: '反馈组件',
  //   icon: 'message',
  //   key: '/home/feedback',
  //   subs: [
  //     {key: '/home/feedback/modal', title: '对话框', icon: '',},
  //     {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
  //     {key: '/home/feedback/spin', title: '加载中', icon: '',}
  //   ]
  // },
  // {
  //   title: '其它',
  //   icon: 'bulb',
  //   key: '/home/other',
  //   subs:[
  //     {key: '/home/other/animation', title: '动画', icon: '',},
  //     {key: '/home/other/gallery', title: '画廊', icon: '',},
  //     {key:'/home/other/draft',title:'富文本',icon:''},
  //     {key:'/home/other/chart',title:'图表',icon:''},
  //     {key:'/home/other/loading',title:'加载动画',icon:''},
  //     {key:'/home/other/404',title:'404',icon:''},
  //     {key:'/home/other/springText',title:'弹性文字',icon:''},
  //   ]
  // },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        // TODO 添加 logo
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    // background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav