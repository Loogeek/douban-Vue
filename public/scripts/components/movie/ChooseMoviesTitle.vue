<template lang="jade">
  li(v-for="titleItem of title")
    button(@click="handleTitleChange(titleItem)",
    	     :class="titleItem === selected ? 'btn btn-primary' : 'btn btn-default'")
      | {{ titleItem }}
</template>

<script>
	export default {
		name: 'ChooseMoviesTitle',
		props: {
			title: Array,
			selected: String
		},
		methods: {
			handleTitleChange(titleName) {
				if(titleName !== this.selected) {
					this.selected = titleName;
				}
			}
		}
	}
</script>

<style lang="sass">
.class-top{
	li{
		display: inline;
	}
}
</style>