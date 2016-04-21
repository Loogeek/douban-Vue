<template lang="jade">
  ul
    li(v-for="item of data.musics" track-by="_id")
      a(href="/music/{{ item._id }}" target="_blank")
        img(:src="item.image")
        h5 {{ item.title }}
        p {{ item.singer }}&nbsp;/&nbsp;{{ item.pv }}次播放
        span.order {{ $index + 1}}
</template>

<script>
	export default {
		name: 'SongItem',
		props: {
			data: Object
		}
	}
</script>

<style lang="sass">
.hotArtist-songs {
  ul {
    list-style: none;
    padding:0;
    li {
      position: relative;
      padding-left: 60px;
      height:60px;
      line-height: 60px;
      img{
        width:48px;
        height:48px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top:6px;
        left: 2px;
      }
      h5{
        padding:12px 40px 8px 0;
        margin:0;
      }
      p{
        font-size: 12px;
        color:#999;
        line-height: 12px;
      }
      span{
        position: absolute;
        right: 10px;
        top:0;
        font-size: 34px;
        color:#E6E6E6;
      }
      &:hover{
        background-color:#eee;
        cursor:pointer;
      }
      a:hover{text-decoration: none;}
    }
  }
}
</style>
