import './App.css'
import { useAppSelector } from './redux/Hooks'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './Components/Navigation/SideBar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Dashboard/Dashboard'
import EmployeeList from './Pages/Employee/EmployeeList'
import Message from './Components/Message'

function App() {

  const showMessage = useAppSelector((state) => state.message.showMessage)
  
  return (
    <div id="wrapper">

      {showMessage && <Message />}
      <SideBar />
      <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/dashboard`} element={<Home/>}/>
          <Route path={`/employees`} element={<EmployeeList/>}/>
      </Routes>

    </div>

  )
}

export default App
