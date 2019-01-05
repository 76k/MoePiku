// Author: kozo4
// MoePiku v0.1.2 | MIT
// Github: https://github.com/d1y/MoePiku
// create by 2018 last commit for 2018//11/25
// ----cat me----> http://kozo4.ooo
Ractive.DEBUG = false;

function index(page) {
  var page = parseInt(page) || 1;
  window._G = window._G || {
    post: {},
    postList: {}
  };
  // 页面标题
  $('title').html(_config['blog_name']);
  // 如果获取到了就生成内容,然后返回
  if (_G.postList[page] != undefined) {
    $('#container').html(_G.postList[page]);
    return;
  }
  // ajax请求
  $.ajax({
    url: "https://api.github.com/repos/" + _config['owner'] + "/" + _config['repo'] + "/issues",
    data: {
      filter: 'created',
      page: page,
      access_token: _config['access_token'],
      per_page: _config['per_page']
    },
    beforeSend: function() {
      // 请求之前的loading动画
      $('#container').html('<img src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif">');
    },
    success: function(data, textStatus, jqXHR) {
      var link = jqXHR.getResponseHeader("Link") || "";
      var next = false;
      var prev = false;
      if (link.indexOf('rel="next"') > 0) {
        next = true;
      }
      if (link.indexOf('rel="prev"') > 0) {
        prev = true;
      }
      var ractive = new Ractive({
        template: '#listTpl',
        data: {
          posts: data,
          next: next,
          prev: prev,
          page: page
        }
      });
      window._G.postList[page] = ractive.toHTML();
      $('#container').html(window._G.postList[page]);

      //将文章列表的信息存到全局变量中，避免重复请求
      for (i in data) {
        var ractive = new Ractive({
          template: '#detailTpl',
          data: {
            post: data[i]
          }
        });
        window._G.post[data[i].number] = {};
        window._G.post[data[i].number].body = ractive.toHTML();
        // 文章标题 = 远程标题 + 自定义的
        var title = data[i].title + " | " + _config['blog_name'];
        window._G.post[data[i].number].title = title;
      }
    }
  });
}
// 语法高亮
function highlight() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}

function detail(id) {
  if (!window._G) {
    window._G = {
      post: {},
      postList: {}
    };
    window._G.post[id] = {};
  }

  if (_G.post[id].body != undefined) {
    $('#container').html(_G.post[id].body);
    var tmp1 = $("#container img")
    for (var e = 0; e < tmp1.length; e++) {
      new Zooming({
        // options...
      }).listen(tmp1[e])
    }
    $('title').html(_G.post[id].title);
    highlight();
    return;
  }
  $.ajax({
    url: "https://api.github.com/repos/" + _config['owner'] + "/" + _config['repo'] + "/issues/" + id,
    data: {
      access_token: _config['access_token']
    },
    beforeSend: function() {
      $('#container').html('<img src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif">');
    },
    success: function(data) {
      var ractive = new Ractive({
        el: "#container",
        template: '#detailTpl',
        data: {
          post: data
        }
      });
      $('title').html(data.title + " | " + _config['blog_name']);
      highlight();
    }
  });

}
var favicon = document.createElement('link')
favicon.rel = "icon"
favicon.href = _DIY["favicon"]
var bG = document.getElementById("bg")
bG.style.background = _DIY["bg"]
$('head')[0].appendChild(favicon)
// 头部信息
if (_DIY["slogan"] == "") {
  var temp = document.createElement('script')
  temp.src = 'https://v1.hitokoto.cn/?encode=js&select=%23hitokoto'
  temp.setAttribute('defer', 'defer')
  document.getElementsByTagName('body')[0].innerHTML += '<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>'
}
var ractiveHead = new Ractive({
  el: "#header",
  template: '#hd',
  data: {
    name: _DIY["name"],
    avatar: _DIY["avatar"],
    show: _DIY["slogan"],
    cover: _DIY["headBg"]
  }
})
// 版权说明,没有备案号,因为不备案
fetch('https://v1.hitokoto.cn')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    var hitokoto = document.getElementById('hitokoto');
    if (_DIY["slogan"] == "") {
      hitokoto.innerText = data.hitokoto;
    } else {
      hitokoto.innerText = _DIY["slogan"]
    }


  })
  .catch(function(err) {
    console.error(err);
  })
