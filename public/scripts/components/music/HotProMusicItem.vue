<template lang="jade">
  a(v-for="item of datamusic",href="/music/{{ item._id }}",title="{{item.title}}",target="_blank" track-by="_id")
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

<style lang="sass" scoped>
p {
  font-size: 12px;
  color:#666;
  line-height:18px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
</style>
