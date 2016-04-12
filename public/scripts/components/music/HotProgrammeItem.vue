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
