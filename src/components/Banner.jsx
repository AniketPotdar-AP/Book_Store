import React from "react";
import BannerImg from "../assets/Banner.png";

const Banner = () => {
    return (
        <>
            <section className="max-w-screen-2xl flex gap-6 md:flex-row flex-col container mx-auto md:px-20 px-6">
                <div className="md:w-1/2 order-2 md:order-1 w-full space-y-12 mt-8 md:mt-40">
                    <h1 className="text-4xl font-bold leading-normal">
                        Hello, Welcome to learn something
                        <span className="text-pink-500"> new everyday !!! </span>
                    </h1>
                    <p className="text-lg">
                        Explore our wide selection of books across all genres, from
                        bestsellers and classics to hidden gems and new releases. Whether
                        you're a casual reader or a passionate bibliophile, our cozy
                        bookstore offers something for everyone. Let your next great read begin here!
                    </p>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70 dark:fill-black"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow dark:text-black" placeholder="Email" />
                        </label>

                        <button className="btn btn-secondary mt-6">Contact US</button>
                    </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 w-full mt-28 md:mt-28">
                    <img src={BannerImg} alt="" />
                </div>
            </section>
        </>
    );
};

export default Banner;
