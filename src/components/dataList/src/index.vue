<template>
  <div
    class="cc-data-list"
    :class="{ 'cc-data-list-border': border }"
    :style="{ maxHeight: maxHeight + 'px' }"
    @scroll="handleScroll"
  >
    <div v-if="$slots.header" class="cc-data-list-header" :style="{ padding }">
      <slot name="header" />
    </div>
    <el-row v-if="grid">
      <template v-for="(item, index) in slotDefault" :key="index">
        <el-col :span="24 / slotDefault.length">
          <component :is="slotDefault[index]" />
        </el-col>
      </template>
    </el-row>
    <slot v-else />
    <div v-if="$slots.footer" class="cc-data-list-footer" :style="{ padding }">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, ref, useSlots, withDefaults } from 'vue'

export interface GridProps {
  gutter?: number
}
const slots = useSlots()
const slotDefault = ref<any[]>([])

const props = withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'large'
    maxHeight?: number | string
    border?: boolean
    grid?: boolean
  }>(),
  {
    size: 'medium',
    border: true,
    grid: false,
  }
)

const emits = defineEmits(['scroll', 'reach-bottom'])

const padding = computed(() => {
  if (props.size === 'small') return '8px 20px'
  else if (props.size === 'medium') return '12px 20px'
  else return '16px 20px'
})
provide('padding', padding.value)

const handleScroll = (e: any) => {
  const scrollTop = e.target.scrollTop
  const scrollHeight = e.target.scrollHeight
  const offsetHeight = Math.ceil(e.target.getBoundingClientRect().height)
  const currentHeight = scrollTop + offsetHeight
  emits('scroll')
  if (currentHeight >= scrollHeight) {
    emits('reach-bottom')
  }
}

onMounted(() => {
  if (slots.default) {
    slotDefault.value = slots.default!()
  }
})
</script>

<style lang="scss" scoped>
.cc-data-list {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  border-radius: 6px;
  &-header,
  &-footer {
    border-bottom: 1px solid #f0f0f0;
  }
  &-border {
    border: 1px solid #f0f0f0;
    border-bottom: none;
  }
}
</style>
