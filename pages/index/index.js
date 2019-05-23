Page({
  data: {},
  Tianapi: function () {
    this.onLoad();
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://api.tianapi.com/txapi/saylove/', //天行数据土味情话接口
      data: {
        key: ''  //apikey请在https://www.tianapi.com中获得
      },
      success: function (res) {
        if(res.data.code == 200){
        that.setData({
          content: res.data.newslist[0].content
        })
      }else{
          that.setData({
            content: res.data.msg
          }) 
      }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})
