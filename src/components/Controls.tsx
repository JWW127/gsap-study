interface ControlProps {
   target: gsap.core.Timeline
}

export const Controls = (props: ControlProps) => {

    let controls = props.target

    return (
        <div>
            <button onClick={() => controls.play()}>PLAY</button>
            <button onClick={() => controls.pause()}>PAUSE</button>
            <button onClick={() => controls.reverse()}>REVERSE</button>
            <button onClick={() => controls.restart()}>RESTART</button>
        </div>
    )
}
