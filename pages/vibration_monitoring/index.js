Page({
  data:{
    inputValue:""
  },
  bindKeyInput:function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  handleCurves(){
    wx.navigateTo({
      url:"/pages/vibration_curves/index"
    })
  }
})