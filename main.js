console.log('%c      ', 'background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#3498db" text-shadow="0 0 1px #3498db" stroke-width="1px" stroke-dasharray="90 310">MoePiku<animate attributeName="stroke-dashoffset" begin="-1.5s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#f39c12" text-shadow="0 0 1px #f39c12" stroke-width="1px" stroke-dasharray="90 310">MoePiku<animate attributeName="stroke-dashoffset" begin="-3s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#e74c3c" text-shadow="0 0 1px #e74c3c" stroke-width="1px" stroke-dasharray="90 310">MoePiku<animate attributeName="stroke-dashoffset" begin="-4.5s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text><text font-size="32" text-anchor="middle" x="50%" y="50%" text-transform="uppercase" fill="none" stroke="#9b59b6" text-shadow="0 0 1px #9b59b6" stroke-width="1px" stroke-dasharray="90 310">MoePiku<animate attributeName="stroke-dashoffset" begin="-6s" dur="6s" from="0" to="-400" repeatCount="indefinite"/></text></g></svg>\') left top no-repeat; font-size: 48px;');
    // if(true){
    //     (function() {
    //         var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
    //         function(callback) {
    //             window.setTimeout(callback, 1000 / 60);
    //         };
    //         window.requestAnimationFrame = requestAnimationFrame;
    //     })();
    //
    //     (function() {
    //         var flakes = [],
    //             canvas = document.getElementById("Snow"),
    //             ctx = canvas.getContext("2d"),
    //             flakeCount = 200,
    //             mX = -100,
    //             mY = -100;
    //
    //         canvas.width = window.innerWidth;
    //         canvas.height = window.innerHeight;
    //
    //         function snow() {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    //             for (var i = 0; i < flakeCount; i++) {
    //                 var flake = flakes[i],
    //                     x = mX,
    //                     y = mY,
    //                     minDist = 150,
    //                     x2 = flake.x,
    //                     y2 = flake.y;
    //
    //                 var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
    //                     dx = x2 - x,
    //                     dy = y2 - y;
    //
    //                 if (dist < minDist) {
    //                     var force = minDist / (dist * dist),
    //                         xcomp = (x - x2) / dist,
    //                         ycomp = (y - y2) / dist,
    //                         deltaV = force / 2;
    //
    //                     flake.velX -= deltaV * xcomp;
    //                     flake.velY -= deltaV * ycomp;
    //
    //                 } else {
    //                     flake.velX *= .98;
    //                     if (flake.velY <= flake.speed) {
    //                         flake.velY = flake.speed
    //                     }
    //                     flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
    //                 }
    //
    //                 ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
    //                 flake.y += flake.velY;
    //                 flake.x += flake.velX;
    //
    //                 if (flake.y >= canvas.height || flake.y <= 0) {
    //                     reset(flake);
    //                 }
    //
    //                 if (flake.x >= canvas.width || flake.x <= 0) {
    //                     reset(flake);
    //                 }
    //
    //                 ctx.beginPath();
    //                 ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    //                 ctx.fill();
    //             }
    //             requestAnimationFrame(snow);
    //         };
    //
    //         function reset(flake) {
    //             flake.x = Math.floor(Math.random() * canvas.width);
    //             flake.y = 0;
    //             flake.size = (Math.random() * 3) + 2;
    //             flake.speed = (Math.random() * 1) + 0.5;
    //             flake.velY = flake.speed;
    //             flake.velX = 0;
    //             flake.opacity = (Math.random() * 0.5) + 0.3;
    //         }
    //
    //         function init() {
    //             for (var i = 0; i < flakeCount; i++) {
    //                 var x = Math.floor(Math.random() * canvas.width),
    //                     y = Math.floor(Math.random() * canvas.height),
    //                     size = (Math.random() * 3) + 2,
    //                     speed = (Math.random() * 1) + 0.5,
    //                     opacity = (Math.random() * 0.5) + 0.3;
    //
    //                 flakes.push({
    //                     speed: speed,
    //                     velY: speed,
    //                     velX: 0,
    //                     x: x,
    //                     y: y,
    //                     size: size,
    //                     stepSize: (Math.random()) / 30 * 1,
    //                     step: 0,
    //                     angle: 180,
    //                     opacity: opacity
    //                 });
    //             }
    //
    //             snow();
    //         };
    //
    //         document.addEventListener("mousemove", function(e) {
    //             mX = e.clientX,
    //             mY = e.clientY
    //         });
    //         window.addEventListener("resize", function() {
    //             canvas.width = window.innerWidth;
    //             canvas.height = window.innerHeight;
    //         });
    //         init();
    //     })();
    // }
    var sf = new Snowflakes({
    color: "rgba(255,255,255,.5)",
    count: 80,
    minOpacity: 0.1,
    maxOpacity: 0.8
});
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [{
        name: 'she goes',
        artist: 'atmozfears',
        url: 'https://files.catbox.moe/1efv4x.mp3',
        cover: 'https://i.loli.net/2018/12/22/5c1e0f7795f55.png'
    }]
});
$('#checkNav').on('click',function (event) {
  if($(this).attr('data-nav') === '0'){
    $("#mainNav").css({
      "transform": "translateX(0)"
    })
    $('.nav-bg').show()
    $(document).on("mousedown", function(){
        $("#mainNav").css({
          "transform": "translateX(-40rem)"
        })
        $('.nav-bg').hide()
    });
    event.stopPropagation();
    event.preventDefault()
  }
})
if($(window).scrollTop() !=0){
  setTimeout(function () {
    $('.menu-bar').animate({'top':'-10rem'})
  },400)
}
var p=0,t =0;
$(window).on('scroll',function(){
  p=$(this).scrollTop();
  console.log(p,t);
  if(t<p){
    // console.log('down');
    $('.menu-bar').css({'top':'-10rem'})
  }else{
    // console.log('up');
    $('.menu-bar').css({'top':'0'})
  }
  setTimeout(function(){ t = p ; },0)
})
