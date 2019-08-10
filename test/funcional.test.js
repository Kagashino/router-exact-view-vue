const ExactRouterView = require("../dist/index");
const Vue = require('vue/dist/vue.js')
const VueRouter = require('vue-router')

describe('ExactRouterView render checking', ()=>{
  test('router-view rendered whether the route exactly matched', done=>{
    Vue.use(VueRouter)
    Vue.use(ExactRouterView)

    const Home = Vue.component('home', {
      template: `<exact-router-view name="detail">
          <h3>Home</h3>
        </exact-router-view>`
    })

    const detail = Vue.component('detail', {
      template: `<p>I'm detail</p>`
    })

    const router = new VueRouter({
      routes: [
        {
          name: 'home',
          path: '/',
          component: Home,
          children: [
            {
              name: 'detail',
              path: '/detail',
              component: detail,
            }
          ]
        }
      ]
    })

    const App = new Vue({
      render: h=>h(Home),
      router
    })

    App.$router.push('/detail', ()=>{
      App.$mount()
      const detailContent = App.$el.textContent;
      expect(detailContent).not.toMatch('Home')
      expect(detailContent).toMatch('detail')
      done()
    })
  })
})
