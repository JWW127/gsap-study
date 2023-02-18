import './App.css'
import { To } from './components/To'
import { Timeline } from './components/Timeline'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'


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
                </Routes>
            </>
        </BrowserRouter>
    )
}

export default App
