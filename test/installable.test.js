const ExactRouterView  = require('../dist/index')
const Vue = require('vue')

describe('ExactRouterView checking', ()=>{
  test('it should be a installable plugin', ()=>{
    console.log(ExactRouterView)
    expect(typeof ExactRouterView).toBe('object')
    expect(ExactRouterView).toHaveProperty('install')
  })

  test('it should work when vue-router installed', ()=>{
    const install = jest.fn(()=>{
      Vue.use(ExactRouterView)
    })
    install()
    const installedPlugins = Vue._installedPlugins
    expect(installedPlugins).toContainEqual(ExactRouterView)
  })

})
