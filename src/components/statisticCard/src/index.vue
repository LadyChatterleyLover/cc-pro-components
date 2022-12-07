<template>
  <cc-card
    v-if="!vertical"
    class="cc-statistic-card"
    :loading="loading"
    :bordered="bordered"
  >
    <template #title>
      <div>
        <slot v-if="$slots.title" name="title" />
        <div v-else>{{ title }}</div>
      </div>
    </template>
    <template #extra>
      <slot v-if="$slots.extra" name="extra" />
      <div v-else>{{ extra }}</div>
    </template>
    <div>
      <cc-statistic :value="value" :show-group-separator="showGroupSeparator">
        <template #prefix>
          <slot name="prefix" />
        </template>
        <template #suffix>
          <slot name="suffix" />
        </template>
      </cc-statistic>
      <div style="width: 100%">
        <slot v-if="$slots.description" name="description" />
        <div v-else>{{ description }}</div>
      </div>
    </div>
    <div v-if="$slots.chart" class="cc-statistic-card-chart">
      <slot name="chart" />
    </div>
    <div v-if="$slots.footer" class="cc-statistic-card-footer">
      <slot name="footer" />
    </div>
  </cc-card>
  <cc-card v-else class="cc-statistic-card">
    <div class="cc-statistic-card-vertical">
      <div
        v-if="$slots.chart"
        class="cc-statistic-card-chart cc-statistic-card-chart-vertical"
      >
        <slot name="chart" />
      </div>
      <div>
        <div class="cc-statistic-card-title">
          <slot v-if="$slots.title" name="title" />
          <div v-else>{{ title }}</div>
        </div>
        <div>
          <cc-statistic
            :value="value"
            :show-group-separator="showGroupSeparator"
          >
            <template #prefix>
              <slot name="prefix" />
            </template>
            <template #suffix>
              <slot name="suffix" />
            </template>
          </cc-statistic>
          <div style="width: 100%">
            <slot v-if="$slots.description" name="description" />
            <div v-else>{{ description }}</div>
          </div>
        </div>
      </div>
    </div>
  </cc-card>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
withDefaults(
  defineProps<{
    title?: string
    extra?: string
    description?: string
    loading?: boolean
    bordered?: boolean
    value?: number
    chartPlacement?: 'left' | 'right' | 'bottom' | ''
    showGroupSeparator?: boolean
  }>(),
  {
    title: '',
    extra: '',
    description: '',
    loading: false,
    bordered: true,
    chartPlacement: '',
    value: 0,
    showGroupSeparator: true,
  }
)

const vertical: any = computed(() => {
  return getCurrentInstance()?.parent?.props?.vertical
})
</script>

<style scoped lang="scss">
.cc-statistic-card {
  position: relative;
  &-title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
  }
  &-chart {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 8px;
    height: 100%;
    &-vertical {
      margin-right: 16px;
      position: relative;
      top: -10px;
    }
  }
  &-footer {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  &-bordered {
    &::after {
      position: absolute;
      content: '';
      right: 30px;
      top: 15%;
      width: 1px;
      height: 70%;
      background: rgba(0, 0, 0, 0.06);
    }
  }
  &-vertical {
    display: flex;
    align-items: center;
  }
}
</style>
