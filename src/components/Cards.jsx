import React from "react";

const Cards = ({ item }) => {
    return (
        <>
            <div className="card dark:bg-slate-800 dark:text-white dark:border mt-10 w-80 bg-base-100 shadow-xl cursor-pointer mx-auto hover:scale-105 duration-200">
                <figure>
                    <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <div className="badge badge-secondary">{item.category}</div>
                    <h2 className="card-title">
                        {item.name}
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between mt-2">
                        <div className="btn btn-sm  dark:bg-slate-800 dark:text-white bg-white border-2 border-black dark:border-white hover:border-black rounded-2xl hover:bg-white">
                            {item.price}
                        </div>
                        <div className=" btn btn-sm dark:bg-slate-800 dark:text-white bg-white hover:text-white  border-2 dark:border-white border-black rounded-2xl dark:hover:bg-pink-500 hover:bg-pink-500 duration-200">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
