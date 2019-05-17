module.exports = {
  root: true,  //标示项目根配置文件
  env: { // 启用的环境
    browser: true,
    node: true,
    es6: true,
  },
  // eslint 配置文件
  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {//驼峰法命名
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], //末尾无逗号
    'comma-spacing': [2, { // 逗号后面空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],//逗号放在末尾
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,// 文件末尾强制换行
    'eqeqeq': [2, 'allow-null'],// 使用 === 替代 ==
    'guard-for-in': 1,// for-in 循环必须包含一个if语句 这里指的是必须要有hasOwnProperty过滤
    'for-direction': 2, // 禁止for无线循环
    'generator-star-spacing': [2, {//generator 函数中 * 号周围有空格
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {// 缩进风格
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {//键值之间空格
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {//关键字后空格
      'before': true,
      'after': true
    }],
    'new-cap': [2, { //构造函数首字母大写
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2,
    'no-array-constructor': 2,//禁用array构造函数
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,// 条件表达式中赋值操作
    'no-const-assign': 2,//const 定义的变量赋值
    'no-control-regex': 2,
    'no-delete-var': 2, //禁止删除变量 
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,//禁止在正则表达式中使用空字符集
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,//禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2,//禁止扩展原生类型
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'], //禁止不必要的括号
    'no-fallthrough': 2,// case 语句落空
    'no-floating-decimal': 2,
    'no-func-assign': 2, //函数不能被二次定义
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, //禁用不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-new-object': 2, //禁用 Object 的构造函数
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2, //禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2,
    'no-octal': 2, //禁用八进制字面量
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2, //禁止多次声明同一变量
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2, //禁止自我赋值
    'no-self-compare': 2,
    'no-sequences': 2, //不允许使用逗号操作符
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undefined': 0, //禁止将 undefined 作为标识符
    'no-undef-init': 2, //禁止将 undefined 作为标识符
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2, //不能使用”WITH”代码块
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    // 要求使用 JSDoc 注释
    'require-jsdoc': 1,
    'no-loop-func': 0,// 提示在循环中出现函数定义
    'radix': 2, //调用PARSEINT函数要带两个参数
    'no-continue': 1,// 避免使用continue
    'no-reserved-keys': 0, //保留字不能用作标识符
    'no-alert': 1, //禁用 alert
  }
}