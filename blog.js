// builds 对象，属性名对应Target
const builds = {
  // ...

  // Runtime+compiler development build (Browser)
  'web-full-dev': {
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
  },

  // ...
}

// ...

// 这里传入的name 就是Target
function genConfig (name) {
  const opts = builds[name]
  // ... other config

}

//  判断传入的环境变量
if (process.env.TARGET) {
  module.exports = genConfig(process.env.TARGET)
} 

// package.json
// scripts/config.js
// web/entry-runtime-with-compiler.js
// src/platforms/web/runtime/index.js
// src/core/index.js
// src/core/instance/index.js

<div id="app">
  <p>{{message}}</p>
</div>
<script type="text/javascript">
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Vue的实例'
    }
  })
</script>

// ... 
// initMixin
Vue.prototype._init = function (options?: Object) {
  const vm: Component = this

  // 当前实例添加了一个唯一的uid
  vm._uid = uid++   

  // ...

  // 监听对象变化时用于过滤vm
  vm._isVue = true

  // 参数处理
  if (options && options._isComponent) {
    initInternalComponent(vm, options)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }

  //  ...
  // 生命周期相关变量初始化
  initLifecycle(vm)

  // vm 事件监听初始化
  initEvents(vm)
  initRender(vm)
  callHook(vm, 'beforeCreate')
  initInjections(vm)  

  //  vm状态初始化，prop/data/computed/method/watch都在这里初始化完成，vue实例create的关键
  initState(vm)
  initProvide(vm)  
  callHook(vm, 'created')

  // ...

  // 6. render & mount
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }

}
export function mergeOptions (parent: Object, child: Object, vm?: Component): Object {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)
  const extendsFrom = child.extends
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm)
  }
  if (child.mixins) {
    for (let i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm)
    }
  }
  const options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

// 合并构造器及构造器父级上定义的options
export function resolveConstructorOptions (Ctor: Class<Component>) {
  let options = Ctor.options
   // 有super属性，说明Ctor是通过Vue.extend()方法创建的子类
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cachedSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions
      // check if there are any late-modified/attached options (#4976)
      const modifiedOptions = resolveModifiedOptions(Ctor)
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions)
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}