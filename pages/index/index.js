// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        title: 'apple',
        url: '',
        desc: '这是苹果'
      },
      {
        title: 'banana',
        url: '',
        desc: '这是香蕉'
      },
      {
        title: 'cat',
        url: '',
        desc: '这是小猫咪'
      }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../home/home'
    })
  },
  onLoad() {
    
  }
})
