<template>
	<div>
		<my-header></my-header>
		<nuxt/>
		<my-footer></my-footer>
	</div>
</template>

<script type="text/javascript">
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/WFooter.vue'

export default {
	components: {
		MyFooter,
		MyHeader
	}
}
</script>