import React, {useEffect,useState} from 'react';
import './StepTre.css';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";


function StepTre() {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const setInfo = useSelector((store)=>{
        return store.registration.user;
    })

    const [usersList, setUsersList] = useState([]);

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(usersList));
        console.log(usersList)
    },[usersList])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit  = (data) => {
        if (data.passwords === data.password_repeat){
            dispatch({
                type: 'setUserPassword',
                payload: data.password_repeat
            })

            let customUser={
                id: setInfo.id,
                name: setInfo.name,
                surname: setInfo.surname,
                email: setInfo.email,
                tell: setInfo.tell,
                photo: setInfo.photo,
                password:data.password_repeat,
                friends: [],
                news: [],
                gallere: {photo:[setInfo.photo]},
                config: {
                    id: setInfo.id,
                    name: setInfo.name,
                    surname: setInfo.surname,
                    email: setInfo.email,
                    tell: setInfo.tell,
                    password: data.password_repeat
                }
            }
            setUsersList([...usersList,customUser]);
            let time = setTimeout(()=>{
                navigation('/login');
                clearTimeout(time);
            },2000)
        }
    };
    return (
        <div>
            <form className='FormTre' onSubmit={handleSubmit(onSubmit)}>
                <p>Registration pag Step 3 enter password </p>
                <label className='Tre__Form__Lab'>Password</label>
                <input type='password' className='Tre__Form__In'
                       {...register("passwords",
                               {required: {value: true, message:'Its required'},minLength:{value: 8,message:"Error valid"}})}
                />
                {errors.password && <span className='errMas'>{errors.password.message}</span>}
                <label className='Tre__Form__Lab'>confirm password</label>
                <input   type='password' className='Tre__Form__In'
                         {...register("password_repeat",
                             {required: {value: true, message:'Its required'},
                                 minLength:{value: 8,message:"Error valid"}
                             })}
                />
                {errors.password_repeat && <span className='errMas'>{errors.password_repeat.message}</span>}

                <button className='Tre__Form__Btn'>Next</button>
            </form>
        </div>
    );
}
export default StepTre;


















