import React from "react";

const Contact = () => {
    return (
        <>
            <section className="max-w-screen-2xl text-black container mx-auto md:px-20 px-4">
                <div className="items-center pt-24 justify-center text-center">
                    <section className=" rounded-2xl">
                        <div className=" py-6 px-2 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                Contact Us
                            </h2>
                            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                                We're here to help with any questions or concerns you have,
                                whether it's about finding a specific book, getting assistance
                                with an order, or sharing your love for reading.{" "}
                            </p>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70"
                                        >
                                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                        </svg>
                                        <input type="text" className="grow" placeholder="Email" />
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="input input-bordered w-full grow "
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className="textarea textarea-bordered w-full h-44 grow"
                                        placeholder="Leave a comment"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-secondary">
                                    Contact US
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Contact;
