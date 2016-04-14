<template lang="jade">
  li(v-for="titleItem of title",:class="{'on': titleItem === selected}")
    a(href="javascript:;",@click="handleTitleChange(titleItem)") {{ titleItem }}
</template>

<script>
	export default {
		name: 'Title',
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