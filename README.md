使用NodeJs+MongoDB+Vue+ES6+jQuey+Webpack模仿豆瓣音乐电影搭建的网站
================================================

简介:
---------------
该项目基于<a href="https://github.com/Loogeek/douban_Website" target="\_blank"> douban_Website</a>项目,尝试使用了Vue.js替换了原网页中部分用jQuery操作DOM的JS脚本，并使用Webpack实现简单的资源模块管理，并尝试了使用ES6完成Vue组件的编写，具体项目功能与<a href="https://github.com/Loogeek/douban_Website" target="\_blank"> douban_Website</a>中介绍无太多变化，可参考其Readme。

项目整体效果
-------
<div>
  <img src="http://7xrqxi.com1.z0.glb.clouddn.com/doubanMovie.png" width="45%" float"left" height="700" alt="电影首页"/>
  <img src="http://7xrqxi.com1.z0.glb.clouddn.com/doubanMusic.png" width="45%" float"left" height="700" alt="音乐首页"/>
</div>
<div text-align="center">
  <img src="http://7xrqxi.com1.z0.glb.clouddn.com/doubanDetail.png" width="45%" alt="电影详情"/>
</div>

动态效果演示
-------
[动态效果演示](http://7xrqxi.com1.z0.glb.clouddn.com/douban1.gif)

注意
-------
修改public/components 目录下的组件代码时要运行**webpack -w** 命令对文件进行重新编译。

项目结构:
----
```
├── app.js            项目入口文件
├── app               Node后端MVC文件目录
│   ├── controllers   控制器目录
│   │   ├── movie     电影页面控制器目录
│   │   ├── music     音乐页面控制器目录
│   │   └── user      用户列表控制器目录
│   ├── models        模型目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── schemas       模式目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   └── views         视图文件目录
│       ├── includes
│       └── pages
├── doubanDatabase    供参考的数据库数据
│   └── douban
├── node_modules      node模块目录
├── public            静态文件目录
│   ├── images        图片目录
│   │   ├── includes  公共图片目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── libs          经过gulp处理后文件所在目录
│   │   ├── css
│   │   ├── images
│   │   └── scripts
│   ├── sass          样式目录
│   │   ├── include
│   │   ├── movie
│   │   └── music
│   ├── scripts       JS脚本目录
│   │   ├── components Vue组件目录
│   │   └── js
│   └── upload        用户自定义上传图片存储目录
│       ├── movie
│       └── music
├── route             路由目录
│   └── router.js
├── test              测试文件目录
│   └── user
│       └── user.js
├── README.md
├── gulpfile.js       gulp文件
├── package.json
└── webpack.config.js
```

后期完善:
-------
1. 部分功能还有待完善;
2. 部分功能还是基于jQuery对DOM的操作来完成，后期会尝试将全部功能都使用Vue.js进行改进重写。
