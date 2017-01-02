//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   hideSwiper: false,
   imgUrls: [ 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
  indicatorDots: true,
  autoplay: false,
  interval: 5000,
  duration: 1000,

 navList: [
    {id:1, name:'辣条'},
    {id:2, name:"方便面"},
    {id:3, name:"啤酒"},
    {id:4, name:"巧克力"},
    {id:5, name:"香烟"}
  ],

  curNav:1,
  curIndex:0,

  },

  selectNav(event) {
      let id = event.target.dataset.id,
          index = parseInt(event.target.dataset.index);
          self = this;
      this.setData({
          curNav:id,
          curIndex:index
      })
  },


  handletouchmove(event) {
    console.log( + " ----- clientY = " + event.touches[0].clientY);
  
  },

})
