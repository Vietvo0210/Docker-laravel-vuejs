import { createApp } from "vue";
import App from "./App.vue";
import"antd/dist/reset.css";
import { Descriptions } from "ant-design-vue";

createApp(App).use(Descriptions).mount("#app");
