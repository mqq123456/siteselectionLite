Page({
  data: {
    show_choose_view: true,
    show_index_view: false,
    list: [
      {
        id: 'view',
        name: '客流情况',
        open: false,
        pages: [
          {
            'name': '住宅小区',
            'value': 'house'
          }, {
            'name': '写字楼',
            'value': 'office'
          }, {
            'name': '人口总数',
            'value': 'people'
          }, {
            'name': '人流情况',
            'value': 'flow'
          }
        ]
      }, {
        id: 'content',
        name: '待租门店',
        open: false,
        pages: [{
          'name': '待租门店列表',
          'value': 'waiting'
        }]
      }, {
        id: 'form',
        name: '竞品店铺',
        open: false,
        pages: [{
          'name': '竞品总览',
          'value': 'compare'
        }, {
            'name': '附近餐厅',
            'value': 'restaurant'
        }]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
   chooseLocation: function () {
    //  wx.navigateBack({

    //    delta: 0

    //  })
    var that = this
    wx.chooseLocation({
      success: function (res) {

        console.log(res)
        that.setData({
          show_choose_view: false,
          show_index_view: true
        })
      }
    })
  }
})

