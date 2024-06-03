import React from "react";
import freeCourse from "../../public/freeCourses.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Cards from "./Cards";
import "swiper/css";
import "swiper/css/pagination";

const FreeCourse = () => {
    const filterData = freeCourse.filter((data) => data.category === "free");
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
                    modules={[Pagination]}
                    className="mySwiper mt-10 pb-14 "
                    loop={true}
                    pagination={{
                        clickable: true,
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
                        <SwiperSlide key={item.id} className="flex justify-center items-center">
                            <Cards item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default FreeCourse;
