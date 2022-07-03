<script setup lang="ts">
  import Header from '/@/components/Header/index.vue';
  console.log('created');
  onMounted(() => {
    console.log('mounted');
  });
</script>
<template>
  <div class="dark:text-slate-400 dark:bg-slate-900 min-h-screen">
    <Header></Header>
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1
          class="relative mt-12 mb-4 text-xl tracking-tight font-blimone sm:text-2xl lg:text-3xl text-slate-900 dark:text-slate-200 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20"
        >
          <span class="border-b-2 border-b-cyan-500">角色</span>
        </h1>
      </div>
    </main>
  </div>
</template>
<style lang="less" scoped></style>
