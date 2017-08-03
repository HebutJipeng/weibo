<template lang="pug">
	footer {{aaa}}
		<!-- ul
			li(v-for="(tab, index) in tablist" :class="{ active: tab == isActive }")
				nuxt-link(to="/{ tab }") tab -->
			<!-- li
				nuxt-link(to="/weibo") Weibo
			li 3
			li 4
			li 5 -->
		<!-- } -->
</template>

<script>
export default {
	data() {
		return {
			aaa: 1,
			tablist: ['Home', 'Weibo', '3', '4', '5']
		}
	}
}
</script>

<style lang="scss">
footer {
	position: fixed;
    bottom: 0;
    left: 0;
	padding: 0;
    width: 100%;
	background: #F6F6F6;
	opacity: .8;
	box-shadow: 0 -1px 5px 0px #ddd;
	border: none;
	ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
    	align-items: center;
		li {
			height: 40px;
			line-height: 40px;
		}
	}	
}
</style>