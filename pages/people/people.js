var util = require('../../utils/util.js')

Page({
  data: {
    currentTab: 0,
    datalist: [
      {
        'name': '19岁以下',
        'value': '5'
      }, {
        'name': '20-29岁',
        'value': '10'
      }, {
        'name': '30-39岁',
        'value': '45'
      }, {
        'name': '40-49岁',
        'value': '30'
      }, {
        'name': '50岁以上',
        'value': '5'
      }]
  },
   /**
     * 点击tab切换
     */
    swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      if (e.target.dataset.current == 0){
        that.setData({
          datalist: [
            {
              'name': '19岁以下',
              'value': '5'
            }, {
              'name': '20-29岁',
              'value': '10'
            }, {
              'name': '30-39岁',
              'value': '45'
            }, {
              'name': '40-49岁',
              'value': '30'
            }, {
              'name': '50岁以上',
              'value': '5'
            }]
        })
      } else if (e.target.dataset.current == 1) {
        that.setData({
          datalist: [
            {
              'name': '男',
              'value': '44'
            }, {
              'name': '女',
              'value': '56'
            }]
        })
      } else if (e.target.dataset.current == 2) {
        that.setData({
          datalist: [
            {
              'name': '开发工程师',
              'value': '20'
            }, {
              'name': '产品经理',
              'value': '20'
            }, {
              'name': '项目经理',
              'value': '10'
            }, {
              'name': '运维',
              'value': '5'
            }, {
              'name': '人力资源',
              'value': '10'
            }, {
              'name': '其它',
              'value': '35'
            }]
        })
      }  else if (e.target.dataset.current == 3) {
        that.setData({
          datalist: [
            {
              'name': '3000元以下',
              'value': '10'
            }, {
              'name': '3000-5000元',
              'value': '10'
            }, {
              'name': '5000-8000元',
              'value': '20'
            }, {
              'name': '8000-10000元',
              'value': '30'
            }, {
              'name': '10000-15000元',
              'value': '15'
            }, {
              'name': '15000-20000元',
              'value': '1'
            }, {
              'name': '20000元以上',
              'value': '5'
            }]
        })
      } else if (e.target.dataset.current == 4) {
        that.setData({
          datalist: [
            {
              'name': '常驻人口',
              'value': '58'
            }, {
              'name': '流动人口',
              'value': '9'
            }]
        })
      }
    }
  },
})
