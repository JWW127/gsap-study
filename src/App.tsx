import './App.css'
import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

function App() {
    //using this to target element
    const root = useRef(null);

    // this is what is calling at load
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".one", { rotation: 360 })
            gsap.to(".two", { rotation: 180 })
            gsap.timeline().to(".three", { x: -50, y: -50}).to(".three", {x: 0, y: 0})
        }, root)

        return () => ctx.revert()
    }, [])
    return (
        <div ref={root} className="app">
            <div className="one">ONE</div>
            <div className="two">TWO</div>
            <div className="three">THREE</div>
        </div>
    )
}

export default App
