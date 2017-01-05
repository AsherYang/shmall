//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    windowHeight: 0,
    windowWidth: 0,

    imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    navList: [
      { id: 1, name: '辣条' },
      { id: 2, name: "方便面" },
      { id: 3, name: "啤酒" },
      { id: 4, name: "巧克力" },
      { id: 5, name: "香烟" },
      { id: 1, name: '辣条' },
      { id: 2, name: "方便面" },
      { id: 3, name: "啤酒" },
      { id: 4, name: "巧克力" },
      { id: 5, name: "香烟" },
    ],
    
    goodsList: [
      { id: 1, name: '1111' },
      { id: 2, name: "2222" },
      { id: 3, name: "3333" },
      { id: 4, name: "4444" },
      { id: 5, name: "5555" },
      { id: 1, name: '6666' },
      { id: 2, name: "7777" },
      { id: 3, name: "8888" },
      { id: 4, name: "9999" },
      { id: 5, name: "0000" },
      { id: 1, name: '0101' },
      { id: 2, name: "0202" },
      { id: 3, name: "0303" },
      { id: 4, name: "0404" },
      { id: 5, name: "0505" },
      { id: 1, name: '0606' },
      { id: 2, name: "0707" },
      { id: 3, name: "0808" },
      { id: 4, name: "0909" },
    ],

    curNav: 1,
    curIndex: 0,

  },

  // 界面显示后，计算实际屏幕的宽高
  onShow: function (e) {
    self = this;
    wx.getSystemInfo({
      success: function (res) {
        // success
        self.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
        })
      }
    })
  },

  // 选择导航条目
  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    console.log("id = " + event.target.dataset.id + " , index = " + event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    });
  },

  // 上拉加载更多
  onLoadMore: function() {
    console.log("---- onLoadMore----");
    // 显示导航条加载动画
    wx.showNavigationBarLoading();
    // 隐藏导航条加载动画
    // wx.hideNavigationBarLoading();
  }

})
