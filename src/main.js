import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
//import ShowComments from './components/ShowComments.vue';
import BaseContainer from './components/Slots/BaseContainer.vue';
import BaseButton from './components/Slots/BaseButton.vue';
import { validateArgCount } from '@firebase/util';
//import BasePopup from './components/Slots/BasePopup'

const ShowComments = defineAsyncComponent(() => import('./components/comments/ShowComments.vue'));
const BasePopup = defineAsyncComponent(() => import('./components/Slots/BasePopup'));

const app = createApp(App);
app.use(router);
app.use(store);

app.component('show-comments', ShowComments);
app.component('base-container', BaseContainer);
app.component('base-button', BaseButton);
app.component('base-popup', BasePopup);




app.config.globalProperties.$filters = {
    toUppercase (value) {
        return value.toUpperCase();
      },
      shorten(value) {
        return value.slice(0,300)
      }
};
app.directive('colorFul', {
    beforeMount:(el, binding) => {
        el.style.color = "#"+ Math.random().toString().slice(2,8);
    },
});

app.directive('backgroundChange', {
    beforeMount:(el, binding) => {
        el.style.background = "#"+ Math.random().toString().slice(2,8);
    },
});

app.mount('#app');
