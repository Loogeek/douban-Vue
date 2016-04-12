"use strict";
$.support.cors = true;                                  // 解决IE8/9 Ajax跨域请求问题

import Vue from 'vue';
import NewAlbums from './NewAlbums';
import ArtistSongs from './ArtistSongs';
import HotProgrammes from './HotProgrammes';

// 
new Vue({
  el: '#newAlbums',
  components: { 
    NewAlbums
  }
});

new Vue({
  el: '#hotArtistSongs',
  components: { 
    ArtistSongs
  }
});

new Vue({
  el: '#hotProgrammes',
  components: { 
    HotProgrammes
  }
});

$(function() {
  // 音乐主页函数
  var musicIndexFun = (function() {
    var oCol6_width = $('.col-md-6').width();           //获取主页左边区域布局对象
    /*
      顶部轮播图区 #galleryFrames
    */
    var galleryFrames = (function(){
      var page = 1,                                          // 页码变量
          $oLeft = $('#galleryFrames .slide-prev'),          // 向左箭头
          $oRight = $('#galleryFrames .slide-next'),         // 向右箭头
          $oUl = $('#galleryFrames .gallery-hot ul'),        // 获取轮播图列表对象
          len = $('#galleryFrames .slide-content li').length,// 总共热门推荐轮播图数量
          $oDots = $('#galleryFrames .slide-dots');          // 获取轮播图滑动点列表对象

      $oUl.width(oCol6_width * len);                         //设置热门推荐区轮播图片的总宽度
      $('#galleryFrames img').width(oCol6_width);            // 设置每张轮播图片li的宽度
      // 设置轮播图显示第一张图片，偏移量为一张附属图宽度
      $oUl.css('left', - oCol6_width);

      // 向右切换
      $oRight.on('click',function() {
        galleryMov('right');
      });
      // 向左切换
      $oLeft.on('click',function() {
        galleryMov('left');
      });
      // 轮播图滑动点对象点击事件
      $oDots.on('click','li',function(){
        $(this).addClass('slide-active').siblings().removeClass('slide-active');
        var pageDiff =  $(this).text() - page;                 // 获取需要滚动的页数
        page = $(this).text();                                 // 将当前点击也赋值给page变量
        $oUl.animate({left:'-='+oCol6_width * pageDiff},300);  // 滚动到当前点击页
      });
      // 定时器，每5秒钟向右切换一张图片
      var timer = setInterval(function() {
        galleryMov('right');
      },5000);
      // 当鼠标移入轮播图时图片停止滚动，鼠标移开重新开始移动
      $('#galleryFrames').on('mouseover',function() {
        clearTimeout(timer);
      }).on('mouseout',function() {
        timer = setInterval(function() {
          galleryMov('right');
        },5000);
      });
      // 轮播滚动函数，对作用方向进行不同移动
      var galleryMov = function(direction) {
        if(!$oUl.is(':animated')){
          if(direction === 'right'){
            page++;
            $oUl.animate({left:'-=' + oCol6_width},400);
            if(page === len - 1) {
              page = 1;
              $oUl.animate({left: - oCol6_width},0);
            }
          }else{
            page--;
            $oUl.animate({left:'+=' + oCol6_width},400);
            if(page === 0) {
              page = len - 2;
              $oUl.animate({left: - (oCol6_width*(len-2))},0);
            }
          }
          // 切换圆点导航样式
          $oDots.find('li:eq('+(page-1)+')').addClass('slide-active').siblings().removeClass('slide-active');
        }
      };
    })();

    /*
      编辑推荐区事件
    */
    var editorFeatured = (function(){
      var $oEditorScreen = $('#editorFeatured .screen-body'),  //获取编辑推荐区对象
          page = 1,                                            //初始页码
          $oLeft = $('#editorFeatured .slide-prev'),           //获取左按钮
          $oRight = $('#editorFeatured .slide-next'),          //获取右按钮
          oThumbnail = $('#editorFeatured .thumbnail'),        //获取音乐数量
          len = oThumbnail.length,                             //即将编辑推荐区音乐总数
          pageCount = Math.ceil(len / 4),                      //即将编辑推荐区总页数
          // 每张海报的外边距及实际赋给每张海报内容宽度
          marginWidth = oThumbnail.outerWidth(true) - oThumbnail.outerWidth(),
          oThumbnailWidth =  (oCol6_width - marginWidth * 4) / 4;

      // 设置每张海报的宽度
      oThumbnail.outerWidth(oThumbnailWidth);
      // 设置编辑推荐区总宽度
      $oEditorScreen.width(oCol6_width * pageCount);
      // 设置编辑推荐区总页数
      $('#editorFeatured .ui-side-max').html(pageCount);

      // 点击编辑推荐区右箭头
      $oRight.on('click',function() {
        funMoving('right');
      });

      // 点击编辑推荐区左箭头
      $oLeft.on('click',function() {
        funMoving('left');
      });
      // 定时器，编辑推荐区每隔5s向右滚动一次
      var timer = setInterval(function() {
        funMoving('right');
      },5000);
      // 当鼠标划入编辑推荐区时动画停止，移开时重新开始运动
      $('#editorFeatured').on('mouseover',function() {
        clearInterval(timer);
      }).on('mouseout',function() {
        timer = setInterval(function() {
          funMoving('right');
        },5000);
      });

      // 编辑推荐区滚动函数
      function funMoving(direction) {
        // 获取整个编辑推荐区域宽度
        var pageWidth = (pageCount - 1) * oCol6_width;
        // 设置编辑推荐区当前页码
        var $editorIndex = $('#editorFeatured .ui-side-index');
        // 判断是否已在运动，防止动画叠加
        if(!$oEditorScreen.is(':animated')) {
          //向右移动
          if(direction === 'right') {
            if(page === pageCount) {
              page = 1;
              // 设置显示当前音乐页码
              $editorIndex.html(page);
              $oEditorScreen.animate({left:0},400);
            }else {
              page++;
              $editorIndex.html(page);                    // 设置显示当前音乐页码
              $oEditorScreen.animate({left:'-='+oCol6_width},400);
            }
          // 向左移动
          }else {
            if(page === 1){
              page = pageCount;
              $editorIndex.html(page);
              $oEditorScreen.animate({left:'-='+pageWidth},400);
            }else {
              page--;
              $editorIndex.html(page);
              $oEditorScreen.animate({left:'+='+oCol6_width},400);
            }
          }
        }
      }
    })();
  })();
});
