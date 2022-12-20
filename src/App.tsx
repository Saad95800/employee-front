import React,{useEffect} from 'react'
import './App.css'
import { useAppSelector } from './redux/Hooks'
import type {RootState} from './redux/Store'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './Components/Navigation/SideBar'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Home from './Pages/Dashboard/Dashboard'
import EmployeeList from './Pages/Employee/EmployeeList'
import Login from './Pages/Login/Login'
import Message from './Components/Message'

function App() {

  const connected = useAppSelector((state: RootState) => state.app.connected)
  const showMessage = useAppSelector((state) => state.message.showMessage)
  
  return (
    <div id="wrapper">

      {showMessage && <Message />}
      {connected && <SideBar />}
      <Routes>
          <Route path={`/`} element={<Login/>}/>
          <Route path={`/login`} element={<Login/>}/>
        {connected && <>
          <Route path={`/dashboard`} element={<Home/>}/>
          <Route path={`/employees`} element={<EmployeeList/>}/>
        </>}
      </Routes>

    </div>

  )
}

export default App
