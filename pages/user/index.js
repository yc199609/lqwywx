Page({
  data:{
    modalName:null,
    modalName2:null,
    organization: [
      { name: '南方泵业集团' },
      { name: '星沙水厂' },
      { name: '河北保定榕城泵站' },
      { name: '瑞洪盐业' },
      { name: '天津华新' }
    ]
  },
  handleDeviceHandover(){
    wx.navigateTo({
      url:"/pages/devices_handover/index"
    })
  },
  handleChipBinding(){
    wx.navigateTo({
      url:"/pages/chip_bind/index"
    })
  },
  handleInstitutionsHandover(){
    this.setData({
      modalName:'Modal'
    })
  },
  hideModal(e) {
    this.setData({
      modalName:null
    })
  },
  loginOut() {
    this.setData({
      modalName2:'DialogModal2'
    })
  },
  hideModal2 () {
    this.setData({
      modalName2:null
    })
  },
  submitLoginOut() {
    wx.navigateTo({
        url: '/pages/login/index'
    });
  }
})