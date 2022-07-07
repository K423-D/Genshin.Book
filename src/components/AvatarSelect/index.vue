<script setup name="AvatarSelect" lang="ts">
  // const { proxy } = getCurrentInstance()
  import ItemBox from '../ItemBox/index.vue';

  const dialogVisible = ref(false);
  defineProps({
    avatar: {
      required: true,
      type: Object,
    },
    avatars: {
      // required: true,
      type: Array,
    },
  });
  const showDialog = () => {
    dialogVisible.value = !dialogVisible.value;
  };
  const isMobile = computed(() => {
    const screenWidth = document.body.clientWidth;
    console.log(screenWidth);
    return screenWidth < 600;
  });
  const handleClose = (done: () => void) => {
    done();
  };
</script>
<template>
  <div class="flex justify-center items-center">
    <ItemBox
      class="max-w-fit"
      :name="avatar.name"
      :url="avatar.url"
      :star="avatar.star"
      @click="showDialog"
    />
    <el-dialog
      v-model="dialogVisible"
      title="选择角色"
      :width="isMobile ? '80%' : '50%'"
      :before-close="handleClose"
    >
      <ul
        class="flex flex-wrap items-center justify-center py-0 md:py-6 lg:py-6 xl:py-6 2xl:py-6 sm:px-20 lg:px-36 xl:px-20"
      >
        <li
          v-for="(item, index) in avatars"
          :key="index * 1.1"
          class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8"
        >
          <ItemBox :name="item.name" :url="item.url" :star="item.star" />
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped></style>
