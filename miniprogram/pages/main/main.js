var _this
const netUtils = require('../../netWork/NetUtils');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatordots: true,
    autoplay: true,
    indicatorcolor: '',
    indicatoractivecolor: '#ffccff',
    circular: true,
    easing: 'easeInOutCubic',
    netWorkType: '监听中...',
    swiperimage: [
      '../../accets/image/VCG211266077604.jpg',
      '../../accets/image/veer-300398630.jpg',
      '../../accets/image/veer-300639713.jpg'
    ],
    imageurl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
const db = wx.cloud.database()
db.collection('images').get({
  success:res=> {
    console.log(res.data)
    this.setData({
      imageurl:res.data,
    })
  },
  fail:console.error
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    _this = this
    netUtils.judgeNetworkStatus(function (res) {
      if ('none' != res) {
        _this.setData({
          netWorkType: '当前网络状态：' + res,
        });
      } else {
        return;
      }
    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '自定义分享标题',      
      desc: '自定义分享描述',      
      path: '/page/user?id=123',
      success: function(res) {
        console.log(res, "转发成功")
      },
      fail: function(res) {
        console.log(res, "转发失败")
      }
    }
  },
  onShareTimeline: function () {
    
  },
})