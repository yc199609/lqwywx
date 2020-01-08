Page({
  hanldGoBack(){
    wx.navigateBack()
  },
  details(){
    wx.navigateTo({
      url: '/pages/device_status_list/pages/fault_list/fault_details/fault_reason/index'
    })
  }
})
