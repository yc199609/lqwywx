Page({
  data: {
    list:[
      {
        listName:'列表1',
        item:[
          {
            itemName:'子列表1-1',
            content:'1-1中的内容',
            time: '2015-05-06'
          }, 
          {
              itemName: '子列表1-2',
              content: '1-2中的内容',
              time: '2015-04-13'
          }, 
          {
              itemName: '子列表1-3',
              content: '1-3中的内容',
              time: '2015-12-06'
          }
        ]
      }, 
      {
        listName: '列表2',
        item: [
          {
            itemName: '子列表2-1',
            content: '2-1中的内容',
            time: '2017-05-06'
          }, 
          {
            itemName: '子列表2-2',
            content: '2-2中的内容',
            time: '2015-08-06'
          }, 
          {
            itemName: '子列表2-3',
            content: '2-3中的内容',
            time: '2015-11-06'
          }
        ]
      }, 
      {
        listName: '列表3',
        item: [
          {
            itemName: '子列表3-1',
            content: '3-1中的内容',
            time: '2015-05-15'
          }, 
          {
            itemName: '子列表3-2',
            content: '3-2中的内容',
            time: '2015-05-24'
          }, 
          {
            itemName: '子列表3-3',
            content: '3-3中的内容',
            time: '2015-05-30'
          }
        ]
      }
    ]
  },
  //点击最外层列表展开收起
  listTap(e){
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
        list=this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show){//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list,Index);
    }

    this.setData({
      list
    });
  },
  //让所有的展开项，都变为收起
  packUp(data,index){
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if(index!=i){
        data[i].show = false;
        for (let j=0;j<data[i].item.length;j++){//其他所有内层也为关闭状态
            data[i].item[j].show=false;
        }
      }
    }
  },
  chooseDevice(e){
    // console.log(e.currentTarget.dataset.device)
    wx.navigateTo({
      url:"/pages/status/index",
    })
  }
})