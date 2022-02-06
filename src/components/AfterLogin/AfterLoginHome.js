import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function AfterLoginHome() {
  return (
    <>
      <Navbar/>
      <Router>
                {/* <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/Signup" element={<Signup />} /> */}

                {/* </Routes> */}

            </Router>
    </>
  )
}

export default AfterLoginHome
