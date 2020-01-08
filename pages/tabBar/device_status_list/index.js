Page({
  data: {
    list: [{
      id: 'view',
      name: '河北保定容城',
      open: false,
      pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
    }, {
      id: 'content',
      name: '星沙水厂',
      open: false,
      pages: ['text', 'icon', 'progress', 'rich-text']
    }, {
      id: 'form',
      name: '瑞红盐业',
      open: false,
      pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
    }]
  },
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }

    /**
     * key和value名称一样时，可以省略
     *
     * list:list=>list
     */
    this.setData({
      list
    })
  },
  chooseDevice(e){
    // console.log(e.currentTarget.dataset.device)
    wx.navigateTo({
      url:"/pages/device_status_list/pages/status/index",
    })
  }
})
