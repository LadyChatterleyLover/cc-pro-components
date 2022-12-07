<template>
  <el-container>
    <el-header class="p-0 h-[64px]">
      <nav-header />
    </el-header>
    <el-container>
      <el-aside width="200px" style="border-right: 1px solid #eee">
        <nav-side />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavHeader from '@/components/layout/navHeader/index.vue'
import NavSide from '@/components/layout/navSide/index.vue'
</script>

<style lang="scss" scoped></style>
