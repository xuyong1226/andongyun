function judgeNetworkStatus(callback) {
  wx.getNetworkType({
    success(res) {
      const networkType = res.networkType
      console.log(res);
      if('none' == networkType){
        wx.showLoading({
          title: '哦吼，粮断了！',
          mask: true
        })
        judgeNetworkStatus(callback);
      }else{
        wx.hideLoading()
      callback(networkType)  
      }
    },
    fail(err) {
      console.log(err)
    },
    complete(cpe){
      console.log(cpe)
    }
  })
}

module.exports = {
  judgeNetworkStatus: judgeNetworkStatus
};