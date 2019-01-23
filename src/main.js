import App from './App.vue'

const Vue = window.Storyblok.vue

new Vue({
  render: h => h(App)
}).$mount('#app')
