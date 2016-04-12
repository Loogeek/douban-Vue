<template lang="jade">
  ul
    li(v-for="item of data.musics")
      a(href="/music/{{item_id}}" target="_blank")
        img(:src="item.image")
        h5 {{item.title}}
        p {{item.singer}}&nbsp;/&nbsp;{{item.pv}}次播放
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
