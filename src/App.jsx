import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
// import LoginLayout from './Components/Login/LoginLayout'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'


const App = () => {
  return (
<>
<BrowserRouter>
<Routes>


 
  <Route path="/" element={<Login/>}/>
    
  <Route path='/home' element={<Layout/>} >
    <Route index element={<Home/>}/>
  </Route>

  

</Routes>
</BrowserRouter>

</>  )
}

export default App