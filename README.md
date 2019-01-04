<p align="center">
<img src='dist/piku.svg' height="300px">
</p>
<h1 align="center"><a href="http://blog.kozo4.ooo">Piku</a></h1>
<p align="center">
<img src="https://img.shields.io/badge/v2ex-chenhonzhou-green.svg">
<img src="https://img.shields.io/badge/Bilibili-Kozo4-blue.svg">
<img src="https://img.shields.io/badge/NeteaseCloudMusic-Kozo4-yellow.svg">
<img src="https://img.shields.io/badge/release-v1.8.9-brightgreen.svg">
</p>

<h2 align="center">
<img src='https://i.loli.net/2018/09/17/5b9f1b8aabc06.jpg' width="40px"> <strong>+ </strong>
<img src='https://i.loli.net/2018/09/17/5b9f1cc5e025a.png' width="40px">
 <strong>=</strong>
<img src='https://i.loli.net/2018/09/17/5b9f1d9da7d66.png' width="90px">
</h2>

<h4 align="center"> "我得到神奇宝贝了" </h4>

![](https://i.loli.net/2018/09/25/5ba99fc30ef8e.png)

<p align="center">
  <img src="https://i.loli.net/2018/09/25/5ba99ffcc1bb5.jpeg" width="40%">
  <img src="https://i.loli.net/2018/09/25/5ba9a01ae2488.jpeg" width="40%">
</p>

-----


> **一个基于Github issues 的博客 使用到的开源项目有 ↓**


| 框架 | 介绍     |
| :------------- | :------------- |
| [director.js](https://github.com/flatiron/director)       |  → 前端静态路由      |
| [ractive.js](http://www.ractivejs.org) | → 做数据双向绑定 |
| [marked.js](https://github.com/markedjs/marked) | → 解析`markdown`|
|[Underscore.js](http://underscorejs.org) | → js实用库 |
| <a href="https://typo.sofi.sh/">typo.css</a> | → 中文网页重设与排版 |
| <a href="http://underscorejs.org/">normalize.css</a> | → 跨浏览器的`Css`库(reset) |
| <del><a href="http://fontawesome.io/">font-awesome.css</a></del> | → 一个字体图标库 |
| <a href="http://jquery.com/">jquery.js</a> | → 高效的操纵`DOM` |
| <a href="https://highlightjs.org/usage/" >highlightjs</a> | → 语法高亮 |
| [typo.css](https://typo.sofi.sh/)| → 中文网页重设与排版 |
|[pace.js](http://github.hubspot.com/pace/docs/welcome/)| → 自动页面加载进度条|
| [APlayer](http://APlayer.js.org) | → 炒鸡好看的HTML5音乐播放器 |
| [github-markdown.css](https://github.com/sindresorhus/github-markdown-css) | → Github官方markdown的样式 |
|[busuanzi](http://busuanzi.ibruce.info/)| → Github官方markdown的样式 |
|[busuanzi](http://busuanzi.ibruce.info/)| → 网页浏览量统计 |
|[zooming.js](https://desmonding.me/zooming/)| → 图片放大特效 |


## 初始化

**在使用这个项目的时候,同时你也需要一个Github账号**

1.使用你的浏览器打开`github.com`
![](https://i.loli.net/2018/09/25/5ba9a7c7be727.png)
2.注册你的账号
![](https://i.loli.net/2018/09/25/5ba9a8288d3fd.png)
3.接下来新建一个项目并导入这个项目

![](https://i.loli.net/2018/09/25/5ba9a9ba8aff6.png)

注意: `Your old repository’s clone URL`的地址应为这个项目地址: http://github.com/ikozo4/piku

![](https://i.loli.net/2018/09/25/5ba9aa00dbd09.png)

注意: 项目名称你可以随意,但是最好建议你填写为: `你的用户名.github.io`,确定之后单击`Begin import`开始导入

![](https://i.loli.net/2018/09/25/5ba9ab4a2fbd7.png)

4.开启`Github Pages`

导入过程可能比较慢,所以你在导入中时,直接`F5`基本就完成了,之后我们接下来开启`pages`功能
点击`Settings`找到`Github Pages`功能,然后点击`Master Branch`,并`Save`

![](https://i.loli.net/2018/09/25/5ba9ac39267dd.png)

接下来你就可以看到你线上的页面了

![](https://i.loli.net/2018/09/25/5ba9acb75b22f.png)

## 配置
修改目录下的`config.js`配置文件，填写好对应的博客名称，你自己的 github 用户名、对应项目名

```javascript
  var _config = {
      blog_name : '用于演示的博客',  // 博客名称
      owner: 'lifesinger',          // github 用户名
      repo: 'lifesinger.github.com',// 用于存放 blog（issues）的项目名
      // access_token: '',          // 请求量大时需要在 github 后台单独设置一个读取公开库的 token
      per_page: '15'                // 默认一页显示几篇文章
    }
```

> **如果你想绑定独立域名，修改根目录的 CNAME 文件，将其中的网址修改为你的域名，并把你的域名 CNAME 到 `用户名.github.io` 即可**


## DIY
修改目录下的`config.js`配置文件

```javascript
// 自定义
var _DIY = {
  // 你的页面图标,默认拿的是我自己的
  favicon: "http://kozo4.ooo/favicon.ico",
  // 背景,可以是颜色,也可以是背景图片 例: "rgba(130, 130, 130, 0.2)" 例: "url(1.png)"
  bg: "linear-gradient(36deg, #17522E 0%, #2893A2 60%, #FFCB16 100%)",
  // 头部背景,必须为图片
  // 下面为随机的图片
  // headBg: "https://api.isoyu.com/bing_images.php",
  headBg: "https://i.loli.net/2018/09/20/5ba39df8950eb.gif",
  // 一句话,默认拿的是一言的,你可以自己修改(如果是空就是默认的)
  slogan: "",
  // 你的头像,注意这里,文章里面的头像默认拿的是你Github上的
  avatar: "piku.svg",
  // 你的名字
  name: "Demi Kozo4",
  // 版权部分的年份,默认2018
  footer_year: "2018",
  // 版权部分的你的名称
  footer_name: "Demi Kozo4",
  // 版权部分你的链接
  footer_name_link: "http://kozo4.ooo",
  // 虽然不想写备案号但是还是要写了
  // footer_keep: "京ICP我备你他妈的案",
  // 音乐播放器[网易云],默认是歌单,如果只想是你中意的几首的话写成对象就行
  // 例: [30780812, 36921562,411755219,28051000,28381279]
  mPlayer: "2110194986",
  // mPlayer: [30780812, 36921562,411755219,28051000,28381279],
  // 关于我页面
  about: {
    // 关于你的头像,默认为你的照片里的随机一张
    avatar: "piku.svg",
    // 关于你的名字,加了个@
    name: "陈大大哦了",
    // 关于你的描述
    keyword: "伪前端，电子音乐爱好者,目标是全栈工程师🙌🙌",
    // 你的链接
    link: {
      // 注意一下都得把地址写全
      github: "http://github.com/ikozo4",
      weibo: "https://www.weibo.com/chendadaover",
      v2ex: "https://www.v2ex.com/member/chenhonzhou",
      bilibili: "https://space.bilibili.com/27013266/#/"
    }
  }
}

```

## 问题

#### → DIY参数出错
如果出现问题,是因为我在判断用户的参数时候采用了非常简单粗暴的方法: `判断类型`,基本我在传参时候,如果是`String` | `Object` | "" 所以,如果你出错了,请务必将它写成以上类型即: `""` | `[]`.一定不要写空,也一定要记住数组的','的符号不要忘记(有JS基础的小伙伴快让开)

#### → 到底怎么写文章呢

我怀疑你现在都是懵的
![](http://ww1.sinaimg.cn/mw1024/a0846ed3gw1f3ct42w3y0j20k00iowfd.jpg)
##### 怎么写

首先上面的配置文件上没有写怎么写文章,首先呢,你应该找到你的项目的`issues`
![](https://i.loli.net/2018/09/25/5ba9c4be02e4b.png)
新建一个`issues`
![](https://i.loli.net/2018/09/25/5ba9c4dd71ea9.png)
 ![](https://i.loli.net/2018/09/25/5ba9c51a27dff.png)

##### 文章
文章使用`markdown`作为文章的渲染方式,所以我强烈建议你花1个小时的时间去学习一下`markdown`,这是一种新的书写方式,也会是未来的主流.如果你真的不想学的话,你也可以只写文本也可以,它同时也支持`html`语法,当然,这些都是建立在你会一点`html`的基础之上

#### → 为什么没有评论呢?

这个问题我考虑了很久,后来想想,能用上这个基本都是小白折腾给自己玩的,如果去接触了其他的,应该就不玩这个了,所以这只是用来自己玩的,所以我觉得评论系统没有存在的意义,如果你真的需要的话,也很简单,考虑到这个是单页面,所以你完全可以新建一个`.html`文件,然后使用[valine](https://valine.js.org/)评论系统
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
  <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
</head>
<body>
  <div id="vcomments"></div>
    <script>
        new Valine({
            el: '#vcomments',
            // 去官方文档去了解一下,上手比较简单
            appId: '<API_ID>',
            appKey: '<API_Key>'
        })
    </script>
</body>
</html>
```

#### → 怎样提高 API 访问次数的配额

> 默认情况下你是用匿名权限访问 github 接口的， github 的访问限制是一个小时最多 60 次请求，这显然是不够的，如何提高限制呢？

1. 到个人设置下的 Personal access tokens 页（https://github.com/settings/tokens ），如下图，点击右上角的 Generate new token

  ![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5k9vfaqj30o20c9abn.jpg)

2. 填写名称，只勾选 `public_repo`,然后保存，github 会生成一个可访问你公开项目的 access_token，将它填入到配置文件的 access_token 的值中，并取消注释。
  ![](http://ww1.sinaimg.cn/large/0066xOjKgy1fmz5nsh5ahj30qr07ydgv.jpg)

3. 打开 `app.js`,取消掉第 20 行和 91 行的注释，保存后重新上传即可
```javascript
      data:{
          // access_token:_config['access_token']
      },
```


---
