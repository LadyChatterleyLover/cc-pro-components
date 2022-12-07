<template>
  <div class="cc-data-list-item-meta">
    <div class="cc-data-list-item-meta-avatar">
      <el-avatar v-if="avatar" :src="avatar" />
      <slot v-else name="avatar" />
    </div>
    <div class="cc-data-list-item-meta-content">
      <div class="cc-data-list-item-meta-content-title">
        <div v-if="title">{{ title }}</div>
        <slot name="title" />
      </div>
      <div class="cc-data-list-item-meta-content-description">
        <div v-if="description">{{ description }}</div>
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  avatar?: string
  title?: string
  description?: string
}>()
</script>

<style lang="scss" scoped>
.cc-data-list-item-meta {
  display: flex;
  align-items: center;
  padding: 4px 0;
  &-avatar {
    margin-right: 16px;
  }
  &-content {
    &-title {
      margin-bottom: 4px;
    }
    &-description {
      color: #00000073;
      font-size: 14px;
    }
  }
}
</style>
