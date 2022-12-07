<template>
  <div class="cc-avatar-group">
    <template v-for="(item, index) in slots?.slice(0, maxCount)" :key="index">
      <component :is="item" :size="size" />
    </template>
    <el-popover
      v-if="maxCount !== Infinity"
      width="auto"
      :placement="maxPopoverPlacement"
      :trigger="maxPopoverTrigger"
    >
      <template #reference>
        <el-avatar
          :size="size"
          style="
            background: #fde3cf;
            color: #f56a00;
            margin-left: -8px;
            cursor: pointer;
          "
          >+{{ showCount }}</el-avatar
        >
      </template>
      <div class="cc-avatar-group">
        <component
          :is="item"
          v-for="(item, index) in slots?.slice(maxCount, length)"
          :key="index"
          :size="size"
          style="margin-right: 6px"
        />
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const props = withDefaults(
  defineProps<{
    maxCount?: number
    maxPopoverPlacement?: 'top' | 'bottom'
    maxPopoverTrigger?: 'hover' | 'focus' | 'click'
    size?: number | 'large' | 'default' | 'small'
  }>(),
  {
    maxCount: Number.POSITIVE_INFINITY,
    maxPopoverPlacement: 'top',
    maxPopoverTrigger: 'hover',
    size: 'default',
  }
)

const slots = useSlots()?.default?.()

const length = computed(() => slots?.length)

const showCount = computed(() =>
  props.maxCount !== Number.POSITIVE_INFINITY
    ? length.value! - props.maxCount
    : length.value
)
</script>

<style scoped lang="scss">
.cc-avatar-group {
  display: flex;
  align-items: center;
  width: fit-content;
}
</style>
