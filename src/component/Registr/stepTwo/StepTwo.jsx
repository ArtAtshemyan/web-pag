import React from 'react';
import './StepTwo.css';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {idGenerator} from "../stepTre/idGenerator";


function StepTwo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const onSubmit = (data) => {
        dispatch({
            type: 'setUserEmail',
            payload: data.emails
        })
        dispatch({
            type: 'setUserTell',
            payload: data.phone
        })
        dispatch({
            type: 'setUserDate',
            payload: data.birthday
        })
        dispatch({
            type: 'setUserId',
            payload: idGenerator()
        })
        navigation('/registration/setData3');
    };
    return (
            <div>
                <form className='Form__Two' onSubmit={handleSubmit(onSubmit)}>

                    <p>Registration Step 2 Give us your address and phone number</p>

                    <label className='Form__Two__Lab'>Email address</label>

                    <input className='Form__Two__In' {...register("emails",
                        {required: {value: true, message:'Its required'},
                            pattern: {value:/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i, message:'Email No Validate'}})}
                    />

                    {errors.emails && <span className='errMas'>{errors.emails.message}</span>}

                    <label className='Form__Two__Lab'>phone number</label>

                    <input className='Form__Two__In' {...register("phone",
                        {required: true, pattern: {value:/^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{5})$/,message:'Phone No Validate'}})}
                    />

                    {errors.phone && <span className='Form__Two__errMas'>{errors.phone.message}</span>}

                    <label className='Form__Two__Lab'>Birthday month year</label>

                    <input  type='date' className='Form__Two__In' {...register("birthday",
                        {required: {value: true, message: 'is required'}})}
                    />

                    {errors.birthday && <span className='Form__Two__errMas'>{errors.birthday.message}</span>}

                    <button className='Form__Two__Btn'>Next</button>
                </form>
            </div>
    );
}

export default StepTwo;