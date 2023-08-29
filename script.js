const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline()

tl.from("#page1",{
    y:"100vh",
    scale:0.4,
    duration:0  
})
tl.to("#page1",{
    y:"60vh",
    delay:1,
    scale:0.1,
    duration:1,
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})