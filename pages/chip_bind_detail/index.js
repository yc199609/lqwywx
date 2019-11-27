Page({
  data:{
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    index:-1,
    imgList: []
  },
  PickerChange(e) {
    this.index = e.detail.value
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.imgList.splice(e.currentTarget.dataset.index, 1)
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
        if (this.imgList.length != 0) {
          this.imgList = this.imgList.concat(res.tempFilePaths)
        } else {
          this.imgList = res.tempFilePaths
        }
      }
    });
  },
})