import React from "react";
import Api from "../Api";
import './Login.css'

export default({onReceive}) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup()
        if(result){
            onReceive(result.user)
        }else{
            alert("error")
        }
    }

    return(
        <div className="login">
            <button onClick={handleFacebookLogin}> Logar com o Facebook</button>
        </div>
    )
}