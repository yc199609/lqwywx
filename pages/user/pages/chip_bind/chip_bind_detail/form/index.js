Page({
  data:{
    picker: ['前轴承', '后轴承', '左侧面','右侧面'],
    index: null
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  handleScan(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  }
})