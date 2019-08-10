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
  version: '1.0.0',
  install (V) {
    const routerInstalled = V._installedPlugins.filter(plugin=>plugin.name === 'VueRouter').length
    if ( !routerInstalled ) {
      if ( process.env.NODE_ENV !== 'production' ) {
        throw Error('missing dependency: \'VueRouter\', make sure that vue-router was installed.')
      }
      return;
    }
    V.component('exact-router-view', ExactRouterView)
  }
}
