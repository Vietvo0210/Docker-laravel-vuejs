<template>
  <a-layout-header>
    <div class="flex between">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
    >
      <a-menu-item key="1">Home</a-menu-item>
      <a-menu-item key="2">About</a-menu-item>
      <a-menu-item key="3">Products</a-menu-item>
    </a-menu>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
      >
        <a-menu-item key="1">{{ LoginOrOut }}</a-menu-item>
        <a-menu-item>
          <img src="../images/avt-gay.jpg" class="radius"/>
        </a-menu-item>
      </a-menu>
    </div>

  </a-layout-header>
</template>

<script setup>
import { ref } from 'vue'

const LoginOrOut = ref('Login')

</script>

<style scoped>
.flex {
  display: flex;
}

.between {
  justify-content: space-between;
}

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.radius {
  border-radius: 10px;
}
</style>
