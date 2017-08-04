<template lang="pug">
	footer
		ul
			li(v-for="(list, index) in tablist", :key="index")
				nuxt-link(:to="{ path: list.link }") {{ list.title }}
				<!-- nuxt-link(:to="list.link") {{ list.title }}	 -->
		
</template>

<script>
export default {
	data() {
		return {
			aaa: 1,
			tablist: [
			{ 
				title: 'index',
				link: '/'
			},
			{ 
				title: 'weibo',
				link: 'weibo'
			},
			{ 
				title: '0',
				link: '0'
			},
			{ 
				title: '1',
				link: '1'
			},
			{ 
				title: '2',
				link: '2'
			}]
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
	z-index: 100;
	ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
    	align-items: center;
		li {
			height: 40px;
			line-height: 40px;
			.nuxt-link-exact-active {
				color: #666;
			}
			&:focus {
				color: red;
			}
		}
	}	
}
</style>