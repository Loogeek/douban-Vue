<template lang="jade">
  div.thumbnail(v-for="item of data.musics" track-by="_id")
    a(href="/music/{{item._id}}" target="_blank")
      img(:src="item.image" alt="item.title")
    div.caption
      h5
        a(href="/music/{{item._id}}" target="_blank") {{item.title}}
      a(href="/music/{{item._id}}" target="_blank")
      p {{item.singer}}
</template>

<script>
	export default {
		name: 'AlbumItem',
		props: {
			data: Object
		}
	}
</script>

<style lang="sass">
/* 新碟榜样式 */
.new-albums {
  .caption {
    h5 {
      a {
        color: #138A64;
      }
      a:hover {
        background-color: #138A64;
        color: #fff;
        text-decoration: none;
      }
    }
    p{
      font-size: 12px;
      color: #999;
    }
    div{
      font-size: 12px;
      height: 100px;
      overflow: hidden;
    }
  }
}
</style>
