import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Timeline = () => {

    const timelineRoot = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.timeline()
                .to(".four", { duration: 2, x: 100, y: 100 })
                .to(".four", { duration: 2, x: 0, y: 0, })

            gsap.timeline()
                .fromTo(".five", { x: 300, y: 300 }, { duration: 1, x: -300, y: 600, scale: 2 })
                .to(".five", { duration: 1, x: 0, y: 0, scale: 1 })

            gsap.timeline()
                .from(".six", { duration: 1, x: -300 })
                .to(".six", { duration: 1, x: 300 })
                .to(".six", { duration: 1, x: 0, ease: "back" })

        }, timelineRoot)
        // the following line cleansup code, you can even add event listeners
        return () => { ctx.revert() }

    }, [])

    return (
        <div ref={timelineRoot} className='app'>
            <h1>timelines:</h1>
            <div className="four">FOUR</div>
            <div className="five">FIVE</div>
            <div className="six">SIX</div>
            <pre>{`
            gsap.timeline().to(".four", { duration: 2, x: 100, y: 100 }).to(".four", { duration: 2, x: 0, y: 0, })
            gsap.timeline().fromTo(".five", { x: 300, y: 300 }, { duration: 1, x: -300, y: 600, scale: 2 }).to(".five", { duration: 1, x: 0, y: 0, scale: 1 })
            gsap.timeline().from(".six", { duration: 1, x: -300 }).to(".six", { duration: 1, x: 300 }).to(".six", { duration: 1, x: 0, ease: "back" })
`}</pre>
        </div>
    )
}
