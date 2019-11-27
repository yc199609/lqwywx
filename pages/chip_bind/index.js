Page({
  data:{
    searchText:''
  },
  search(){
    console.log(this.searchText)
  },
  hanldGoDetail(){
    wx.navigateTo({
        url: "/pages/chip_bind_detail/index"
    });
  }
})