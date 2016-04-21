<template lang="jade">
  div.screen
    div.class-top
      span.active 选电影
      i &nbsp;/&nbsp;
      span 选电视剧
      hr
      ul
        choose-movies-title(:title="title",:selected.sync="selected")
      hr
      div.screen-body
        div.panel.panel-default
          #classBody.panel-body.screen-body
            choose-movie-item(:data="currentData")
          a.more(href="javascript:;" role="button") 加载更多
</template>

<script>
	import ChooseMoviesTitle from './ChooseMoviesTitle'; // 标题组件
	import ChooseMovieItem from './ChooseMovieItem';		 // 展示组件

	export default {
		name: 'ChooseMovies',
		components: {
			ChooseMoviesTitle,
			ChooseMovieItem
		},
		data() {
			return {
				title: ['热门','最新','经典','豆瓣高分','冷门佳片','华语','欧美','韩国'],	// 标题列表
				selected: '热门',													// 当前选择标题
				dataList: [],															// 存储Ajax返回的数据
				currentData: {}														// 当前标题显示数据
			}
		},
		created() {																		// 实例创建之后调用getData方法请求该标题对应的数据
			this.getData(this.selected);
		},
		watch: {																			// 监听selected属性，属性发生变化执行getData方法
			selected: 'getData'													// 该属性是双向绑定，当子组件中改变该属性会触发getData方法
		},
		methods: {
			getData(value) {
				// 在dataList中查找该value值是否存在，若存在则说明该数据已请求过，无需再次发送get请求
				for(let item of this.dataList) {
          if(item.name.includes(value)) {
            this.currentData = item;
            return;
          }				
				}
				// dataList中没有该标题数据 发送新请求到服务器
				let url = '/?fliterName=' + encodeURIComponent(value + '电影');
				$.get(url, (results) => {
					this.currentData = results.data;				 // 该属性值变化会让榜单该属性的子组件重新渲染
					this.dataList.push(results.data);				 // 添加到dataList中以便再次请求时进行判断
				});
			}
		}
	};
</script>

<style lang="sass">
/* 选电影区样式 */
.fliter-movies{
	.class-top{
		ul{
			list-style: none;
			padding: 0;
		}
	}
	.more{
		display: block;
		width: 100%;
		height: 34px;
		line-height: 34px;
		text-align: center;
		font-size: 14px;
		background-color: #f7f7f7;
	}
	.more:hover{
		text-decoration: none;
		background-color: #eee;
	}
	.more:link{
		text-decoration: none;
		color: #37a;
	}
	.more:active{
		text-decoration: none;
		color: #666699;
	}
}
</style>
