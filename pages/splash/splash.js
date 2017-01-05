// 获取imageUtil实例
var imageUtil = require('../../utils/util.js'); 
var app = getApp()
Page({
    data: {
        splashImg: "/images/splash/splash.png",
        imagewidth: 0,
        imageheight: 0,
    },

    onLoad: function() {
        console.log("---- onLoad ----")
    },

    onShow:function(){
        console.log("---- onshow ----")
        setTimeout(function() {
            wx.redirectTo({
            url: '../index/index',
        })
        }, 2000)
    },


    // 图片加载
    imgLoad: function(e) {
        var imageSize = imageUtil.imageUtil(e);
        this.setData({
            imagewidth: imageSize.imageWidth,              imageheight: imageSize.imageHeight
        });
    },

})