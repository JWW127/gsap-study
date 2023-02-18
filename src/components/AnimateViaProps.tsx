import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

interface Props {
    children: React.ReactNode
    className: string
    anime: string
}

const Reuseable = ({ children, className, anime }: Props) => {
    return <div className={className} data-animate={anime}>{children}</div>
}

export const AnimateViaProps = () => {
    //useRef to get targets via dom descendants
    const root = useRef(null)

    useLayoutEffect(() => {
        // use context to get multiple animations
        const ctx = gsap.context(() => {

            gsap.to("[data-animate='rotate']", { duration: 2, rotation: 1080, ease: "elastic" })
            gsap.timeline()
                .to(".seven", { duration: 1, x: 400 })
                .to(".seven", { duration: 2, x: 0, ease: "back" })
            //notice the next animation does both this and the anime='rotate'
            gsap.from(".nine", { duration: 2, y: 400, ease: "back" })

        }, root)

        //cleanup goes here
        return () => ctx.revert()

    }, [])

    // notice how we can reuse the animation component here
    return (
        <div className='app' ref={root}>
            <Reuseable className="seven" anime="">SEVEN</Reuseable>
            <Reuseable className="eight" anime="rotate">EIGHT</Reuseable>
            <Reuseable className="nine" anime="rotate">NINE</Reuseable>
            <pre>{`
            <Reuseable className="seven" anime="">SEVEN</Reuseable>
            <Reuseable className="eight" anime="rotate">EIGHT</Reuseable>
            <Reuseable className="nine" anime="rotate">NINE</Reuseable>

            See repo for how animation props are passed
`}</pre>
        </div>
    )
}
