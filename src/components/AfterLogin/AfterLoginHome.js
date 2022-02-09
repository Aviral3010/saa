import React,{useContext} from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import userContext from '../../context/user/usercontext'




function AfterLoginHome() {
const a=useContext(userContext)

  return (
    <>
      <Navbar/>
      <Sidebar/>

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
