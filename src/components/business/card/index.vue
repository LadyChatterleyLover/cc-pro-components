<template>
  <el-card v-if="type === 'value'">
    <template #header>
      <el-row justify="space-between">
        <el-col :span="12">
          <slot v-if="$slots.title" name="title" />
          <div v-else>{{ title }}</div>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-tag :type="tagType">{{ tag }}</el-tag>
        </el-col>
      </el-row>
    </template>
    <el-row justify="space-between" style="padding: 16px">
      <el-col :span="12" style="font-size: 24px; font-weight: 700">
        <slot v-if="$slots.value" name="value" />
        <div v-else>{{ value }}</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot v-if="$slots.avatar" name="avatar" />
        <el-avatar v-else size="small" :src="avatar" />
      </el-col>
    </el-row>
    <el-row justify="space-between" style="padding: 8px 16px">
      <el-col :span="12">
        <slot v-if="$slots.descTitle" name="descTitle" />
        <div v-else>{{ descTitle }}</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot v-if="$slots.desc" name="desc" />
        <div v-else>{{ desc }}</div>
      </el-col>
    </el-row>
  </el-card>
  <div v-if="type === 'desc'" class="cc-desc-card">
    <div style="padding: 24px">
      <el-row>
        <el-col :span="2">
          <slot v-if="$slots.avatar" name="cc-desc-card-avatar" />
          <el-avatar size="small" :src="avatar" />
        </el-col>
        <el-col class="cc-desc-card-title" :offset="2" :span="20">
          <slot v-if="$slots.title" name="title" />
          <div v-else>{{ title }}</div>
        </el-col>
      </el-row>
      <el-row class="cc-desc-card-desc" :style="{ color }">
        <el-col>
          <slot v-if="$slots.desc" name="desc" />
          <div v-else>{{ desc }}</div>
        </el-col>
      </el-row>
      <el-row justify="space-between">
        <el-col :span="12" class="cc-desc-card-name" :style="{ color }">
          <slot v-if="$slots.name" name="name" />
          <div v-else>{{ name }}</div>
        </el-col>
        <el-col
          :span="12"
          class="cc-desc-card-date"
          :style="{ color: dateColor }"
        >
          <slot v-if="$slots.date" name="date" />
          <div v-else>{{ date }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeMode } from '@/hooks/useThemeMode'

withDefaults(
  defineProps<{
    type?: 'value' | 'desc'
    title: string
    tag?: string
    tagType?: '' | 'success' | 'info' | 'warnin' | 'danger'
    value?: number | string
    avatar?: string
    descTitle?: string
    desc?: string
    name?: string
    date?: string
  }>(),
  {
    type: 'value',
    tagType: '',
    value: '',
    avatar: '',
    descTitle: '',
    desc: '',
    name: '',
    date: '',
  }
)

const { themeMode } = useThemeMode()
const color = computed(() => {
  return themeMode.value === 'light' ? '#00000072' : '#fff'
})
const dateColor = computed(() => {
  return themeMode.value === 'light' ? '#0000003f' : '#fff'
})
</script>

<style scoped lang="scss">
.el-row {
  width: 100%;
  align-items: center;
}
.cc-desc-card {
  transition: all 0.3s;
  width: 100%;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f,
      0 5px 12px 4px #00000017;
  }
  &-title {
    height: 30px;
  }
  &-desc {
    height: 44px;
    overflow: hidden;
    line-height: 22px;
  }
  &-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    font-size: 12px;
  }
  &-date {
    text-align: right;
    font-size: 12px;
  }
}
</style>
