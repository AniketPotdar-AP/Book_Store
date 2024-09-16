import React from "react";
import { Link } from "react-router-dom";
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
        <section className="max-w-2xl dark:text-white container mx-auto md:px-20 px-4">
            <div className="items-center pt-24 justify-center text-center">
                <form onSubmit={handleSubmit(onSubmit)} className="p-2 py-4 rounded-2xl">
                    <h3 className="font-bold text-xl">Signup</h3>
                    <p className="mt-10 flex flex-col gap-6 text-black">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Enter Full name" {...register("name", { required: true })} />
                        </label>
                        <span className="ml-2 error text-left">
                            {errors.name && <span>Name is required</span>}
                        </span>

                        <label className="input input-bordered flex items-center gap-2 mt-2">
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

                        <label className="input input-bordered flex items-center gap-2 mt-2">
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
                        <span className="ml-2 error text-left">
                            {errors.password && <span>Password is required</span>}
                        </span>
                    </p>

                    <p className='flex gap-6 flex-col items-center'>
                        <button className="btn btn-secondary mt-10 px-6">Signup</button>
                        <span>Have account? {" "}
                            <button className="cursor-pointer underline text-blue-600"
                                onClick={() => { document.getElementById('my_modal_3').showModal() }}
                            >Login</button>
                        </span>
                    </p>

                </form>
            </div>
        </section>
    );
};

export default Login;
