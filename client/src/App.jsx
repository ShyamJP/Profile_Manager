import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Register from './Components/Form/Form'
import Home from './Components/Home/Home'
import Login from './Components/Login/login'
import Profile from './Components/UserProfile/profile'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import UpdateForm from './Components/UpdateForm/Form'

function App() {


  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          {/*<Route path='/profile/update/:id' element={<UpdateForm />}></Route> */}
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
