<template>
  <div class="pt-[30px]">
    <div v-for="(item, index) in menus" :key="index" class="mt-5">
      <div class="px-6 text-[#454d64] font-medium">{{ item.title }}</div>
      <div
        v-for="(child, i) in item.children"
        :key="i"
        class="flex items-center mt-2 text-sm px-7"
      >
        <div
          v-if="$route.path === child.path"
          class="w-[6px] h-[6px] rounded-[100%] bg-[#4569d4] mr-1 relative top-[-2px]"
        />
        <div
          class="leading-7 cursor-pointer text-[#717484] hover:text-[#4569d4]"
          @click="goto(item)"
        >
          {{ child.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface MenuItem {
  title: string
  path?: string
  children?: MenuItem[]
}

const router = useRouter()

const menus: MenuItem[] = [
  {
    title: '架构设计',
    children: [
      {
        title: '组件总览',
        path: '/',
      },
    ],
  },
  {
    title: '通用组件',
    children: [
      {
        title: '图标选择器',
        path: '/chooseIcon',
      },
      {
        title: '省市区选择器',
        path: '/chooseArea',
      },
      {
        title: '时间选择器',
        path: '/chooseTime',
      },
      {
        title: '趋势标记',
        path: '/trend',
      },
      {
        title: '文本',
        path: '/text',
      },
    ],
  },
  {
    title: '数据展示',
    children: [
      {
        title: '头像组合',
        path: '/avatarGroup',
      },
      {
        title: '评论',
        path: '/comment',
      },
      {
        title: '列表',
        path: '/list',
      },
      {
        title: '分段器',
        path: '/segmented',
      },
    ],
  },
  {
    title: '反馈',
    children: [
      {
        title: '分割面板',
        path: '/spilt',
      },
      {
        title: '旋转验证码',
        path: '/rotateVerify',
      },
      {
        title: '滑动验证码',
        path: '/slideVerify',
      },
    ],
  },
  {
    title: '高级组件',
    children: [
      {
        title: '高级卡片',
        path: '/proCard',
      },
      {
        title: '选项卡',
        path: '/statisticCard',
      },
      {
        title: '多选卡片',
        path: '/checkCard',
      },
      {
        title: '高级列表',
        path: '/proList',
      },
      {
        title: '高级骨架屏',
        path: '/proSkeleton',
      },
    ],
  },
]

const goto = (item: MenuItem) => {
  router.push(item.path as string)
}
</script>

<style scoped></style>
