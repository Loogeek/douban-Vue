<template lang="jade">
  div.billboard
    div.billboard-hd
      h4 本周单曲榜
      button.play-button
        i.glyphicon.glyphicon-play
        span 播放全部
    div.billboard-bd.class-top
      ul.hot-artistTop
        title(:title="title",:selected.sync="selected")
      div.hotArtist-songs
        artist-song-item(:data="currentData")
</template>

<script>
	import Title from './Title';						 			 // 标题组件
	import ArtistSongItem from './ArtistSongItem'; // 展示组件

	export default {
		name: 'HotArtistSongs',
		components: {
			Title,
			ArtistSongItem
		},
		data() {
			return {
				title: ['最热','摇滚','民谣','流行','电子'],	// 标题列表
				selected: '最热',													// 当前选择标题
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
				let url = '/musicindex?hotSongs=' + encodeURIComponent('本周单曲榜' + value);
				$.get(url, (results) => {
					this.currentData = results.data;				 // 该属性值变化会让榜单该属性的子组件重新渲染
					this.dataList.push(results.data);				 // 添加到dataList中以便再次请求时进行判断
				});
			}
		}
	};
</script>

<style lang="sass">
/* 本周单曲榜样式  */
.play-button {
	float: right;
	color: #fff;
	background-color: #139D72;
	border:1px solid #138A64;
	font-size: 12px;
	border-radius: 3px;
	height: 25px;
	line-height: 25px;
	text-align: center;
	cursor: pointer;
	padding: 0 5px;
	&:hover {
		text-decoration: none;
		background-color: #13ba72;
		color:#fff;
	}
	span {padding-left: 5px;}
}
</style>
