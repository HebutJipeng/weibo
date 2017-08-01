<template>
  <footer>
    Visit our website for more documentation : <a href="https://nuxtjs.org" target="_blank">nuxtjs.org</a><button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
  </footer>
</template>
