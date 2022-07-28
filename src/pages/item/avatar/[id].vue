<script setup lang="ts">
  import avatarData from '/@/assets/Snap.Metadata/Output/Avatar.json';
  const route = useRoute();
  // const instance = getCurrentInstance();
  // console.log(instance);
  const target = avatarData.find((avatar) => avatar.Id == parseInt(route.params.id as string));
  console.log(target);
</script>
<template>
  <div>
    <div> {{ JSON.stringify(target) }} </div>
  </div>
</template>
<style lang="less" scoped></style>
