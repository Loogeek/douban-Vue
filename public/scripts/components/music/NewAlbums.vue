<template lang="jade">
  div.class-top.new-albums
    span 新碟榜
    ul
      title(:title="title",:selected.sync="selected")
    a.more(href="/music/results?cat={{currentData._id}}&p=0" target="_blank") 更多
    div.screen
      div.panel-body.screen-body
        new-album-item(:data="currentData")
</template>

<script>
	import Title from './Title';						 			 // 标题组件
	import NewAlbumItem from './NewAlbumItem';		 // 展示组件

	export default {
		name: 'NewAlbums',
		components: {
			Title,
			NewAlbumItem
		},
		data() {
			return {
				title: ['最热','华语','欧美','日韩','单曲'],	// 标题列表
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
				let url = '/musicindex?albumName=' + encodeURIComponent('新碟榜' + value);
				$.get(url, (results) => {
					this.currentData = results.data;				 // 该属性值变化会让榜单该属性的子组件重新渲染
					this.dataList.push(results.data);				 // 添加到dataList中以便再次请求时进行判断
				});
			}
		}
	};
</script>
