<template>
  <!-- <a-layout-footer class="footer bottom-0 w-full">
    <SvgIcon name="svg-github" size="24" style="margin-right: 10px" />
    <router-link to="/"></router-link>
  </a-layout-footer> -->
  <footer class="footer bottom-0 w-full">
    <div class="text-sm">Email：i@k423.info</div>

    <el-tooltip
      placement="top"
      content="页面显示异常时，使用右上角的强制刷新按钮，一般情况可以解决。"
    >
      <ChatLineRound class="w-4 h-4 relative -top-1.5" />
    </el-tooltip>
  </footer>
</template>

<script setup lang="ts">
  import { ChatLineRound } from '@element-plus/icons-vue';
  // import SvgIcon from '/@/components/SvgIcon/index.vue';
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: var(--color-text-2);
    text-align: center;
  }
</style>
