import React, {useCallback, useEffect, useState} from 'react';
import './ClientPage.css';
import {useSelector,useDispatch} from "react-redux";
import {useNavigate,Outlet} from "react-router";
import {BsBellFill,BsPersonBoundingBox,BsPersonLinesFill,BsPeopleFill} from 'react-icons/bs';


function ClintPage() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type: 'getUser',
        });
    },[])

    const navigation = useNavigate();

    const userInfo = useSelector((store)=>{
        return store.fetchUser.fetchData;
    })

    const navFriends = useCallback(()=>{
        navigation('friends');
    },[]);

    const navPhoto = useCallback(()=>{
        navigation('photo');
    },[]);

    const navNews = useCallback(()=>{
        navigation('');
    },[]);

    const navConfig = useCallback(()=>{
        navigation('config');
    },[]);

    return (
        <div className='ClintPage'>
            <div className='Clint__Page__Header'>
                <div className='Clint__Page__Photo'>
                    <img src="" alt=""/>
                </div>
                <div className='Clint__Page__Name'>
                    <div className='Users__Info'>
                        <span className='UserInfos User__Name'>{userInfo.name}</span>
                        <span className='UserInfos User__LastName'>{userInfo.surname}</span>
                    </div>
                </div>
                <div className='Users__Menu'>
                    <span className='icons'><BsBellFill id='BsBellFill' onClick={navNews}/></span>
                    <label className='icons__label'>New</label>
                    <span className='icons' ><BsPersonBoundingBox className='BsFileEarmarkPersonFill' onClick={navPhoto}/></span>
                    <label className='icons__label'>Photo</label>
                    <span className='icons' ><BsPeopleFill className='BsPeopleFill' onClick={navFriends}/></span>
                    <label className='icons__label'>Friends</label>
                    <span className='icons' ><BsPersonLinesFill className='BsPersonLinesFill' onClick={navConfig}/></span>
                    <label className='icons__label'>Config</label>
                </div>
            </div>
            <div className='Clint__Page__Main'>
                <Outlet/>
            </div>
        </div>
    );
}

export default ClintPage;