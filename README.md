<div align="center">
<h1>GSAP Study</h1>
<img src="./public/gsap-logo.gif" alt="gsap-logo">
</div>
<hr/>

## What is this?

This is inteded on being a deep dive study of GSAP in combination with React.

## Install

You can get started with GSAP and React @ [GSAP](https://greensock.com/react/) <br/>
Visit my [DEMO](https://gssap-study.netlify.com) site.

## Notes
## Basic Tween(between)
The basic syntax for a to() tween is as follows:

`gsap.to(".fred", {x:400});`
<div>
Animates the element with a class of “fred” to an x position of 400. <br/>
If you do not specify a duration, gsap will use the default which is 0.5 seconds (500ms).

</div>

You can change the default duration <br/>
`gsap.defaults({duration:1});`

Set absolute condition (scale in example) <br/>
`gsap.set("target", {scale: 0.8})`

<div>
Behind the scenes gsap changes the target’s inline style during the animation.
</div>
For best performance animate CSS Transform values and opacity:
<div>
<ul>
<li>x</li>
<li>xPercent</li>
<li>y</li>
<li>yPercent</li>
<li>rotation</li>
<li>rotationX</li>
<li>rotationY</li>
<li>skewX and skewY</li>
<li>scaleX, scaleY, or just scale</li>
</ul>
</div>

<h2>GSAP can animate any numeric property you throw at it.</h2>
<div>
<ul>
<li>width and height</li>
<li>backgroundColor *hyphenated values need to be camelCase</li>
<li>color</li>
<li>padding</li>
<li>left and top (must set position to relative, absolute, or fixed)</li>
<li>vh and vw</li>
</ul>
</div>

```diff
! Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance. For a few tweens, it’s not the end of the world as some purists make it out to be. 
```

## to() from() fromTo()
```javascript
gsap.to("target", {vars})  -this is the destination
gsap.from("target", {vars}) -this is your starting point
gsap.fromTo("target", {starting vars}, {ending vars, duration:1}) -both your start and end
```

## special properties

`duration: number`
    - number of secods for animation to finish, default: .5 <br/>
`repeat: number`
    - number of times to repeat animation, set -1 for infinite <br/>
`delay: number`
    - number of seconds to delay after load to start animation <br/>
`repeatDelay: number`
    - number of seconds delay between repeats <br/>
`yoyo: boolean`
    - set animation to play in forward then reverse for every repeat <br/>
`paused: boolean`
    - set animation to start off paused <br/>
## ease properties
```
ease: "bounce.in | out | inOut"
ease: "power0" 
ease: "power1.in | out | inOut"
ease: "power2.in | out | inOut"
ease: "power3.in | out | inOut"
ease: "back.in | out | inOut(strength: number)"
ease: "elastic.in | out | inOut(strength: number, elasticity: 0-1)"
ease: "slow(center: 0-1, edges: 0-1, mirror: bool)"
ease: "steps(number: >=1)"
ease: "circle.in | out | inOut"
ease: "expo.in | out | inOut"
ease: "sine.in | out | inOut"
```
[visual examples](https://greensock.com/docs/v3/Eases?ref=6234)
## stagger properties
`gsap.to("multipleTargets", {stagger: {staggerVars}})`

EXAMPLE
```javascript
gsap.to("targets", {scale: 1, stagger: {amount: 5, from: "center", ease: "power2"}})
```
`stagger: {each: 0-1}`
    - time between each element start <br/>
`stagger: {amount: number}`
    - total time split between all elements <br/>
`stagger: {from: string}`
    - indicates starting location "end", "center", "edges" default is front <br/>
`stagger: {ease: string, amount: number}`
    - ease + amount to define a curved stagger animation <br/>

## position parameter with timelines
timelines allow us to chain tweens together
```javascript
gsap.timeline().to("target", {vars}, "timeline positions params")
```
<h4>example timeline position params</h4>
`+=1`
    - start 1 second after previous animation ends <br/>
`-=1`
    - start 1 second before previous animation ends <br/>
`<`
    - start when previous starts <br/>
`<1`
    - start 1 second after previous starts <br/>
`2`
    - start exactly at 2s <br/>
```javascript
//timelines themselves can have args. https://greensock.com/docs/v3/GSAP/Timeline
gsap.timeline({default:{vars}}).to("target", {vars}, "position params")
//defaults are applied to all chained tweens, unless conflict then tween will override default
```

## add controls 

```html
<button id="play">play</button>
<button id="pause">pause</button>
<button id="reverse">reverse</button>
<button id="restart">restart</button>
<button id="test">text</button>
<div class="target">hello</div>
```
```javascript
let controls = gsap
                .timeline().to("target", {duration:3, x:600, ease: "linear", paused:true})
                .add("test") // <-- our 'test' button will jump animation here
                .to("target", {duration:3, x:600, ease: "linear", paused:true})
document.getElementById("play").onclick = () => controls.play()
document.getElementById("pause").onclick = () => controls.pause()
document.getElementById("reverse").onclick = () => controls.reverse()
document.getElementById("test").onclick = () => controls.play("test") //use test for exact time
document.getElementById("restart").onclick = () => controls.restart()
```
can be used to add quick and dirty controls to work with project

```diff
! GSAP offers a dev tools although its not free.
adding ' GSDevTools.create() ' will pin it to the bottom of working animation
```
## react gsap component basics
```javascript
export const Component = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
                //put all your animations here
            gsap.to(".target", { duration: 1, x: 50 })
            gsap.to(".target", { duration: 1, x: 50 })
            gsap.to(".target", { duration: 1, x: 50 })
        }, root)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={root} className="app">
            <div className="target">Target</div>
        </div>
    )
```

## keyframes
keyframes are really good for fine grained animation detail
```javascript
gsap.timeline()
    .to(".ten", {
        keyframes: {
            "10%": {vars},
            "15%": {vars},
            "25%": {vars},
            "35%": {vars},
            "55%": {vars},
            "75%": {vars},
            "99.99%": {vars},
            "100%": {vars}
        },
        duration: 5
    })
```
