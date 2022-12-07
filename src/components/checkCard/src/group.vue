<template>
  <div class="cc-check-card-group">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="cc-check-card"
      :class="[
        {
          'cc-check-card-bordered': bordered,
          'cc-check-card-checked': item.checked,
          'cc-check-card-disabled': item.disabled,
        },
        `cc-check-card-${size}`,
      ]"
      @click="handleClick(item)"
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
          <el-col v-if="$slots.avatar || item.avatar" :span="6">
            <slot v-if="$slots.avatar" />
            <el-avatar v-else :src="item.avatar" />
          </el-col>

          <el-col :span="item.avatar || $slots.avatar ? 18 : 24">
            <el-row
              v-if="$slots.title || item.title || item.extra || $slots.extra"
              style="margin-bottom: 6px"
              justify="space-between"
            >
              <el-col :span="item.extra || $slots.extra ? 20 : 24">
                <slot v-if="$slots.title" />
                <div v-else>{{ item.title }}</div>
              </el-col>
              <el-col
                :span="$slots.extra || item.extra ? 4 : 0"
                style="text-align: center"
              >
                <slot v-if="$slots.extra" name="extra" />
                <div v-else>{{ item.extra }}</div>
              </el-col>
            </el-row>
            <el-row v-if="$slots.description || item.description">
              <el-col
                :span="24"
                :style="{
                  color: item.disabled ? 'rgba(0, 0, 0, 0.25)' : '#8c8c8c',
                }"
              >
                <slot v-if="$slots.description" />
                <div v-else>{{ item.description }}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div v-if="item.checked" class="cc-check-card-icon" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, useSlots, watch } from 'vue'

export interface CcCheckCardGroupOptions {
  title: string
  value: string
  avatar?: string
  description?: string
}

const props = withDefaults(
  defineProps<{
    multiple?: boolean
    bordered?: boolean
    loading?: boolean
    modelValue?: string | string[]
    size?: 'default' | 'small' | 'large'
    options?: CcCheckCardGroupOptions[]
  }>(),
  {
    multiple: false,
    bordered: true,
    loading: false,
    size: 'default',
    modelValue: '',
  }
)
const slots = useSlots()?.default?.()
const list = ref<any[]>([])

const handleClick = (item: any) => {
  if (item.disabled) {
    return
  }
  if (props.multiple && !item.disabled) {
    item.checked = !item.checked
  } else {
    item.checked = !item.checked
    const arr = list.value.filter((i) => {
      return i !== item
    })
    arr.forEach((c) => {
      c.checked = false
    })
  }
}

watch(
  () => props.modelValue,
  (val) => {
    let arr: string[] = []
    if (typeof val !== 'object') arr.push(val)
    else arr = [...(val as string[])]
    nextTick(() => {
      list.value.forEach((item) => {
        if (arr.includes(item.value)) {
          item.checked = true
        }
      })
    })
  },
  { immediate: true }
)

watch(
  () => props.options,
  (val) => {
    if (val && val.length) {
      list.value = val
    } else {
      slots?.forEach((item) => {
        list.value.push(item.props)
      })!
      list.value.forEach((item: any) => {
        if (item.disabled === '') item.disabled = true
        item.checked = false
      })
    }
  },
  { immediate: true, deep: true }
)
</script>

<style scoped lang="scss">
.cc-check-card-group {
  display: flex;
}

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
  &-default {
    width: 320px;
  }
  &-large {
    width: 440px;
  }
  &-small {
    width: 212px;
  }
  &-checked {
    background: #e6f7ff;
    position: relative;
    border-color: #1890ff !important;
  }
  &:hover {
    border-color: #1890ff;
  }
  &-bordered {
    border: 1px solid #d9d9d9;
  }
  &-disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    border-color: #d9d9d9 !important;
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
