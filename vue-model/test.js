
/**
 * vue构造函数
 * @param {Object} options 参数
 */
function MyVue(options) {
  this._init(options);
}

/**
 * 函数init属性
 * @param {Object} options 初始化参数
 */
MyVue.prototype._init = function(options) {
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$data = options.data;
  this.$methods = options.methods;

  this._binding = {};
  this._obverse(this.$data); // 数据劫持
  this._complie(this.$el); // 解析指令
};

/**
 * 数据劫持 1.判断是否为已定义实例属性 2.给对象设置set get 3.set中通知变化
 * 所谓数据劫持就是给对象增加get,set
 * @param {Object} obj 实例中data数据
 */
MyVue.prototype._obverse = function(obj) {
  for (const key in obj) { // 遍历data
    if (obj.hasOwnProperty(key)) {
      this._binding[key] = {
        _directives: []
      };

      let value = obj[key];
      if (typeof value === 'object') { // 使用递归调用实现深度数据劫持
        this._obverse(value);
      }

      const binding = this._binding[key];

      Object.defineProperty(
        this.$data, // 要在其上定义属性的对象
        key, // 要修改的属性名称
        { // 属性描述符
          enumerable: true,
          configurable: true,
          get: function() { // getter
            return value;
          },
          set: function(newVal) { // setter
            if (value !== newVal) {
              value = newVal;
              // 通知变化
              binding._directives.forEach(item => {
                item.update();
              });
            }
          }
        });
    }
  }
};
/**
 * 解析指令
 * @param {Object} root 实例根节点
 */
MyVue.prototype._complie = function(root) {
  const _this = this;

  const nodes = root.children;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.children.length) {
      this._complie(node);
    }

    // click事件绑定
    if (node.hasAttribute('v-click')) {
      node.onclick = (function() {
        const attrVal = nodes[i].getAttribute('v-click');
        return _this.$methods[attrVal].bind(_this.$data);
      })();
    }

    // 双向数据绑定
    if (node.hasAttribute('v-model') && (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA')) {
      node.addEventListener('input', (function(key) {
        const attrVal = node.getAttribute('v-model');
        // 订阅数据变化 绑定更新函数
        _this._binding[attrVal]._directives.push(new Watcher('input', node, _this, attrVal, 'value'));

        return function() {
          _this.$data[attrVal] = nodes[key].value;
        };
      })(i));
    }
  }
};

/**
 *
 * @param {String} name 指令名称
 * @param {Object} el 指令对应的Dom元素
 * @param {Object} vm 指令所属实例对象
 * @param {*} exp 指令对应的值
 * @param {String} attr 绑定的属性名
 */
function Watcher(name, el, vm, exp, attr) {
  this.name = name;
  this.el = el;
  this.vm = vm;
  this.exp = exp;
  this.attr = attr;
  this.update();
}
Watcher.prototype.update = function() {
  this.el[this.attr] = this.vm.$data[this.exp];
};

window.onload = function() {
  const app = new MyVue({
    el: '#app',
    data: {
      number: 0,
      number2: 0
    },
    methods: {
      increment: function() {
        this.number++;
      },
      increment2: function() {
        this.number2++;
      }
    }
  });
};
