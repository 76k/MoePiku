// Author: kozo4
// MoePiku v0.9.8 | MIT
// Github: https://github.com/d1y/MoePiku
// create by 2018 last commit for 2018//11/25
// ----cat me----> http://kozo4.ooo

Ractive.DEBUG = false;

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
    $('#post-content .container-fluid').html(_G.postList[page]);
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
      $('#post-content .container-fluid').html('<img class="mx-auto" src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif">');
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
      $('#post-content .container-fluid').html(window._G.postList[page]);
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
    $('#post-content .container-fluid').html(_G.post[id].body);
    // var tmp1 = $("#container img")
    // for (var e = 0; e < tmp1.length; e++) {
    //   new Zooming({
    //     // options...
    //   }).listen(tmp1[e])
    // }
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
      $('#post-content .container-fluid').html('<img src="https://i.loli.net/2018/09/20/5ba3a331a8f3e.gif">');
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

function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // console.log('手机端');
  } else {
    // console.log('pc端');
  }
}goPAGE();

// var sf = new Snowflakes({
//   color: "rgba(255,255,255,.5)",
//   count: 80,
//   minOpacity: 0.1,
//   maxOpacity: 0.8
// });
// const ap = new APlayer({
//   container: document.getElementById('aplayer'),
//   fixed: true,
//   audio: [{
//     name: 'she goes',
//     artist: 'atmozfears',
//     url: 'https://files.catbox.moe/1efv4x.mp3',
//     cover: 'https://i.loli.net/2018/12/22/5c1e0f7795f55.png'
//   }]
// });
$('#checkNav').on('click', function(event) {
  if ($(this).attr('data-nav') === '0') {
    $("#mainNav").css({
      "transform": "translateX(0)"
    })
    $('.nav-bg').show()
    $('.nav-bg').on("mousedown", function(e) {
      // console.log(e);
      $("#mainNav").css({
        "transform": "translateX(-40rem)"
      })
      $('.nav-bg').hide()
    });
    event.stopPropagation();
    event.preventDefault()
  }
})
if ($(window).scrollTop() != 0) {
  setTimeout(function() {
    $('.menu-bar').animate({
      'top': '-10rem'
    })
  }, 400)
}
var p = 0,
  t = 0;
$(window).on('scroll', function() {
  p = $(this).scrollTop();
  if (t < p) {
    $('.menu-bar').css({
      'top': '-10rem'
    })
  } else {
    $('.menu-bar').css({
      'top': '0'
    })
  }
  setTimeout(function() {
    t = p;
  }, 0)
})
var Piku = {
  "Author": "Demi Kozo4",
  "Version": "0.8.9"
}
console.log("%cHI! I'm " + Piku['Author'], "border: 2px solid #333;background: #333;color:#fff;padding: 10px;margin: 5px;border-radius: 5px;");
console.log('%c MoePiku in ' + Piku["Version"], 'background: #333;padding: 8px;color: #fff;margin: 10px 0;border-radius: 4px;border: 2px solid yellow;');
