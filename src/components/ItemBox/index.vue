<template>
  <div class="flex flex-col items-center justify-between">
    <!-- 图片 -->
    <div :class="itemBgColors[props.star]">
      <img :src="props.url" />
    </div>
    <!-- 名称 -->
    <div>{{ props.name }}</div>
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
  const itemBgColors = reactive({
    0: 'bg-transparent',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });
</script>

<style lang="less" scoped></style>
