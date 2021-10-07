
import Sawo from "sawo"
import { React, useEffect } from "react";

const API_KEY = "7db5557d-bd1b-4a77-8b14-0a09da4f233e";

export default function Login() {
    function LoginCallback(payload) {
        console.log(payload)
    }
    useEffect(() => {
        const sawoConfig = {
            onSuccess: LoginCallback, //required,
    //required, must be one of: 'email', 'phone_number_sms',
            identifierType: 'email', 
            apiKey: API_KEY,
            containerID: "sawo-container",
        }
    
        let sawo = new Sawo(sawoConfig)
        sawo.showForm();
        
        
    }, [])
    
    return (  
        
        <div className="container">
            <br/>
            
            <div id="sawo-container" style={{height: "300px",width: "400px"}}></div>
        </div>
        
    )
}
