import config from '../package.json'

export const ExactRouterView = {
  name: 'exact-router-view',
  props: {
    name: {
      type: String,
      require: true,
    }
  },
  render (h) {
    const exact = this.$route && this.$route.name === this.name;
    return exact ? h('router-view') : h('div', this.$slots.default)
  }
}

export default {
  name: 'ExactRouterView',
  version: config.version,
  install (V) {
    V.component('exact-router-view', ExactRouterView)
  }
}
