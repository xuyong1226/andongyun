var _this
const netUtils = require('../../netWork/NetUtils');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    netWorkType: '监听中...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    swiperimage: [
      '../../accets/image/VCG211266077604.jpg',
      '../../accets/image/veer-300398630.jpg',
      '../../accets/image/veer-300639713.jpg'
    ]
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
  onShareAppMessage: function () {

  }
})