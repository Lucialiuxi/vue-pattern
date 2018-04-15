//引入模块
let express = require('express');
let app = express();
let cors = require('cors');
let axios = require('axios')

//设置静态资源的根路径
app.use(function(req,res,next){
    //请求的域名
    res.header('Access-Control-Allow-Origin','*');//允许所有域名访问
    //请求的HTTP方法
    res.header('Access-Control-Allow-Methods','GET,POST,DELETE');
    //访问头信息字段
    res.header('Access-Control-Allow-Headers','Content-Type');
    //是否允许发送Cookie
    res.header('Access-Control-Allow-Credential','true');

    next();
})

app.get('/shop/shop-list',(req,res)=>{
    //get请求响应数据
    res.send({
        "data": {
            "success": true,
            "list": [
              {
                "skuId": "2154000002",
                "title": "米家小白智能摄像机 白色",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              },
              {
                "skuId": "215400012",
                "title": "小米6 全网通版 4GB内存 亮蓝色",
                "image": "https://i1.mifile.cn/a1/pms_1510033696.15216628!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              },
              {
                "skuId": "215800013",
                "title": "小米7",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              }
            ]
          }
    })
})

app.get('/shop/recommend',(req,res)=>{
    //get请求响应数据
    res.send({
        "data": {
            "list": [
              {
                "skuId": "215400013",
                "title": "米家小白智能摄像机 白色",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              },
              {
                "skuId": "215400014",
                "title": "米家小白智能摄像机 白色",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              },
              {
                "skuId": "215400015",
                "title": "米家小白智能摄像机 白色",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              },
              {
                "skuId": "215400016",
                "title": "米家小白智能摄像机 白色",
                "image": "https://i1.mifile.cn/a1/pms_1468806372.46368911!80x80.jpg",
                "price": "399",
                "buyNumber": 3,
                "buylimit": 10
              }
            ]
          }
    })
})

app.listen(3333)



