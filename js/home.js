

//INIT
var sounds = {
  goodNight : new Howl({
    src: ['assets/goodnight.wav']
  }),
  background : new Howl({
    src: ['assets/background2.mp3'],
    loop:true,
    
  }),
  flyBy: new Howl({
    src: ['assets/flyby.wav']
  }),
  click: new Howl({
    src: ['assets/ui/Click_Electronic_02.mp3']
  })


}





  
  







document.getElementById('start').addEventListener("click",start)
document.getElementById('contentPlane').style.visibility="hidden"
document.getElementById('continue').addEventListener("click", next)

function start(){
  sounds.click.play()
// Header Anime
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
sounds.goodNight.play();
sounds.background.play()
sounds.background.fade(0,0.5,5000)
document.getElementById('start').disabled = true
document.getElementById('blackSolid').style.pointerEvents = "none"
anime({ 
    targets: '#blackSolid',
    opacity: 0,
   backgroundColor:"#092745",
   duration: 5000,

  });


anime.timeline()
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '#subheader',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
  }).add({
    targets: '#continue',
    translateY: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
  }).add({
    targets: '#hint',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: 5000
  })
}

function transition(){
  document.getElementById('contentPlane').style.transform = "translateX(-100%)"
  document.getElementById('transitionColor').style.transform = "translateX(-100%)"
  document.getElementById('contentPlane').style.visibility="visible"
  sounds.flyBy.play()
anime({ 
  targets: '#contentPlane',
  translateX: 130,
  backgroundSize:0,
  easing: "easeInQuad",
 duration: 2000
});
anime({ targets: '#transitionColor',
  translateX: 0,
backgroundColor: "#7BA8BF",
easing: "easeInQuad",
 duration: 2000
});



}
function next(){
  transition()
  sounds.background.fade(1, 0, 2400)
  setTimeout(function(){
    location.href="/background"
  },2500)
}

