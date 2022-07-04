<template>
  <div
    class="cursor-pointer flex flex-col items-center justify-between shadow-xl rounded-lg transition-all transform hover:-translate-y-1"
  >
    <!-- 图片 -->
    <div
      class="w-16 h-16 rounded-t-lg md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24"
      :class="`bg-${props.star}-star`"
    >
      <img :src="props.url" loading="lazy" />
    </div>
    <!-- 名称 -->
    <div
      class="dark:bg-white px-1 w-16 text-center rounded-b-lg text-black text-xs md:text-sm lg:text-sm xl:text-sm md:w-24 lg:w-24 xl:w-24 truncate"
      >{{ props.name }}</div
    >
  </div>
</template>
<script setup name="ItemBox" lang="ts">
  // const { proxy } = getCurrentInstance()
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      default: 0,
    },
  });
</script>

<style lang="less" scoped></style>
