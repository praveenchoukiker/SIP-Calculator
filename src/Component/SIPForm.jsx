import React, { useContext } from 'react'
import { SIPContext } from '../Providers/SIPContext'

const SIPForm = () => {
     
 const {
    investment , setInvestment, 
    Rate , setRate,
     Years, setYears , calculateSIP
     } = useContext(SIPContext);


 const handleSubmit =(e) => {
    e.preventDefault ();
    calculateSIP();
 }


  return (

    <div className="card p-5">
    <h1 className='text-center h2 p-1  justify-content-center  rounded-3 bg- text-light'>SIP Calculator</h1>
    <form onSubmit={handleSubmit} className='text-center mt-3 ' >
      <span className='d-flex w-100 justify-content-between '>
      <label className='h5'> Monthly Investment  :</label>
      <input type="" 
      value={investment} 
      placeholder='Enter Amount'
      onChange={(e) => setInvestment(e.target.value)}
      className='w-50 mx-2'/>

      </span>
      <span className='d-flex w-100 mt-2 justify-content-between'>
      <label className='h5'> Annual Rate of Intrest (%) :</label>
      <input type="" value={Rate} 
      placeholder='Enter Rate'
      onChange={(e) => setRate(e.target.value)} 
      className='w-50 mx-2'/>

      </span>
      <span className='d-flex w-100 mt-3 justify-content-between'>
      <label className='h5'> Number Of year :</label> 
      <input type="" value={Years} 
      placeholder='Enter Year'
      onChange={(e) => setYears(e.target.value)}
      className='w-50 mx-2'/>

      </span>

          <button  type="submit" className='btn btn-success w-100 mt-2'>Click</button>

    </form>
        
</div>


)
}

export default SIPForm





