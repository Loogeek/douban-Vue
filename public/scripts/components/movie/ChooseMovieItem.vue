<template lang="jade">
  div.col-md-3.col-xs-4(v-for="item of data.movies" track-by="_id")
    div.thumbnail
      a(href="/movie/{{ item._id }}" target="_blank")
        img(:src="item.poster",:alt="item.title")
      div.caption
        h5 {{ item.title }}
</template>

<script>
	export default {
		name: 'ChooseMovieItem',
		props: {
			data: Object
		}
	}
</script>
