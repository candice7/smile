Page({
  data:{
    todayjoke:{
      name:"校园",
      comment: "不服不行,还是同学最搞笑",
      imagePath:"/images/t4.jpg",
      isHighlyRecommended:true
    },
    score:58,
  },
  
  //跳转页面
  validate: function () {
    wx.navigateTo({
      url: '../smile/smile',
    })
  },
  

})