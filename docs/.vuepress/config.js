module.exports = {
    title:"Mark Fu的博客",
    // 注入到当前页面的HTML <head>中的标签  
    head:[ // 增加一个自定义的favicon（网页标签的图标）
        ['link',{rel:'icon',href:'/spider.png'}],
    ],
    themeConfig:{
        logo:'/spider.png', // 左上角logo
        // 导航栏设置
        nav:[
            {text:'首页',link:'/'},
            {text:'技术文档',link:'/tech/'},
            {text:'csdn主页',link:'https://blog.csdn.net/weixin_43815680?spm=1000.2115.3001.5113'},
            {text:'github主页',link:'https://github.com/huanhunmao'},
            {text:'知乎主页',link:'https://www.zhihu.com/people/got-81'},
            {text:'简书',link:'https://www.jianshu.com/u/d5a8b36d145b'},
            {text:'B站',link:'https://www.bilibili.com/video/BV1gi4y177ZW/'}
        ],
        sidebar:'auto',  //侧边栏配置
        sidebarDepth:2
    }
}