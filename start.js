
var imageUtil = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    imageSrc: 'data:image/png;base64,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'
  },
  radioChange: function (e) {
    //保存报警规则到当前页面的数据
    if (e.detail.value != "") {
      this.setData({
        rule: e.detail.value
      })
    }
    console.log(this.data.rule)
  },
  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505364564/datapoints?datastream_id=Light,Temperature,Humidity&limit=10',
      header: {
        'content-type': 'application/json',
        'api-key': 'wEXMMAGW=JhqA3aIERMSfhnCb7c='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        var light
        app.globalData.temperature = res.data.data.datastreams[1]
        console.log(app.globalData)
        light = app.globalData.temperature.datapoints[1].value
        if (light > 300) {
          wx.showModal({
            title: '警告！',
            content: '没关灯哦',
            success: function (res) {
              if (res.confirm) {
                console.log('去关灯吧')
              } else if (res.cancel) {
                console.log('数据请求发生错误了')
              }
            }
          });
        }
        else {
          wx.showModal({
            title: '报告',
            content: '灯关着呢❤',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        }
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  getDataFromOneNet2: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/505364564/datapoints?datastream_id=Light,Temperature,Humidity&limit=10',
      header: {
        'content-type': 'application/json',
        'api-key': 'wEXMMAGW=JhqA3aIERMSfhnCb7c='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        var light
        app.globalData.temperature = res.data.data.datastreams[1]
        console.log(app.globalData)
        light = app.globalData.temperature.datapoints[1].value
        if (light > 300) {
          wx.showModal({
            title: '警告！',
            content: '没关门哦',
            success: function (res) {
              if (res.confirm) {
                console.log('去关门吧')
              } else if (res.cancel) {
                console.log('数据请求发生错误了')
              }
            }
          });
        }
        else {
          wx.showModal({
            title: '报告',
            content: '门关着呢❤',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          });
        }
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  change: function (e) {
    //当有输入时激活发送按钮，无输入则禁用按钮
    if (e.detail.value != "") {
      this.setData({
        threshold: e.detail.value,
        opacity: 1,
        disabled: false,
      })
    } else {
      this.setData({
        threshold: 0,
        opacity: 0.4,
        disabled: true,
      })
    }
  },
})


