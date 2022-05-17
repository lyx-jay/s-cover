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