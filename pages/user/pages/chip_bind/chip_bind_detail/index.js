Page({
  insertModal(){
    wx.navigateTo({
      url: "/pages/user/pages/chip_bind/chip_bind_detail/form/index"
    });
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})
