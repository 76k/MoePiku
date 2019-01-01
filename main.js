// MoePiku v0.9.8 | MIT
// Github: https://github.com/d1y/MoePiku
// create by 2018 last commit for 2018//11/25
// ----cat me----> http://kozo4.ooo

Ractive.DEBUG = false;
var postWrap = $('#post-content .container-fluid')
function index(page) {
  // 传的参数转为整数,并不可能为0
  page = parseInt(page) || 1;
  // 传到全局对象上去
  window._G = window._G || {
    post: {},
    postList: {}
  };
  // 页面标题
  $('title').html(_configData['blog_title']);
  // 如果获取到了就生成内容,然后返回
  if (_G.postList[page] != undefined) {
    postWrap.html(_G.postList[page]);
    return;
  }
  // ajax请求
  $.ajax({
    url: "https://api.github.com/repos/" + _configData['github_user'] + "/" + _configData['github_repo'] + "/issues",
    // 请求的url里加一些参数
    data: {
      filter: 'created',
      page: page,
      // github限制了访问的次数,这里是为了增加访问次数
      access_token: _configData['access_token'],
      // 每次获取到的列表个数
      per_page: _configData['pre_page']
    },
    beforeSend: function() {
      // 在数据未加载好之前的一个动画效果
      postWrap.html('<div class="text-center pb-4 pt-4 mb-4 mt-4"><img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif"></div>');
    },
    success: function(data, textStatus, jqXHR) {
      // 返回的结果,其中data是数据
      var link = jqXHR.getResponseHeader("Link") || "";
      var next = false;
      var prev = false;
      if (link.indexOf('rel="next"') > 0) {
        next = true;
      }
      if (link.indexOf('rel="prev"') > 0) {
        prev = true;
      }
      // 在这里新建一个模板文件
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
      postWrap.html(window._G.postList[page]);
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
        // 文章标题 = github标题 + 标题
        var title = data[i].title + " | " + _configData['blog_title'];
        window._G.post[data[i].number].title = title;
      }
    }
  });
}
// 语法高亮
function highlight() {
  $('pre code').each(function(i, block) {
    $(block).wrap('<div class="window"><div></div></div>')
    hljs.highlightBlock(block);
  });
}
if(_configData['_DIY']['slogan']){
  new Ractive({
    el: "#user-header",
    template: '#post-header',
    data: {
      slogan_con: _configData['_DIY']['slogan'],
      slogan_form: _configData['_DIY']['slogan_form']
    }
  })
}else{
  $('body').append($('<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>'))
  new Ractive({
    el: "#user-header",
    template: '#post-header',
    data: {
      slogan_con: _configData['_DIY']['slogan'],
      slogan_form: _configData['_DIY']['slogan_form']
    }
  })
}
function playDate(e){
  if(e){
    return new Date().getFullYear()
  }
  var a = new Date() - new Date(_configData['_DIY']['oldDate']),
      d = Math.floor(a / (24 * 3600 * 1000))
      return d
}
new Ractive({
  el: "#copyright",
  template: "#footer",
  data: {
    footer_keep: _configData['_DIY']['footer_keep'],
    footer_year: _configData['_DIY']['footer_year'],
    footer_new_year: playDate(1),
    footer_name: _configData['_DIY']['footer_name'],
    playDate: playDate() + '天ヽ(✿ﾟ▽ﾟ)ノ',
    footer_link: _configData['_DIY']['footer_link']
  }
})
function detail(id) {
  if (!window._G) {
    window._G = {
      post: {},
      postList: {}
    };
    window._G.post[id] = {};
  }

  if (_G.post[id].body != undefined) {
    postWrap.html(_G.post[id].body);
    $('title').html(_G.post[id].title);
    highlight();
    return;
  }
  $.ajax({
    url: "https://api.github.com/repos/" + _configData['github_user'] + "/" + _configData['github_repo'] + "/issues/" + id,
    data: {
      // access_token: _config['access_token']
    },
    beforeSend: function() {
      postWrap.html('<div class="text-center pb-4 pt-4 mb-4 mt-4"><img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif"></div>');
    },
    success: function(data) {
      var ractive = new Ractive({
        el: "#post-content .container-fluid",
        template: '#detailTpl',
        data: {
          post: data
        }
      });
      $('title').html(data.title + " | " + _configData['blog_title']);
      highlight();
    }
  });
}
function maxHeight(){
  console.log($('.container.w-responsive.mx-auto').height(),$('#bg').height())
  if($('.container.w-responsive.mx-auto').height() <= $('#bg').height()){
    $('#copyright').hide()
  }
}
$('#aboutMe').on('click',aboutMe)
function aboutMe() {
  $('.nav-bg').trigger("mousedown");
  $.ajax({
    url: "about.md",
    beforeSend: function() {
      postWrap.html('<div class="text-center pb-4 pt-4 mb-4 mt-4"><img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif"></div>');
    },
    success: function(data) {
      postWrap.html('<div class="markdown-body">'+marked(data)+'</div>');
      highlight();
      new Zooming({}).listen('.markdown-body img')
    }
  })
  maxHeight()
}
$('#commentWrap').on('click',comment)
function comment(){
  $('.nav-bg').trigger("mousedown");
  var eNote = new Ractive({
    el: "#post-content .container-fluid",
    template: '#comment'
  })
  new Valine({
    el: '#vcomments',
    appId: _configData['comment']['APPID'],
    appKey: _configData['comment']['APPKEY'],
    visitor: true,
    placeholder: _configData['comment']['PLACEHOLDER']
  })
}
$('#ph').on('click',ph)
function ph() {
  $('.nav-bg').trigger("mousedown");
  $.ajax({
    url: "photop.json",
    beforeSend: function() {
      postWrap.html('<div class="text-center pb-4 pt-4 mb-4 mt-4"><img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif"></div>');
    },
    success: function(data) {
      postWrap.html(' ')
      $(data).each(function(index,item) {
        postWrap.get(0).innerHTML += '<img class="zooming" src="'+item+'">';
      })
      new Zooming().listen('.zooming')
    }
  })
}
$('#fd').on('click',friends)
$('#linkHome').on('click',function(){
  $('.nav-bg').trigger("mousedown");
})
function friends(){
  $('.nav-bg').trigger("mousedown");
  $.ajax({
    url: 'friends.json',
    beforeSend: function() {
      postWrap.html('<div class="text-center pb-4 pt-4 mb-4 mt-4"><img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif"></div>');
    },
    success: function(data){
      $('#post-content .container-fluid').html('')
      var f = new Ractive({
        el: "#post-content .container-fluid",
        template: "#friends",
        data: {
          ls: data
        }
      })
    }
  })
}
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
  'about': aboutMe,
  'comment': comment,
  'photop': ph,
  'friends': friends
};
var router = Router(routes);
router.init('/');

