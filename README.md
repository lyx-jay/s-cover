# s-cover

It is a simple way to create your post cover

1. 上边距塌陷 使用 !important 增加权重
2. canvas中绘制位置与鼠标位置偏离
3. styled-components 缺点：1. 无法加强样式权重 2. 对于一些没有必要封装的地方不好添加样式
4. 使用了 https://github.com/gilbarbara/logos 的 svg logo 
    svg 引入问题

5. input filter

6. 动态加载图片 require与import
console.log(typeof require(`../../assets/logos/100tb.svg`))  object
const path = require(`../../assets/logos/${logoName}.svg`)   string

7. 对input使用debounce，无法取到到e.target.value

8. 跳转时，并不显示路由变化

9. 严格模式下，useEffect 会执行两次。这导致在创建 fabric.canvas 时，会创建两个包裹的canvas。由此引起的问题是，在 canvas 上绘制的图形无法选取.

   解决方法为：关闭严格模式

10. overflow生效的前提条件是，必须为div指定高度，flex:1这种形式无法满足