import React from 'react';
import './StepOne.css';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

function StepOne() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const onSubmit = (data) => {
        dispatch({
            type: 'setUserName',
            payload: data.firstName
        })

        dispatch({
            type: 'setUserSurname',
            payload: data.lastName
        })
        navigation('setData2');
    };

    return (
        <form className='FormOne' onSubmit={handleSubmit(onSubmit)}>
            <p>Registration pag Step 1 giv mi Your First and Last name </p>
            <label className='Form__Lab'>First Name</label>
            <input  className='Form__In' {...register("firstName",
                {required: {value: true, message:'Its required'}, pattern: {value:/^[A-Za-z]{4,15}$/i,message:'Invalid First Name'}})}
            />
            {errors.firstName && <span className='errMas'>{errors.firstName.message}</span>}
            <label className='Form__Lab'>Last Name</label>
            <input  className='Form__In' {...register("lastName",
                {required: {value: true, message:'Its required'}, pattern: {value:/^[A-Za-z]{4,15}$/i,message:'Invalid Last Name'}})}
            />
            {errors.lastName && <span className='errMas'>{errors.lastName.message}</span>}
            <button className='Form__Btn'>Next</button>
        </form>
    );
}

export default StepOne;