import Vue2LeafletDraw from './Vue2LeafletDraw.vue'


function plugin(Vue, opts) {
  Vue.component('Vue2LeafletDraw', Vue2LeafletDraw)
}

export {
  plugin,
  Vue2LeafletDraw
}