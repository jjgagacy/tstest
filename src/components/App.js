import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Index from './index';
import About from './about';
import Contact from "./contact";
import Count from "./count";
function App() {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/count" element={<Count />} />
            </Routes>
        </BrowserRouter>
    </div>)
}
export default App;