var footerContent = '<p align="center"> <a href="http://www.miibeian.gov.cn/" target="_blank">{{footer_keep}}</a> <br> Copyright © {{year}} <a href="{{footer_name_link}}">{{name}}</a> All rights reserved</p>'
var foot = new Ractive({
  el: "#footer",
  template: footerContent,
  data: {
    name: _DIY["footer_name"],
    year: _DIY["footer_year"],
    footer_keep: _DIY["footer_keep"],
    footer_name_link: _DIY["footer_name_link"]
  }
})
// 关于我
function aboutMe() {
  var num = Math.floor(Math.random() * Photo_img.length);
  var randomImg = Photo_img[num];
  var imgStr = document.createElement('img')
  new Zooming({}).listen(imgStr)
  // console.log(typeof _DIY["about"]["avatar"]);
  if (_DIY["about"]["avatar"] == "") {
    imgStr.src = randomImg
  } else {
    imgStr.src = _DIY["about"]["avatar"]
  }
  var p = document.createElement('p')
  p.align = 'center'
  p.className = 'about'
  var tmp8 = document.createElement('p')
  tmp8.innerText = '@' + _DIY["about"]["name"]
  p.appendChild(tmp8)
  var tmp5 = _DIY["about"]["link"]
  var tmp6 = [tmp5["github"], tmp5["weibo"], tmp5["v2ex"], tmp5["bilibili"]]
  var tmp7 = ["github", "weibo", "v2ex", "bilibili"]
  for (var t = 0; t < tmp6.length; t++) {
    if (tmp6[t] !== "") {
      var aLink = document.createElement('a')
      aLink.href = tmp6[t]
      aLink.innerText = tmp7[t]
      p.appendChild(aLink)
    }
  }
  var SP = document.createElement('h3')
  SP.innerText = _DIY["about"]["keyword"]
  p.appendChild(SP)
  document.getElementById('container').appendChild(imgStr);
  document.getElementById('container').appendChild(p)
}
// 你的照片
function photo() {
  for (var i = 0; i < Photo_img.length; i++) {
    var sourcesImg = Photo_img[i]
    var sourceImg = document.createElement('img')
    sourceImg.className = 'photo'
    sourceImg.src = sourcesImg
    new Zooming({}).listen(sourceImg)
    // console.log(sourceImg);
    document.getElementById('container').appendChild(sourceImg)
  }
}
// 一开始的图片点击放大效果
// function zoomImg() {
//     // console.log(this.width);
//     // console.log(this.height)
//     var tmp = this.src
//     var zoomimg = document.getElementById('zoomimg');
//     // 要加 px
//     zoomimg.style.width = this.width + 'px'
//     zoomimg.style.height = this.height + 'px'
//     var mask = document.getElementById('mask')
//     zoomimg.style.backgroundImage = 'url('+tmp+')';
//     mask.style.display = 'block'
// }document.getElementById('mask').onclick = function () {
//     mask.style.display = 'none'
// }

var helpers = Ractive.defaults.data;
helpers.markdown2HTML = function(content) {
  return marked(content);
}
helpers.formatTime = function(time) {
  return time.substr(0, 10);
}
var routes = {
  '/': index,
  'p:page': index,
  'post/:postId': detail,
  'test': photo,
  'about': aboutMe
};
var router = Router(routes);
router.init('/');

// ---------------
//　返回顶部
$(function() {
  $('#back').hide(); //隐藏go to top按钮
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    //当window的scrolltop距离大于1时，go to
    if ($(this).scrollTop() > 100) {
      $('#back').fadeIn();
    } else {
      $('#back').fadeOut();
    }
  });

  $('#back a').click(function() {
    $('html ,body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

var Piku = {
  "Author": "Demi Kozo4",
  "Version": "0.8.9"
}
console.log("%cHI! I'm " + Piku['Author'] + " V" + Piku["Version"], "border: 2px solid #333;background: #333;color:#fff;padding: 10px;margin: 5px;border-radius: 5px;");

function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // console.log('手机端');
  } else {
    // 拿的一言API的接口
    function fetch163Playlist(playlist_id) {
      return new Promise(function(ok, err) {
        fetch("https://v1.hitokoto.cn/nm/playlist/" + playlist_id)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            var arr = [];
            data.playlist.tracks.map(function(value) {
              arr.push(value.id);
            });
            return arr;
          })
          .then(function(ids) {
            return fetch163Songs(ids);
          })
          .then(function(data) {
            ok(data);
          })
          .catch(function(e) {
            err(e);
          });
      })
    }

    function fetch163Songs(IDS) {
      return new Promise(function(ok, err) {
        var ids;
        switch (typeof IDS) {
          case 'number':
            ids = [IDS];
            break;
          case 'object':
            if (!Array.isArray(IDS)) {
              err(new Error("Please enter array or number"));
            }
            ids = IDS;
            break;
          default:
            err(new Error("Please enter array or number"));
            break;
        }
        fetch("https://v1.hitokoto.cn/nm/summary/" + ids.join(",") + "?lyric=true&common=true")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            var songs = [];
            data.songs.map(function(song) {
              songs.push({
                name: song.name,
                url: song.url,
                artist: song.artists.join("/"),
                // album: song.album.name,
                // pic: song.album.picture,
                // lrc: song.lyric,
                cover: song.album.picture
              });
            });
            return songs;
          })
          .then(function(result) {
            ok(result);
          })
          .catch(function(e) {
            err(e);
          });
      });
    }
    var tmp2 = typeof _DIY["mPlayer"]
    var tmp3 = _DIY["mPlayer"]
    // console.log(tmp3);
    if (tmp2 = Object) {
      // 网易云单曲
      fetch163Songs(tmp3)
        .then(function(data) {
          var ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            preload: 'none',
            audio: data
          });
        })
        .catch(function(err) {
          console.error(err);
        })
    }
    if (tmp2 = String) {
      var tmp4 = Number(tmp3)
      // console.log(tmp4);
      fetch163Playlist(tmp4)
        .then(function(data) {
          console.log(data);
          var ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            preload: 'none',
            audio: data
          })
        })
        .catch(function(err) {
          console.error(err);
        })
    }
  }
}
goPAGE(); // 调用function
