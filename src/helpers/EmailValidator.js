import React, { useState } from "react";
import { render } from "react-dom";


function EmailValidator (email) {


}
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

export default EmailValidator;
