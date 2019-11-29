Page({
  data:{
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    index:-1,
    imgList: []
  },
  scanCode(){
    wx.scanCode({
      success(res){
        console.log(res)
        // charSet: "UTF-8"
        // errMsg: "scanCode:ok"
        // rawData: "aHR0cDovL2JhaWtlLmJhaWR1LmNvbQ=="
        // result: "http://baike.baidu.com"
        // scanType: "QR_CODE"
      }
    })
  },
  PickerChange(e) {
    this.setData({
      index:e.detail.value
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '用户',
      content: '确定要删除吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          const lastImageList = this.data.imgList.filter((o,i)=> i !== e.currentTarget.dataset.index)
          this.setData({
            imgList:lastImageList
          })
        }
      }
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList:res.tempFilePaths
          })
        }
      }
    });
  },
})