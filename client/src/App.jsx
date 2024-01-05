import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Register from './Components/Form/Form'
import User from './Components/User/user'
import Home from './Components/Home/Home'
import Login from './Components/Login/login'
import Profile from './Components/UserProfile/profile'
function App() {


  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/user' element={<User />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
