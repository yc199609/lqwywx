Page({
  hanldGoBack(){
    wx.navigateBack()
  },
  details(){
    wx.navigateTo({
      url: '/pages/fault_reason/index'
    })
  }
})