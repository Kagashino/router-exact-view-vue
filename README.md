Vue component plugin which can render when router exactly matched.

### Installation

```javascript
import ExactRouterView from 'vue-exact-router-view'
Vue.use(ExactRouterView)
```

### Usage 

Define vue-router option as usual
```javascript
export default {
  path: '/',
  name: 'home',
  component: ()=>import('home'),
  children: [
  	{
  		path: 'detail',
  		name: 'detail',
  		component: ()=>import('path/to/component')
  	}
  ]
}
```
define router component
```vue
<template>
  <div>This belong to detail</div>
</template>
```
pass nested router`detail` as `name` prop to component
```vue
<template>
  <exact-router-view name="detail">
    <div>This is Homepage</div>
  </exact-router-view>
</template>
```

### Result

when router path was `/`, it should render component default slots:

>This is Homepage

when router path was `/detail`, the homepage was not rendered but the only exactly router-view： 

>This belong to detail
