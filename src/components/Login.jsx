import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import '../styles/login.css'

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to={'/'} onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-xl">Login</h3>
                        <p className="mt-10 flex flex-col gap-6">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })} />
                            </label>
                            <span className="ml-2 error text-left">
                                {errors.email && <span>Email is required</span>}
                            </span>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" placeholder="Password" className="grow" {...register("password", { required: true })} />
                            </label>
                            <span className="ml-2 error">
                                {errors.password && <span>Password is required</span>}
                            </span>
                        </p>
                        <p className='flex gap-6 flex-col items-center'>
                            <button className="btn btn-secondary mt-10">Login</button>
                            <button>Not Registered? {" "}
                                <Link to={'/signup'} onClick={() => document.getElementById("my_modal_3").close()} className="cursor-pointer underline text-blue-600">Signup</Link>
                            </button>
                        </p>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login