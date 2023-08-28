import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Navbar/Navbar'
import Add from './Pages/Add'


const App=()=>{
  return(
    <div>
       <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />}  /> 
          <Route path='/Add'element={<Add />} />   
           </Routes>
      </div>
     

    </div>
  )
}
export default App;