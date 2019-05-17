class MyVue {
  constructor(options) {
    this.$options = options;
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$methods = options.methods;

    this._binding = {};
    this._obverse(this.$data); // 数据劫持
    this._complie(this.$el); // 解析指令
  }
  _obverse(obj) {
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
            get() { // getter
              return value;
            },
            set(newVal) { // setter
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
  }
  _complie() {

  }
}
