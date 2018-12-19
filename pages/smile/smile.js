var app=getApp()
var joke=null
Page({
  data: {
    joke:{},
  },
  joke:JSON.stringify(joke),
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },
  onLoad: function () {
    
    var that=this

    const requestTask = wx.request({
      url: 'https://ali-joke.showapi.com/textJoke',
    method:"GET",
  
    header: {
      'content-type': 'application/json',
      'Authorization': 'APPCODE fa0d2f3daa0943c58bbcbb40bc7188ee'
    },
    success:function(res){
      console.log(res)
      that.setData({
        joke:res.data
      })
    },
    fail:function(res){
      console.log("fail!!!")
    },
    complete:function(res){
      console.log("end")
    }
  })
  }
})