
const util = require('../../utils/util.js');

Page({
  data: {

    // 显示加载更多 loading
    hothidden: true,
    datalist: [],
    // loading
    hidden: true
  },

  /** 
   * 页面初始化
   * options 为页面跳转所带来的参数
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 显示 loading
     */
    that.setData({
      hidden: false
    });
    that.setData({
      datalist: [
        {
          'name': '中轻大厦-A座',
          'address': '北京市朝阳区望京东路1号院'
        }, {
          'name': '望京新城-415号楼',
          'address': '北京市朝阳区'
        }, {
          'name': '娜丽莎大厦',
          'address': '北京市朝阳区广顺南大街1号'
        }, {
          'name': '宝星华庭-6号楼',
          'address': '北京市望京阜通西大街'
        }, {
          'name': '合生麒麟社-6号楼',
          'address': '北京市朝阳区阜通西大街8号'
        }, {
          'name': '望京国际商业中心-E座',
          'address': '望京街9号'
        }, {
          'name': '方恒时代中心A座',
          'address': '北京市朝阳区望京街10号院3'
        }, {
          'name': '中轻大厦-B座',
          'address': '朝阳区望京科技园启阳路4号'
        }, {
          'name': '麒麟社7号楼',
          'address': '北京市望京阜安西路11号'
        }, {
          'name': '410楼C座',
          'address': '北京市朝阳区望京西园四区'
        }, {
          'name': '望京SOHO中心t2B座',
          'address': '北京市朝阳区阜安西路望京SOHO中心T2'
        }, {
          'name': '绿地中心-C座',
          'address': '望京东园四区9号楼阿里中心.望京A座'
        }, {
          'name': '望京国际商业中心-A座',
          'address': '望京街9号'
        }, {
          'name': '宝星国际-二期-107号楼',
          'address': '北京市朝阳区望京东园107号'
        }, {
          'name': '远洋·万和公馆4号楼',
          'address': '北京市朝阳区阜通东大街保利万和电影院向北100米远洋·万和公馆(悠乐汇E座)1515'
        }, {
          'name': '望京西园-一区-118号楼',
          'address': '北京市朝阳区望京西园118号'
        }, {
          'name': '宝星国际-二期-108号楼',
          'address': '北京市朝阳区望京东园108号'
        }, {
          'name': '望京西园三区-314号楼',
          'address': '北京市朝阳区阜通西大街'
        }, {
          'name': '华鼎世家-301号楼',
          'address': '北京市朝阳区望京园301号'
        }, {
          'name': '望京西园-417号楼',
          'address': '北京市朝阳区望京西园417号'
        }, {
          'name': '望京园401号楼',
          'address': '北京市朝阳区阜安西路'
        }, {
          'name': '华鼎世家-301号楼',
          'address': '北京市朝阳区望京园301号'
        }, {
          'name': '望京西园-417号楼',
          'address': '北京市朝阳区望京西园417号'
        }, {
          'name': '望京园401号楼',
          'address': '北京市朝阳区阜安西路'
        }, {
          'name': '首开国风上观-623号楼',
          'address': '北京市朝阳区望京东园623号'
        }, {
          'name': '望京西园-411号楼',
          'address': '北京市朝阳区望京西园411号'
        }, {
          'name': '宝星国际-二期-110号楼',
          'address': '北京市朝阳区望京东园110号'
        }, {
          'name': '首开国风上观-621号楼',
          'address': '北京市朝阳区首开国风上观621号楼'
        }, {
          'name': '望京西园三区-328号楼',
          'address': '北京市朝阳区望京西园328号'
        }, {
          'name': '望京东园515号楼',
          'address': '北京市朝阳区望京东园515号'
        }, {
          'name': '融科橄榄城-10号楼',
          'address': '北京市朝阳区融科橄榄城10号楼'
        }, {
          'name': '望京东园-514号楼',
          'address': '北京市朝阳区望京东园514号'
        }, {
          'name': '融科橄榄城一期-503号楼',
          'address': '北京市朝阳区融科橄榄城一期望京东园503号楼'
        }, {
          'name': '宝星华庭-110号楼',
          'address': '北京市朝阳区'
        }, {
          'name': '望京西园-103号楼',
          'address': '北京市朝阳区望京西园103号'
        }, {
          'name': '望京西园315号楼',
          'address': '北京市朝阳区望京西园315号'
        }, {
          'name': '望京西园-一区-123号楼',
          'address': '北京市朝阳区望京西园123号'
        }, {
          'name': '宝星国际-二期-107号楼',
          'address': '北京市朝阳区望京东园107号'
        }, {
          'name': '远洋·万和公馆4号楼',
          'address': '北京市朝阳区阜通东大街保利万和电影院'
        }, {
          'name': '望京西园-一区-118号楼',
          'address': '北京市朝阳区望京西园118号'
        }, {
          'name': '宝星国际-二期-108号楼',
          'address': '北京市朝阳区望京东园108号'
        }, {
          'name': '望京西园三区-314号楼',
          'address': '北京市朝阳区阜通西大街'
        }, {
          'name': '华鼎世家-301号楼',
          'address': '北京市朝阳区望京园301号'
        }, {
          'name': '望京西园-417号楼',
          'address': '北京市朝阳区望京西园417号'
        }, {
          'name': '望京园401号楼',
          'address': '北京市朝阳区阜安西路'
        }, {
          'name': '华鼎世家-301号楼',
          'address': '北京市朝阳区望京园301号'
        }, {
          'name': '望京西园-417号楼',
          'address': '北京市朝阳区望京西园417号'
        }, {
          'name': '望京园401号楼',
          'address': '北京市朝阳区阜安西路'
        }
      ]
    });
  },
  onReady: function () {
    // 页面渲染完成
    var that = this;
    // 数据加载完成后 延迟隐藏loading
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 500);
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})