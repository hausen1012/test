<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <!-- svg：图标外层容器节点，内部需要与use标签结合使用 -->
  <svg>
    <!-- xlink：href执行用哪一个图标，属性值务必 icon-图标名字 -->
    <use href="#icon-phone" fill="red"></use>
  </svg>
  <svg-icon name="phone" color="red"></svg-icon>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
div {
  h1 {
    color: @color;
  }
}
</style>
