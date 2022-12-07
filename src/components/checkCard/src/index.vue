<template>
  <div
    class="cc-check-card"
    :class="[
      {
        'cc-check-card-bordered': bordered,
        'cc-check-card-checked': checked,
        'cc-check-card-disabled': disabled,
      },
      `cc-check-card-${size}`,
    ]"
    @click="handleClick"
  >
    <el-skeleton v-if="loading" animated>
      <template #template>
        <el-row style="margin: -4px 0" :gutter="4">
          <el-col :span="22"><el-skeleton-item variant="text" /></el-col>
        </el-row>
        <el-row style="margin: -4px 0" :gutter="4">
          <el-col :span="8"><el-skeleton-item variant="text" /></el-col>
          <el-col :span="15"><el-skeleton-item variant="text" /></el-col>
        </el-row>
        <el-row style="margin: -4px 0" :gutter="4">
          <el-col :span="6"><el-skeleton-item variant="text" /></el-col>
          <el-col :span="18"><el-skeleton-item variant="text" /></el-col>
        </el-row>
        <el-row style="margin: -4px 0" :gutter="4">
          <el-col :span="13"><el-skeleton-item variant="text" /></el-col>
          <el-col :span="9"><el-skeleton-item variant="text" /></el-col>
        </el-row>
        <el-row style="margin: -4px 0" :gutter="4">
          <el-col :span="4"><el-skeleton-item variant="text" /></el-col>
          <el-col :span="3"><el-skeleton-item variant="text" /></el-col>
          <el-col :span="16"><el-skeleton-item variant="text" /></el-col>
        </el-row>
      </template>
    </el-skeleton>
    <template v-else>
      <el-row class="cc-check-card-content">
        <el-col v-if="$slots.avatar || avatar" :span="6">
          <slot v-if="$slots.avatar" />
          <el-avatar v-else :shape="shape" :src="avatar" />
        </el-col>
        <el-col :span="avatar || $slots.avatar ? 18 : 24">
          <el-row
            v-if="$slots.title || title || extra || $slots.extra"
            style="margin-bottom: 6px"
            justify="space-between"
          >
            <el-col :span="extra || $slots.extra ? 20 : 24">
              <slot v-if="$slots.title" name="title" />
              <div v-else>{{ title }}</div>
            </el-col>
            <el-col
              :span="$slots.extra || extra ? 4 : 0"
              style="text-align: center"
            >
              <slot v-if="$slots.extra" name="extra" />
              <div v-else>{{ extra }}</div>
            </el-col>
          </el-row>
          <el-row v-if="$slots.description || description">
            <el-col
              :span="24"
              :style="{
                color: disabled ? 'rgba(0, 0, 0, 0.25)' : '#8c8c8c',
              }"
            >
              <slot v-if="$slots.description" name="description" />
              <div v-else>{{ description }}</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div v-if="checked" class="cc-check-card-icon" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    avatar?: string
    title?: string
    extra?: string
    description?: string
    bordered?: boolean
    loading?: boolean
    disabled?: boolean
    shape?: 'square' | 'circle'
    size?: 'default' | 'small' | 'large'
  }>(),
  {
    modelValue: false,
    avatar: '',
    title: '',
    extra: '',
    description: '',
    bordered: true,
    loading: false,
    disabled: false,
    shape: 'square',
    size: 'default',
  }
)

const emits = defineEmits(['change', 'click', 'update:modelValue'])

const checked = ref<boolean>(false)

const handleClick = () => {
  if (props.disabled) {
    return
  }
  checked.value = !checked.value
  emits('click')
}

watch(
  () => checked.value,
  (val) => {
    emits('change', val)
    emits('update:modelValue', val)
  }
)
watch(
  () => props.modelValue,
  (val) => {
    checked.value = val
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.cc-check-card {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  vertical-align: top;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s ease 0s;
  &-checked {
    background: #e6f7ff;
    position: relative;
    border-color: #1890ff !important;
  }
  &-default {
    width: 320px;
  }
  &-large {
    width: 440px;
  }
  &-small {
    width: 212px;
  }
  &:hover {
    border-color: #1890ff;
  }
  &-bordered {
    border: 1px solid #f5f5f5;
  }
  &-disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.25) !important;
  }
  &-content {
    padding: 12px 16px;
  }
  &-icon {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 0;
    height: 0;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 12px solid #1890ff;
    transform: rotate(45deg);
    border-top-right-radius: 2px;
  }
}
</style>
