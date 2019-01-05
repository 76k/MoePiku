<p align="center">
<img src='https://i.loli.net/2018/12/23/5c1f8b85337ab.png' height="300px">
</p>
<p align="center"><a href="http://blog.kozo4.ooo"><img src="https://files.catbox.moe/lggifp.svg"></a></p>
<p align="center">
<img src="https://img.shields.io/badge/Bilibili-Kozo4-blue.svg">
<img src="https://img.shields.io/badge/网易云-Kozo4-yellow.svg">
<img src="https://img.shields.io/badge/Release-v1.8.9-brightgreen.svg">
</p>

<h2 align="center">
<img src='https://i.loli.net/2018/09/17/5b9f1b8aabc06.jpg' width="40px"> <strong>+ </strong>
<img src='https://i.loli.net/2018/09/17/5b9f1cc5e025a.png' width="40px">
 <strong>=</strong>
<img src='https://i.loli.net/2018/09/17/5b9f1d9da7d66.png' width="90px">
</h2>


##  → Preivew
<p align="center">
<img src="https://i.loli.net/2019/01/05/5c3010815975e.png">
<img src="https://i.loli.net/2019/01/05/5c3016ea139b3.png">
</p>

-----

> **a blog based on github-issues The open source projects used are ↓**


| 框架 | 介绍     |
| :------------- | :------------- |
| [director.js](https://github.com/flatiron/director)       |  → 前端静态路由      |
| [ractive.js](http://www.ractivejs.org) | → 做数据双向绑定 |
| [marked.js](https://github.com/markedjs/marked) | → 解析`markdown`|
| <a href="http://jquery.com/">jquery.js</a> | → 高效的操纵`DOM` |
| <a href="https://highlightjs.org/usage/" >highlightjs</a> | → 语法高亮 |
| [APlayer](http://APlayer.js.org) | → 炒鸡好看的HTML5音乐播放器 |
| [github-markdown.css](https://github.com/sindresorhus/github-markdown-css) | → Github官方markdown的样式 |
|[busuanzi](http://busuanzi.ibruce.info/)| → 网页浏览量统计 |
|[zooming.js](https://desmonding.me/zooming/)| → 图片放大特效 |
|[MDB](https://mdbootstrap.com/) | →  Bootstrap + Material |
```
+---------------------------------------------+
|                                             |
|                                             |
|           +------+                          |
|           |GITHUB|                          |
|           +---+--+                          |
|               |                             |
|               | HTTP   .-------.            |
|               |     ,-'         '-.         |
|               |    ;    +----+     :        |
|               ^--> :    |RAW |     ;        |
|               |     \   +----+    /         |
|               |      '-.       ,-'          |
|               |         `+----+             |
|            +--+-----+    |    v             |
|            | CLIENT |<---+  +-----------+   |
|            +--------+       |MARKED(RAW)|   |
|                             +-----------+   |
|                                             |
|                                             |
+---------------------------------------------+
```
##  → Get Started

### setup
```bash
  git clone http://github.com/d1y/MoePiku
  cd MoePiku && git checkout gh-pages
```
1. **Github-Pages**
2. **now.sh**
3. **other**

### config
All configurations are in `config.js`
```javascript
var _configData = {
  blog_title: "Kozo4のblog", // Title of your web page
  github_user: "d1y",        // you github user
  github_repo: "MoePiku",    // you github repo
  pre_page: '10',            // articles are displayed on a page
  // DIY config
  _DIY: {
    // web favicon
    favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAP1BMVEUAAAAAAAAhUoT3pZT///8YGIxjpbW1ta0hIYQhQufGxs4xQv+U9/fGACGlxtZKABjW///nlIT355QhY0JSxlLLv7sFAAAAAXRSTlMAQObYZgAAAVJJREFUeF6t1AtqA1EIQNGo85982+5/rX0XIzK8QCDmQlvKeGRAkhNJ1+lNnzLQ36HfVlB5UZUx6EBexLNcWWMJAVPr/Gx6Bg30HQYCRKqBnTMRqMboiHxBB+ssUVcPQVX2HhGMI9XZ+TwM71nACvOLAYnHPeiOUGCgTNVXTJMvSvgdxp58ZJYvBTkwAhVZUFUzVQfxN7GTGmM4P/5mPayzTFUEqDrPIj8toDwD5gGiz5nI9SribFlgQDMQiyCOWTa06kxbw7CuIG9ZGFF1QrD7vc78DIwmW1egf9FCgMzWGNCZWSJWsCQZUOTeqjARvNIBxuFBwTgBqML8AP5jhxgO5KtBVQYEj+O2XS6cedvGkd8i+XKgKgM6Yuh2u7T2fRz5n9MCczVXqzByZsZr7juIRDhILM1Tl1nr8Qj0GkJAdQYEBeshR0pUZ/PMsY+MJKuyf4zEStnV0TenAAAAAElFTkSuQmCC",
    // you page background-image
    bg: "https://chiru.no/u/bg.png",
    // head bg-image
    headBg: "https://i.loli.net/2018/09/20/5ba39df8950eb.gif",
    // show slogan~
    slogan: "二次元什么的,太可爱了吧ヽ(✿ﾟ▽ﾟ)ノ",
    // show slogan form~
    slogan_form: 'd1y',
    // footer year
    footer_year: "2016",
    // footer name
    footer_name: "陈大大哦了",
    // footer href[link]
    footer_link: "http://kozo4.ooo",
    // 中国特有的备案制度!
    footer_keep: "京ICP我备你他妈的案",
    // this is Music player for music-163
    // Array ^ Object ^ String
    mPlayer: ["30780812"],
    // mPlayer: "2110194986",
    // mPlayer: "449559997",
    // mPlayer: {
    //   name: 'she goes',
    //   artist: 'atmozfears',
    //   url: 'https://files.catbox.moe/1efv4x.mp3',
    //   cover: 'https://i.loli.net/2018/12/22/5c1e0f7795f55.png'
    // },
    // site Time recorder
    oldDate: "2016,09,10",
    // nav title
    navTitle: "陈大大哦了",
    // check slide bg
    slideBg: "https://i.loli.net/2018/09/20/5ba39df8950eb.gif",
    // slide avatar
    avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAP1BMVEUAAAAAAAAhUoT3pZT///8YGIxjpbW1ta0hIYQhQufGxs4xQv+U9/fGACGlxtZKABjW///nlIT355QhY0JSxlLLv7sFAAAAAXRSTlMAQObYZgAAAVJJREFUeF6t1AtqA1EIQNGo85982+5/rX0XIzK8QCDmQlvKeGRAkhNJ1+lNnzLQ36HfVlB5UZUx6EBexLNcWWMJAVPr/Gx6Bg30HQYCRKqBnTMRqMboiHxBB+ssUVcPQVX2HhGMI9XZ+TwM71nACvOLAYnHPeiOUGCgTNVXTJMvSvgdxp58ZJYvBTkwAhVZUFUzVQfxN7GTGmM4P/5mPayzTFUEqDrPIj8toDwD5gGiz5nI9SribFlgQDMQiyCOWTa06kxbw7CuIG9ZGFF1QrD7vc78DIwmW1egf9FCgMzWGNCZWSJWsCQZUOTeqjARvNIBxuFBwTgBqML8AP5jhxgO5KtBVQYEj+O2XS6cedvGkd8i+XKgKgM6Yuh2u7T2fRz5n9MCczVXqzByZsZr7juIRDhILM1Tl1nr8Qj0GkJAdQYEBeshR0pUZ/PMsY+MJKuyf4zEStnV0TenAAAAAElFTkSuQmCC",
    // slide name
    name: 'kozo4',
    // slide desc
    desc: "普通人,伪前端狗(#`O′)",
    // 雪花
    Snow: false
  }
}

```

### Submenu
> comment

  by https://valine.js.org

> friends

  Edit `friends.json` file

> about

  Edit `about.md` file

> photop

  Edit `photop.json` file

### issues
> If you encounter problems, please Google first.
#### → How on earth do you write an article?

I suspect you are all foolish now.
![](http://ww1.sinaimg.cn/mw1024/a0846ed3gw1f3ct42w3y0j20k00iowfd.jpg)

First of all, there is no article on the configuration file above. First, you should find the `issues` of your project.

![](https://i.loli.net/2018/09/25/5ba9c4be02e4b.png)
new `issues`
![](https://i.loli.net/2018/09/25/5ba9c4dd71ea9.png)
 ![](https://i.loli.net/2018/09/25/5ba9c51a27dff.png)

The article uses `markdown` as its rendering method, so I strongly recommend that you spend an hour to learn `markdown`, which is a new way of writing and will be the mainstream in the future. If you really don't want to learn, you can just write the text. It also supports `html` grammar. Of course, these are based on your `html`.

#### → How to Increase API Access Quota

> By default, you access the GitHub interface with anonymous privileges. Github's access limit is 60 requests per hour at most. This is obviously not enough. How to raise the limit?

1. To the Personal Access tokens page under Personal Settings (https://github.com/settings/tokens), click Generate new token in the upper right corner as shown below.
![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5k9vfaqj30o20c9abn.jpg)

2. Fill in the name, just check `public_repo', and save it. Github generates an access_token accessible to your public project, fills it in the value of access_token in the configuration file, and cancels the comment.
![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5nsh5ahj30qr07ydgv.jpg)



3. Open `app.js', save and upload again.

```javascript

// access_token:_config['access_token']
```

## Thank your
Project fork by https://github.com/wuhaoworld/github-issues-blog
