<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default" />
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`ElIcon${upIcon}`"
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
      />
      <component
        :is="`ElIcon${downIcon}`"
        v-else
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up',
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp',
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown',
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  text: {
    type: String,
    default: '文字',
  },
  // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势的图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a',
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
  // 下降趋势的文字颜色
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
})
// 获取插槽内容
const slots = useSlots()

// 文字颜色
const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
