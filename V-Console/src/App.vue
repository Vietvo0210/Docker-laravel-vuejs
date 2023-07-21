<template>
  <a-layout class="layout">
   <VHeader/>
    <a-layout-content style="padding: 50px 50px">
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
import { getDetail, getIndex, postData, fruitApi } from '@/RestApi'
import VHeader from '@/components/VHeader'

const list = ref([]);
const item = ref();
const addSuccessFlag = ref(0);

const fetchItems = async () => {
  list.value = await getIndex(fruitApi)
}

const fetchItem = async () => {
  item.value = await getDetail(fruitApi, 1);
}

const addItem = async () => {
  const data = {name: "Viet", type: 0, season:"Full", amount: 20};
  if(await postData(fruitApi, data) === 200){
    addSuccessFlag.value = 1
  }
  else alert('Post Failed!');
}

onMounted(() => {
  fetchItems();
})

watch(() => addSuccessFlag.value, effect => {
  if(effect > 0) {
    addSuccessFlag.value = 0
    fetchItems()
  }
})
</script>
