<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"> {{ list }}</div>
      <span> {{ item }} </span>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <a-button @click="fetchItem">Fetch Item</a-button>
      <a-button @click="addItem">Add Item</a-button>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
<script setup>

import { onMounted, ref, watch } from 'vue'
import { getDetail, getIndex, postData, testApi } from '@/RestApi'

const list = ref([]);
const item = ref();
const addSuccessFlag = ref('init');

const fetchItems = async () => {
  list.value = await getIndex(testApi)
}

const fetchItem = async () => {
  item.value = await getDetail(testApi, 1);
}

const addItem = async () => {
  const data = {name: "Viet"};
  if(await postData(testApi, data) === 200){
    addSuccessFlag.value = 'Success'
  }
  else alert('Post Failed!');
}

onMounted(() => {
  fetchItems();
})

watch(() => addSuccessFlag.value, effect => {
  if(effect === 'Success') {
    fetchItems()
  }
})
</script>