$('#up-back').click(function() {
  $('html ,body').animate({
    scrollTop: 0
  }, 300);
  return false;
});
if(_configData['_DIY']['favicon'] == '' || _configData['_DIY']['favicon'] == ''){
  $('link[rel=icon]').attr('href',"http://github.com/favicon.ico")
}else{
  $('link[rel=icon]').attr('href',_configData['_DIY']['favicon'])
}
if(_configData['_DIY']['headBg']){
  $('#user-header').css({
    backgroundImage: 'url('+_configData['_DIY']['headBg']+')'
  })
}
$('#navTitle').text(_configData['_DIY']['navTitle'])
if(!_configData['_DIY']['slideBg']){
  $('#mainNav .card-img-top').css({
    "backgroundImage":"url('https://i.loli.net/2018/09/20/5ba39df8950eb.gif')"
  })
}else{
  $('#mainNav .card-img-top').css({
    "backgroundImage": "url("+_configData['_DIY']['slideBg']+")"
  })
}
$('#avatar').attr('src',_configData['_DIY']['avatar'])
$('#av-name').text(_configData['_DIY']['name'])
$('.card-desc').text(_configData['_DIY']['desc'])
$('#checkNav').on('click', function(event) {
    $("#mainNav").addClass('active')
    $('.nav-bg').show()
    $('.nav-bg').on("mousedown", function(e) {
      // console.log(e);
      $("#mainNav").removeClass('active')
      $(this).hide()
    });
    event.stopPropagation();
    event.preventDefault()
})
var p = 0,t = 0;
$('#up-back').hide();
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $('#up-back').fadeIn();
    $('#close').fadeIn()
  } else {
    $('#up-back').fadeOut();
    $('#close').fadeOut()
  }
  p = $(this).scrollTop();
  if(p === 0){
    $('.menu-bar').removeClass('active')
    $('.menu-bar').removeClass('notactive')
    return
  }
  if (t < p) {
    $('.menu-bar').removeClass('active')
    $('.menu-bar').addClass('notactive')
  } else {
    $('.menu-bar').removeClass('notactive')
    $('.menu-bar').addClass('active')
  }
  setTimeout(function() {
    t = p;
  }, 0)
})
$(window).on('touchstart',function(e){
  startX = e.touches[0].pageX;
})
$(window).on('touchend',function (e) {
  endX = e.changedTouches[0].pageX;
  if(endX - startX > 100){
    $('#checkNav').trigger('click')
  }
})
function active(ele) {
  var n = ele.parent().next()
  n.html(marked(n.html())).toggle("fast")
}
function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // form Mobie
  } else {
    // form pc
    $('body').append('<script src="https://unpkg.com/aplayer/dist/APlayer.min.js"></script>')
    $('head').append('<link rel="stylesheet" href="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css">')
    var bgConfig = _configData['_DIY']['bg'],
        musicConfig = _configData['_DIY']['mPlayer']
    if(bgConfig == 'random'){
      $('#bg').css({
        "background-color":"rgba(0,0,0,.8)",
        "background-image":"url('http://api.wuzuhua.cn/tp/api.php')",
      })
    }else{
      $('#bg').css({
        "background-image": 'url('+bgConfig+')'
      })
    }
    if(musicConfig.constructor === Object){
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        audio: [{
          name: musicConfig['name'],
          artist: musicConfig['artist'],
          url: musicConfig['url'],
          cover: musicConfig['cover']
        }]
      });
    }else if(typeof musicConfig == 'string'){
      fetch163Playlist(musicConfig)
        .then(function (data) {
          new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            audio: data
          });
        })
        .catch(function (err) {
          console.error(err);
        })
    }else if(musicConfig instanceof Array){
      fetch163Songs(musicConfig)
        .then(function (data) {
          new APlayer({
            container: document.getElementById('aplayer'),
            fixed: true,
            audio: data
          });
        })
        .catch(function (err) {
          console.error(err);
        })
    }
    if(_configData['_DIY']['Snow']){
      $('body').append('<script src="https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js"></script>')
      setTimeout(function(){
        new Snowflakes({
          color: "rgba(255,255,255,1)",
          count: 80,
          minOpacity: 0.1,
          maxOpacity: 0.8
        })
      },5000)
    }
  }
}goPAGE();
function fetch163Playlist(playlist_id) {
  return new Promise(function (ok, err) {
    fetch("https://v1.hitokoto.cn/nm/playlist/" + playlist_id)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var arr = [];
        data.playlist.tracks.map(function (value) {
          arr.push(value.id);
        });
        return arr;
      })
      .then(function (ids) {
        return fetch163Songs(ids);
      })
      .then(function (data) {
        ok(data);
      })
      .catch(function (e) {
        err(e);
      });
  })
}
function fetch163Songs(IDS) {
  return new Promise(function (ok, err) {
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
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var songs = [];
        data.songs.map(function (song) {
          songs.push({
            name: song.name,
            url: song.url,
            artist: song.artists.join("/"),
            // album: song.album.name,
            cover: song.album.picture,
            lrc: song.lyric
          });
        });
        return songs;
      })
      .then(function (result) {
        ok(result);
      })
      .catch(function (e) {
        err(e);
      });
  });
}
// version
var Piku = {
  "Author": "Demi Kozo4",
  "Version": "0.8.9"
}
console.log("%cHI! I'm " + Piku['Author'], "border: 2px solid #333;background: #333;color:#fff;padding: 10px;margin: 5px;border-radius: 5px;");
console.log('%c MoePiku in ' + Piku["Version"], 'background: #333;padding: 8px;color: #fff;margin: 10px 0;border-radius: 4px;border: 2px solid yellow;');
