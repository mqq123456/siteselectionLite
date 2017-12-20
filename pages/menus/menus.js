
Page({
  data: {
    selected: 1,
    menu: [
      {
        "name": "红烧肉",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "辣子鸡",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "土豆牛腩",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "辣椒炒肉",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "西红柿鸡蛋",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "蘑菇",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "成龙",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "成龙",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "成龙",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "成龙",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }, {
        "name": "成龙",
        "id": "1054531",
        "desc": "元／份",
        "price": "15元",
        "image": "https://img3.doubanio.com/img/celebrity/medium/694.jpg"
      }
    ]
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  itemselected1: function(item) {
    this.setData({
      selected: 1
    })
  },
  itemselected2: function (item) {
    this.setData({
      selected: 2
    })
  },
  itemselected3: function (item) {
    this.setData({
      selected: 3
    })
  },
  itemselected4: function (item) {
    this.setData({
      selected: 4
    })
  },
  itemselected5: function (item) {
    this.setData({
      selected: 5
    })
  },
  itemselected6: function (item) {
    this.setData({
      selected: 6
    })
  },
  itemselected7: function (item) {
    this.setData({
      selected: 7
    })
  },
  itemselected8: function (item) {
    this.setData({
      selected: 8
    })
  },
  itemselected9: function (item) {
    this.setData({
      selected: 9
    })
  },
  itemselected10: function (item) {
    this.setData({
      selected: 10
    })
  }
})
