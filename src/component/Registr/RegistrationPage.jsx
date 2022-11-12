import React from 'react';
import {Outlet} from "react-router";

function RegistrationPage() {

    return (
        <div className='Registration__Page'>
            <Outlet/>
        </div>
    );
}

export default RegistrationPage;