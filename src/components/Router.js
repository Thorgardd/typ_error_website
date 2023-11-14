
import Notfound  from "./404"
import Notimple  from "./501"

import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function Main() {
    return (
        <main>
            <Router>
                <Routes>
                <Route exact path="/" element={<Notimple/>} />

                <Route path="/T" element={<Notimple/>} />

                <Route path="/P" element={<Notimple/>} />

                <Route path="/T/:id" element={<Notimple/>} />

                <Route path="/Y/:id" element={<Notimple/>} />

                <Route path="/501" element={<Notimple/>} />

                <Route path="*" element={<Notfound/>} />
                </Routes>
            </Router> 
        </main>
    )
}

export default Main