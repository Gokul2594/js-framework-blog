import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Logout() {
    // Will execute when the component mounts
    useEffect(() => {
        Axios.post('/api/logout');
    }, []); // empty array wil cause the callback to execute when the component mounts
    return <Redirect to="/" />
}

export default Logout;