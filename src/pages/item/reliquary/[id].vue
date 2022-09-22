<script setup lang="ts">
  import reliquarySet from '/@/assets/Snap.Metadata/Output/ReliquarySet.json';
  import reliquaryData from '/@/assets/Snap.Metadata/Output/Reliquary.json';
  const route = useRoute();
  // const instance = getCurrentInstance();
  // console.log(instance);
  const target = reliquarySet.find(
    (reliquary) => reliquary.SetId == parseInt(`${route.params.id}`.substring(1, 6)),
  );
  const target2 = reliquaryData.find(
    (reliquary) => reliquary.SetId == parseInt(`${route.params.id}`.substring(1, 6)),
  );
  console.log(target, target2);
</script>
<template>
  <div>
    <div> {{ JSON.stringify(target) }} </div>
    <div> {{ JSON.stringify(target2) }} </div>
  </div>
</template>
<style lang="less" scoped></style>
