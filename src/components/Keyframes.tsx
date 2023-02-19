import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Keyframes = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline()
                .to(".ten", {
                    keyframes: {
                        "10%": { x: -500 },
                        "15%": { color: "wheat", y: 0 },
                        "30%": { color: "black", y: 300, rotation: 0, ease: "sine" },
                        "45%": { color: "purple", y: 1000, rotation: 360, ease: "bounce" },
                        "60%": { color: "black", y: -75, rotation: -180, ease: "bounce" },
                        "75%": { color: "red", y: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "black", y: 0, scale: 1, ease: "sine" },
                        "100%": { color: "green", x: 0, ease: "power3" }
                    },
                    duration: 5
                })
            gsap.timeline()
                .to(".eleven", {
                    keyframes: {
                        "10%": { y: 500 },
                        "15%": { color: "yellow", x: 0 },
                        "30%": { color: "blue", x: 300, rotation: 0, ease: "sine" },
                        "45%": { color: "yellow", x: 1000, rotation: 360, ease: "bounce" },
                        "60%": { color: "blue", x: -75, rotation: -180, ease: "bounce" },
                        "75%": { color: "yellow", x: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "blue", x: 0, scale: 1, ease: "sine" },
                        "100%": { color: "orange", y: 0, ease: "power3" }
                    },
                    duration: 6
                })
            gsap.timeline()
                .to(".twelve", {
                    keyframes: {
                        "10%": { x: -500 },
                        "15%": { color: "#271650", y: 0 },
                        "30%": { color: "#59ffb2", rotation: 0, ease: "sine" },
                        "45%": { color: "#271650", rotation: 1360, ease: "bounce" },
                        "60%": { color: "#59ffb2", y: -75, rotation: -1080, ease: "bounce" },
                        "75%": { color: "#271650", y: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "#59ffb2", y: 0, scale: 1, ease: "sine" },
                        "100%": { color: "#271650", x: 0, ease: "power3" }
                    },
                    duration: 7
                })

        }, root)
        return () => { ctx.revert() }

    }, [])

    return (
        <div ref={root} className="app">
            <div className='ten'>10</div>
            <div className='eleven'>11</div>
            <div className='twelve'>12</div>
            <pre className='presmall'>
                {`
            gsap.timeline()
                .to(".ten", {
                    keyframes: {
                        "10%": { x: -500 },
                        "15%": { color: "wheat", y: 0 },
                        "30%": { color: "black", y: 300, rotation: 0, ease: "sine" },
                        "45%": { color: "purple", y: 1000, rotation: 360, ease: "bounce" },
                        "60%": { color: "black", y: -75, rotation: -180, ease: "bounce" },
                        "75%": { color: "red", y: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "black", y: 0, scale: 1, ease: "sine" },
                        "100%": { color: "green", x: 0, ease: "power3" }
                    },
                    duration: 5
                })
            gsap.timeline()
                .to(".eleven", {
                    keyframes: {
                        "10%": { y: 500 },
                        "15%": { color: "yellow", x: 0 },
                        "30%": { color: "blue", x: 300, rotation: 0, ease: "sine" },
                        "45%": { color: "yellow", x: 1000, rotation: 360, ease: "bounce" },
                        "60%": { color: "blue", x: -75, rotation: -180, ease: "bounce" },
                        "75%": { color: "yellow", x: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "blue", x: 0, scale: 1, ease: "sine" },
                        "100%": { color: "orange", y: 0, ease: "power3" }
                    },
                    duration: 6
                })
            gsap.timeline()
                .to(".twelve", {
                    keyframes: {
                        "10%": { x: -500 },
                        "15%": { color: "#271650", y: 0 },
                        "30%": { color: "#59ffb2", rotation: 0, ease: "sine" },
                        "45%": { color: "#271650", rotation: 1360, ease: "bounce" },
                        "60%": { color: "#59ffb2", y: -75, rotation: -1080, ease: "bounce" },
                        "75%": { color: "#271650", y: 0, scale: 2, rotation: 0, ease: "back" },
                        "90%": { color: "#59ffb2", y: 0, scale: 1, ease: "sine" },
                        "100%": { color: "#271650", x: 0, ease: "power3" }
                    },
                    duration: 7
                })
            `}</pre>
        </div>
    )
}

