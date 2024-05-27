import { useContext } from "react"
import { SIPContext } from "../Providers/SIPContext"

 const SIPResult =() =>{
    const {Result} =useContext(SIPContext);

    return (
        <div className=" card p-5 mt-3 ">
            <h3 className="text-center text-light">Future Value:</h3>
        {Result && <h3 className="text-center "> ₹ {Result}</h3>}

   </div>
)

 }

 export default  SIPResult  




