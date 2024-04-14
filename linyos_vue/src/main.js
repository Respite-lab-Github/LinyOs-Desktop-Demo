import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LDock from './components/LDock.vue'
import LDockLock from './components/LDock-Lock.vue'

const app = createApp(App);
app.use(store);
app.use(router);
app.component('LDock', LDock);
app.component('LDock-Lock', LDock);
app.mount('#app');
