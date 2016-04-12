<template lang="jade">
  a(v-for="item of datamusic",href="/music/{{ item._id }}",title="{{item.title}}",target="_blank")
    p {{ $index + 1 }}.{{ item.title }}
  span(v-if="datamusic.length > 2") ...
</template>

<script>
	export default {
		name: 'HotProMusicItem',
		props: {
			datamusic: Array
		}
	}
</script>