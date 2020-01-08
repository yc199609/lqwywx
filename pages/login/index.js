Page({
  /**
   * 页面的初始数据
   */
  data: {
    modalName: '',
    organization: [
      { name: '南方泵业集团' },
      { name: '星沙水厂' },
      { name: '河北保定榕城泵站' },
      { name: '瑞洪盐业' },
      { name: '天津华新' }
    ],
    loginMode: 'wx',
    cellPhone: '',
    password: ''
  },
  cellPhoneInput:function(e){
    this.setData({
      cellPhone: e.detail.value
    })
  },
  passwordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  showModal(e) {
    this.setData({
      modalName:e
    })
  },
  hideModal(e) {
    this.setData({
      modalName:null
    })
  },
  changePhone() {
    this.setData({
      loginMode:'phone'
    })
  },
  changeWx() {
    this.setData({
      loginMode:"wx"
    })
  },
  formSubmit(e) {
    if(this.data.loginMode == 'phone'){
      if(!e.detail.value.cellPhone){
        wx.showToast({
          title: '请输入用户名',
          icon: 'none',
          duration:1000
        });
        return
      }
      if(!e.detail.value.password){
        wx.showToast({
          title: '请输入密码',
          icon: 'none',
          duration:1000
        });
        return
      }
      // wx.request({
      //   url:'https://m.gosafenet.com/j/fcnp?r=/able/status/abdefault',
      //   data: {
      //     mobile: e.detail.value.cellPhone,
      //     password: e.detail.value.password
      //   },
      //   // header: {
      //   //   "Content-Type": "application/x-www-form-urlencoded"
      //   // },
      //   // method: "g",
      //   success(res){
      //     console.log(res.data)
      //   }
      // })
    }
    this.showModal('Modal')
  },
  toDeviceState() {
    wx.switchTab({
      url: '/pages/tabBar/device_status_list/index'
    });
  },

  // 微信登录
  weixinlogin(){
    // wx.login({
    //   provider: 'weixin',
    //   success: function (loginRes) {
    //     console.log(loginRes.authResult);
    //     // 获取用户信息
    //     uni.getUserInfo({
    //       provider: 'weixin',
    //       success: function (infoRes) {
    //     console.log(infoRes)
    //         console.log('用户昵称为：' + infoRes.userInfo.nickName);
    //       }
    //     });
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
