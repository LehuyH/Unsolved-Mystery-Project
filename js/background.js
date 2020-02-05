//INIT
var sounds = {
  goodNight: new Howl({
    src: ['../assets/goodnight.wav']
  }),
  background: new Howl({
    src: ['../assets/background.mp3'],
    volume: 0.1,
    loop: true,

  }),
  flyBy: new Howl({
    src: ['../assets/flyby.wav']
  }),
  click: new Howl({
    src: ['../assets/ui/Click_Electronic_02.mp3']
  })


}
document.getElementById('contentPlane').style.visibility = "hidden"
document.getElementById('continue').addEventListener("click", next)

sounds.background.play()
var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'white',
  progressColor: 'purple'
});
wavesurfer.load('../assets/atc.wav');



//Transition IN

anime.timeline().add({
  targets: "#transitionColor",
  opacity: 0,
  duration: 1000,
  easing: "easeInQuad",
  delay: 500
}).add({
  targets: ["#header", "#leadIn"],
  opacity: [0, 1],
  translateY: [200, 0],
  duration: 500,
  easing: "easeInOutQuad",

})


function transition() {
  document.getElementById('contentPlane').style.transform = "translateX(-100%)"
  document.getElementById('transitionColor').style.transform = "translateX(-100%)"
  document.getElementById('transitionColor').style.opacity = "1"
  document.getElementById('contentPlane').style.visibility = "visible"
  sounds.flyBy.play()
  anime({
    targets: '#contentPlane',
    translateX: 130,
    backgroundSize: 0,
    easing: "easeInQuad",
    duration: 2000
  });
  anime({
    targets: '#transitionColor',
    translateX: 0,
    backgroundColor: "#7BA8BF",
    easing: "easeInQuad",
    duration: 2000
  });



}

function next() {
  sounds.click.play()
  transition()
  sounds.background.fade(1, 0, 2400)
  setTimeout(function () {
    location.href = "../disappearance/"
  }, 2500)
}

//PLAY

