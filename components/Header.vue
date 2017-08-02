<template lang="pug">
	header
		.camera
			i.fa.fa-camera.fa-fw
		.menu-list
			ul
				li 关注 
					i.fa.fa-caret-down
				li 热门
		.search
			i.fa.fa-search.fa-fw
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
	background: #F6F6F6;
	box-shadow: 0 1px 5px 0px #ddd;
	.camera {
		display: block;
		i {
			font-size: 16px;
		}
	}
	.search {
		display: block;
		i {
			font-size: 16px;
		}
	}
	.menu-list {
		ul {
			display: flex;
			list-style: none;
			li {
				padding: 0 10px;
				line-height: 20px;
			}
		}
	}
}
</style>