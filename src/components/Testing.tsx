import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Testing = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline()
                .to(".testing", {
                    keyframes: {
                        "10%": {x: -500},
                        "15%": { color: "#ff0a60", y: 0 },
                        "30%": { color: "#59ffb2", y: 300, rotation: 0, ease: "sine"},
                        "45%": { color: "#ff0a60", y: 1000, rotation: 360, ease: "bounce" },
                        "60%": { color: "#59ffb2", y: -75, rotation: -180, ease: "bounce" },
                        "75%": { color: "#ff0a60", y: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "#59ffb2", y: 0, scale: 1, ease: "sine" },
                        "100%": { color: "green", x: 400, ease: "power3" }
                    },
                    duration: 8
                })
        },root)
        return () => {ctx.revert()}

    }, [])

    return (
        <div ref={root} className="app">
            <div  className='testing'>hello</div>
        </div>
    )
}
