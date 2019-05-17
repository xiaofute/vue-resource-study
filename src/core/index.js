/* vue的入口文件 */

// 引入vue核心方法
import Vue from './instance/index'
// 根据命名YY 全局API
import { initGlobalAPI } from './global-api/index'
// 
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 初始化全局变量
initGlobalAPI(Vue)

// 为vue原型定义属性 isServer  判断是否为服务端渲染
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

// 为vue原型定义属性 ssrContext
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
