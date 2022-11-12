import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './LoginPage.css';
import {useNavigate} from "react-router";
import {useDispatch,useSelector} from "react-redux";

function LoginPage() {

    useEffect(()=>{
        dispatch({
            type: 'getUser',
        });
    },[]);

    const user = useSelector((store)=>{
        return store.fetchUser.fetchData;
    });

    const [fetchInfo,setFetchInfo] = useState({});

    useEffect(()=>{
        setFetchInfo(user);
    },[user]);

    const [status,setStatus] = useState(false);

    const [email,setEmail] = useState('');

    const emailSet = useCallback((e)=>setEmail(e.target.value),[email]);

    const [logoutEmail,setLogoutEmail] = useState('');

    const [logoutPassword,setLogoutPassword] = useState('');

    const [password,setPassword] = useState('');

    const passwordSet = useCallback((e)=>{setPassword(e.target.value)},[password]);

    useEffect(()=>{
        setLogoutEmail(fetchInfo.email);
        setLogoutPassword(fetchInfo.password);
    },[fetchInfo,logoutPassword,logoutPassword]);

    const dispatch = useDispatch();

    const navigation = useNavigate();


    const goClientPage = useCallback (()=>{
        if (email === logoutEmail && password === logoutPassword){
            console.log('Validation')
            setStatus(true)
        }
    },[password,email,logoutEmail,logoutPassword]);

    useEffect(()=>{
        if (status){
            let timer = setTimeout(()=>{
                navigation('/clientPage')
                clearTimeout(timer);
            },2000);
        }
    },[status]);

    return (
        <div className='Login__Page'>
            <div className='Login__Form'>
                <form className='Form__Form'>
                    <p className='Login__p'> Login Page </p>
                    <label className='Form__Label'>Email</label>
                    <input className='Form__Input' value={email} onChange={(e)=>emailSet(e)} type='text'/>
                    <label className='Form__Label'>Password</label>
                    <input className='Form__Input' value={password} onChange={(e)=>{passwordSet(e)}} type='password'/>
                    <div className='Submit' onClick={(e)=>{
                        e.preventDefault();
                        goClientPage();
                    }} >Send</div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;