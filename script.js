// locomotive js github code 
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    // smooth: true
    smooth: false

});
// document.addEventListener("DOMContentLoaded", () => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true,
//     });
// });
// console.log("LocomotiveScroll initialized");

// gsap using for animation
function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter", function(){
    // alert("hey")
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })

})
videocon.addEventListener("mouseleave", function(){
    // playbtn.style.opacity = 0
    // playbtn.style.scale = 0
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-80
    })
})
}
videoconAnimation()

function loadinganimation(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-container", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })
}
loadinganimation()

//