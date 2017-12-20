Page({
  data: {
    currentTab: 0,
    datalist: [
      {
        'name': '节假日',
        'value': '2000'
      }, {
        'name': '工作日',
        'value': '4900'
      }, {
        'name': '普通周末',
        'value': '3400'
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
      if (e.target.dataset.current == 0) {
        that.setData({
          datalist: [
            {
              'name': '节假日',
              'value': '20'
            }, {
              'name': '工作日',
              'value': '49'
            }, {
              'name': '普通周末',
              'value': '34'
            }]
        })
      } else {
        that.setData({
          datalist: [
            {
              'name': '0:00',
              'value': '6'
            }, {
            'name': '1:00',
              'value': '6'
            }, {
            'name': '2:00',
              'value': '1'
            }, {
              'name': '3:00',
              'value': '1'
            }, {
              'name': '4:00',
              'value': '33'
            }, {
              'name': '5:00',
              'value': '166'
            }, {
              'name': '6:00',
              'value': '360'
            }, {
              'name': '7:00',
              'value': '750'
            }, {
              'name': '8:00',
              'value': '612'
            }, {
              'name': '9:00',
              'value': '570'
            }, {
              'name': '10:00',
              'value': '320'
            }, {
              'name': '11:00',
              'value': '330'
            }, {
              'name': '12:00',
              'value': '300'
            }, {
              'name': '13:00',
              'value': '250'
            }, {
              'name': '14:00',
              'value': '210'
            }, {
              'name': '15:00',
              'value': '290'
            }, {
              'name': '16:00',
              'value': '530'
            }, {
              'name': '17:00',
              'value': '670'
            }, {
              'name': '18:00',
              'value': '533'
            }, {
              'name': '19:00',
              'value': '354'
            }, {
              'name': '20:00',
              'value': '188'
            }, {
              'name': '21:00',
              'value': '100'
            }, {
              'name': '22:00',
              'value': '48'
            }, {
              'name': '23:00',
              'value': '20'
            }]
        })
      }
    }
  },
})
