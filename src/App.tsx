import './App.css'
import { To } from './components/To'
import { Timeline } from './components/Timeline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { AnimateViaProps } from './components/AnimateViaProps'
import { Testing } from './components/Testing'
import {Keyframes} from './components/Keyframes'


function App() {
    //using this to target element
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route path="/" element={<To />} />
                    <Route path="/1" element={<To />} />
                    <Route path="/2" element={<Timeline />} />
                    <Route path="/3" element={<AnimateViaProps />} />
                    <Route path="/4" element={<Keyframes />} />
                    <Route path="/testing" element={<Testing />} />
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App
