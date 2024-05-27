import { createContext, useState } from "react";



export const SIPContext=createContext()

export const SIPProvider =({children})=>{
 const [investment , setInvestment] = useState('')
 const [Rate ,setRate] =useState('')
 const [Years ,setYears] =useState('')
 const [Result , setResult] =useState('')

    const calculateSIP = () => {
        const n = 12 * Years;
        const r = Rate / 100 / 12;
        const sip = investment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        setResult(sip.toFixed(2));
    };


return(
    <SIPContext.Provider value={{investment, setInvestment,  Rate, setRate, calculateSIP, Years , setYears, Result, setResult}}>
        {children}
    </SIPContext.Provider>
)





}























