

//INIT
var sounds = {
    goodNight : new Howl({
      src: ['../assets/goodnight.wav']
    }),
    background : new Howl({
      src: ['../assets/background.mp3'],
      volume: 0.5,
      loop:true,
      
    }),
    flyBy: new Howl({
      src: ['../assets/flyby.wav']
    }),
    click: new Howl({
      src: ['../assets/ui/Click_Electronic_02.mp3']
    })
  
  
  }
  document.getElementById('contentPlane').style.visibility="hidden"
   sounds.background.play()
    
  
  
  
  
  
   anime.timeline().add({
  targets: "#transitionColor",
  opacity: 0,
  duration: 1000,
  easing: "easeInQuad",
  delay:500
}).add({
  targets: "#header",
  opacity: 1,
  translateY:[500,0],
  duration: 1000,
  easing: "easeInOutQuad",

})
  

  
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
  
  //DEBUG
