<template>
  <router-view />
</template>
<script setup lang="ts">
  // provide('reload', reload)
  // function reload() {
  //   isRouterAlive.value = false
  //   nextTick(() => (isRouterAlive.value = true))
  // }

  // 默认黑暗模式
  localStorage.setItem('vueuse-color-scheme', 'dark');

  // const isRouterAlive = ref(true)

  // watch(
  //   () => appStore.title,
  //   () => {
  //     const title: string = appStore.title
  //     document.title = title
  //       ? `${title} - ${import.meta.env.VITE_APP_TITLE}`
  //       : import.meta.env.VITE_APP_TITLE
  //   },
  //   {
  //     immediate: true,
  //   }
  // )
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--color-bg-1);
  }
</style>
