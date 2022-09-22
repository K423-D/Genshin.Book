<script setup lang="ts">
  import weaponData from '/@/assets/Snap.Metadata/Output/Weapon.json';
  const route = useRoute();
  // const instance = getCurrentInstance();
  // console.log(instance);
  const target = weaponData.find((weapon) => weapon.Id == parseInt(route.params.id as string));
  console.log(target);
</script>
<template>
  <div>
    <div> {{ JSON.stringify(target) }} </div>
  </div>
</template>
<style lang="less" scoped></style>
