<template lang="pug">
	header
		.camera
		.menu-list
			ul
				li 关注
				li 热门
		.search
			i.fa.fa-refresh.fa-spin
</template>

<style lang="scss">
header {
	position: fixed;
	top: 0;
	left: 0;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 40px;
	box-sizing: border-box;
	background: pink;
	.camera {
		display: block;
		width: 20px;
		height: 20px;
		background: red;
	}
	.search {
		display: block;
		width: 20px;
		height: 20px;
		background: yellow;
	}
	.menu-list {
		ul {
			display: flex;
			list-style: none;
			li {
				padding: 0 10px;
			}
		}
	}
}
</style>