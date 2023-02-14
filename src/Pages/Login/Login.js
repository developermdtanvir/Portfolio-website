import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

export const Login = () => {
    const { loginWithEmailandPassword } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginWithEmailandPassword(data.email, data.password)
            .then(res => {
                navigate(from, { replace: true })
            });
    };
    return (
        <div className=' flex lg:flex-row md:flex-row'>
            <div className=' w-1/2'>
                <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='' />
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className=' w-1/2'>
                <form className=' sm:mr-auto form-control sm:grid-cols-1 grid grid-cols-2 gap-10' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' className=' sm:w-60  input input-primary' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='Email' className=' sm:w-60  input input-primary' required type='email' {...register("email", { pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} />
                    <input placeholder='Password' className=' sm:w-60  input input-primary' type='password' {...register("password", { pattern: /^(?=.*\d).+$/ })} required />
                    <input placeholder='Number' className=' sm:w-60  input input-primary' type="number" {...register("phone")} />
                    <input className=' sm:w-40 btn btn-success text-center' type="submit" />
                </form>
            </div>
        </div>
    )
}
