<template lang="jade">
  div.thumbnail(v-for="item of data")
    div.inner
      h5
        a(href="/music/results?cat={{ item._id }}&p=0" target="_blank") {{ item.name }}
      .content      
        img(:src="item.musics[0] ? item.musics[0].image : '' ",
            :alt="item.musics[0] ? item.musics[0].title : '' ",
            v-if="item.musics[0]")
        hot-pro-music-item(:datamusic="item.musics")
</template>

<script>
  import HotProMusicItem from './HotProMusicItem';

	export default {
		name: 'HotProgrammeItem',
		props: {
			data: Array
		},
    components: {
      HotProMusicItem
    }
	}
</script>

<style lang="sass" scoped>
#hotProgrammes{
  .thumbnail{
    position: relative;
    width:50%;
    height:auto;
    padding:0 10px 0 0;
  }
  .inner{
    background-color:#fff;
    border:1px solid #eee;
    padding:16px 13px 16px 63px;
    font-size: 12px;
    color:#666;
    line-height:18px;
    h5{
      margin-top:0;
      a {
        color: #138A64;
      }
      a:hover {
        background-color: #138A64;
        color: #fff;
        text-decoration: none;
      }
    }
    img{
      width:40px;
      height:40px;
      position:absolute;
      top:16px;
      left:14px;
    }
  }
} 
</style>