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
    loginMode: 'wx'
  },
  showModal(e) {
    this.setData({
      modalName:e.currentTarget.dataset.target
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
  toDeviceState() {
    wx.switchTab({
      url: '/pages/device_status_list/index'
    });
  },
  // 点击登录
  loginUp(){
    var _that = this
    if(_that.phone == ""){
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
        duration:1000
      });
    }else if(_that.password == "" && _that.loginMode == 1){
      wx.showToast({
        title: '请输入密码',
        icon: 'none',
        duration:1000
      });
    }else if(_that.code == "" && _that.loginMode == 2){
      wx.showToast({
        title: '请输入验证码',
        icon: 'none',
        duration:1000
      });
    }else{
      //这里请求接口
      console.log(_that.phone,_that.password,_that.code)
      wx.switchTab({
          url: '/pages/main/main'
      });
    }
  },
  // 获取验证码
  getCode(){
    var _that = this
    const mobsms = uni.requireNativePlugin('WB-MobSms');
    // 倒计时
    if(_that.codeClick){
      if(_that.phone[0] != 1 || _that.phone.length != 11){
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 800
        });
      }else{
        _that.codeClick = false
        // 发送短信
        mobsms.sendSms(
          {zone: '86',phone_number: _that.phone},
          result => {if (result.status == 'success') {
            wx.showToast({
              title: '验证码获取中',
              icon: 'loading',
              duration: 800
            });
          }
          }
        );
        // 倒计时开始
        var daojishi = 60
        var xianshi = setInterval(function(){
          _that.codeBut = "重新发送"+daojishi;
          daojishi--
          if(daojishi<=0){
            _that.codeBut = "重新发送"
            _that.codeClick = true
            clearInterval(xianshi);
          }
        },1000)
      }
    }
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