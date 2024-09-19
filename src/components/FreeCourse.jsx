import React, { useEffect, useState } from "react";
import freeCourse from "../../public/freeCourses.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Cards from "./Cards";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const FreeCourse = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`https://book-store-backend-n1l8.onrender.com/getBooks`);
                setBook(res.data);
                console.log(res.data);

            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);
    const filterData = book.filter((data) => data.category === "free");
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto px-6 md:px-20 mt-16">
                <h1 className="font-bold text-2xl pb-2">Free Offered Courses</h1>
                <p className="mt-2 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, sequi
                    voluptas provident ipsum magni vero, praesentium repellat amet
                    temporibus, ratione rerum ipsam suscipit totam illum.
                </p>

                <Swiper
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper mt-10 pb-14"
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        910: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {filterData.map((item) => (
                        <SwiperSlide key={item._id} className="flex justify-center items-center h-full">
                            <Cards item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default FreeCourse;
