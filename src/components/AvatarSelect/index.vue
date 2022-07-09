<script setup name="AvatarSelect" lang="ts">
  // const { proxy } = getCurrentInstance()
  import ItemBox from '../ItemBox/index.vue';
  import { Item } from '/@/store/modules/genshinItem/types';

  const dialogVisible = ref(false);
  defineProps({
    avatar: {
      // required: true,
      type: Object,
    },
    avatars: {
      required: true,
      type: Array<Item>,
    },
  });
  const onSelected = (avatar: Item) => {
    dialogVisible.value = false;
    emit('selected', avatar);
  };
  const emit = defineEmits<{ (event: 'selected', id: Item | undefined): void }>();
  const showDialog = () => {
    dialogVisible.value = !dialogVisible.value;
  };
  const isMobile = computed(() => {
    const screenWidth = document.body.clientWidth;
    console.log(screenWidth);
    return screenWidth < 600;
  });
  const handleClose = (done: () => void) => {
    emit('selected', undefined);
    done();
  };
</script>
<template>
  <div class="flex justify-center items-center">
    <div v-if="avatar?.name">
      <ItemBox
        class="max-w-fit"
        :name="avatar.name || ''"
        :url="avatar.url || ''"
        :star="avatar.star || ''"
        @click="showDialog"
      />
    </div>
    <div v-else>
      <ItemBox
        :name="'未选择角色'"
        :url="'https://img-static.mihoyo.com/communityweb/upload/1672ccf689e9977a149f12fd8d1e5f1e.png'"
        :star="1"
        @click="showDialog"
      />
    </div>
    <div>
      <el-dialog
        v-model="dialogVisible"
        title="选择角色"
        destroy-on-close
        append-to-body
        :width="isMobile ? '90%' : '50%'"
        :before-close="handleClose"
      >
        <ul class="flex flex-wrap items-center justify-center py-0 px-0">
          <li
            v-for="(item, index) in avatars"
            :key="index * 1.1"
            @click="onSelected(item)"
            class="px-3 pt-4 md:pt-0 lg:pt-0 md:px-4 sm:pt-5 md:pb-8"
          >
            <ItemBox :name="item.name" :url="item.url" :star="item.star" />
          </li>
        </ul> </el-dialog
    ></div>
  </div>
</template>

<style lang="less" scoped></style>
