import './App.css'
import { To } from './components/To'
import { Timeline } from './components/Timeline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { AnimateViaProps } from './components/AnimateViaProps'


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
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App
