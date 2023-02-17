import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const To = () => {
    const root = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".one", { rotation: 360 })
            gsap.from(".two", { y: 200, rotation: 180 })
            gsap.fromTo(".three", { x: -50, y: -50 }, { x: 0, y: 0, duration: 2 })
        }, root)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={root} className="app">
        <h1>to & from:</h1>
            <div className="one">ONE</div>
            <div className="two">TWO</div>
            <div className="three">THREE</div>
            <pre>{`
            gsap.to(".one", { rotation: 360 })
            gsap.from(".two", { y: 200, rotation: 180 })
            gsap.fromTo(".three", { x: -50, y: -50 }, { x: 0, y: 0, duration: 2 })
`}</pre>
        </div>
    )

}
