<template lang="jade">
  div.thumbnail(v-for="item of data.musics")
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
