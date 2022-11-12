import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from "react-router";
import HomePage from "../component/Home/HomePage";
import LoginPage from "../component/Login/LoginPage";
import RegistrationPage from "../component/Registr/RegistrationPage";
import ClintPage from "../component/ClintPage/ClintPage";
import StepOne from "../component/Registr/stepOne/StepOne";
import StepTwo from "../component/Registr/stepTwo/StepTwo";
import StepTre from "../component/Registr/stepTre/StepTre";
import UserNew from "../component/ClintPage/userNews/userNew";
import UserPhoto from "../component/ClintPage/userPhoto/userPhoto";
import UserConfig from "../component/ClintPage/userConfig/userConfig";
import UserFriends from "../component/ClintPage/userFriends/userFriends";

function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}>
                        <Route path='' element={<LoginPage/>}/>
                        <Route path='login' element={<LoginPage/>}/>
                        <Route path='registration' element={<RegistrationPage/>}>
                            <Route path='' element={<StepOne/>}/>
                            <Route path='setData1' element={<StepOne/>}/>
                            <Route path='setData2' element={<StepTwo/>}/>
                            <Route path='setData3' element={<StepTre/>}/>
                        </Route>
                    </Route>
                    <Route path='*' element={<HomePage/>}/>

                    <Route path='clientPage' element={<ClintPage/>}>
                        <Route path='' element={<UserNew/>}/>
                        <Route path='friends' element={<UserFriends/>}/>
                        <Route path='photo' element={<UserPhoto/>}/>
                        <Route path='config' element={<UserConfig/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default MainRouter;