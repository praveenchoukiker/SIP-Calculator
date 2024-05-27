import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SIPForm from './Component/SIPForm'
import { SIPProvider } from './Providers/SIPContext'
import SIPResult from './Component/SIPResult'

const App = () => {
   const [dark , setDark]= useState(false);
   const changeTheme =() =>{
    if(dark) {
      setDark(false);

    }else{
      setDark(true);

    }
    
   }


  return (

    <SIPProvider>
        <Navbar changeTheme ={changeTheme} />
        <div id='consfl' className={dark ? "container-fluid p-5 bg-secondary" : "container-fluid p-5 "}>
        <SIPForm/>


              <SIPResult/>

        </div>
    </SIPProvider>
  )
}

export default App
