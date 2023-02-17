<div align="center">
<h1>GSAP Study</h1>
</div>
<hr/>

## What is this?

This is inteded on being a deep dive study of GSAP in combination with React.

## Install

You can get started with GSAP and React @ [GSAP](https://greensock.com/react/)

# CCC - Notes
# Basic Tween(between)
The basic syntax for a to() tween is as follows:

***
gsap.to(".fred", {x:400}); 
===
Animates the element with a class of “fred” to an x position of 400.
If you do not specify a duration, gsap will use the default which is 0.5 seconds (500ms).

You can change the default duration using:

gsap.defaults({duration:1});
===
Behind the scenes gsap changes the target’s inline style during the animation.
*** 
For best performance animate CSS Transform values and opacity:
===
x
y
rotation
rotationX
rotationY
skewX and skewY
scaleX, scaleY, or just scale

***
GSAP can animate any numeric property you throw at it.
===
width and height
backgroundColor *hyphenated values need to be camelCase
color
padding
left and top (must set position to relative, absolute, or fixed)
vh and vw

***
Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be. 
===

# to() from() fromTo()
gsap.to("target", {vars})  -this is the destination
***
gsap.from("target", {vars}) -this is your starting point
***
gsap.fromTo("target", {starting vars}, {ending vars, duration:1}) -both your start and end

# special properties

duration: number
    - number of secods for animation to finish, default: .5
***
repeat: number
    - number of times to repeat animation, set -1 for infinite
***
delay: number
    - number of seconds to delay after load to start animation
***
repeatDelay: number
    - number of seconds delay between repeats
***
yoyo: boolean
    - set animation to play in forward then reverse for every repeat
***
paused: boolean
    - set animation to start off paused
# ease properties
*** 
ease: "bounce.in | out | inOut"
***
ease: "power0" 
***
ease: "power1.in | out | inOut"
***
ease: "power2.in | out | inOut"
***
ease: "power3.in | out | inOut"
***
ease: "back.in | out | inOut(strength: number)"
***
ease: "elastic.in | out | inOut(strength: number, elasticity: 0-1)"
***
ease: "slow(center: 0-1, edges: 0-1, mirror: bool)"
***
ease: "steps(number: >=1)"
***
ease: "circle.in | out | inOut"
***
ease: "expo.in | out | inOut"
***
ease: "sine.in | out | inOut"
***
visual examples https://greensock.com/docs/v3/Eases?ref=6234
# stagger properties
gsap.to("multipleTargets", {stagger: {staggerVars}})
---
EXAMPLE
gsap.to("targets", {scale: 1, stagger: {amount: 5, from: "center", ease: "power2"}})
---
***
stagger: {each: 0-1}
    - time between each element start
***
stagger: {amount: number}
    - total time split between all elements
***
stagger: {from: string}
    - indicates starting location "end", "center", "edges" default is front
 ***
stagger: {ease: string, amount: number}
    - ease + amount to define a curved stagger animation
# add controls 
```html
<button id="play">play</button>
<button id="pause">pause</button>
<button id="reverse">reverse</button>
<button id="restart">restart</button>
<div class="target">hello</div>
```
```javascript
let controls = gsap.to("target", {duration:3, x600, ease: "linear", paused:true})
document.getElementById("play").onclick = () => controls.play()
document.getElementById("pause").onclick = () => controls.pause()
document.getElementById("reverse").onclick = () => controls.reverse()
document.getElementById("restart").onclick = () => controls.restart()
```

