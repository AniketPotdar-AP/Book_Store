import React, { useEffect, useState } from "react";
import freeCourse from "../../public/freeCourses.json";
import Cards from "./Cards";
import "../styles/Course.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          `https://book-store-backend-n1l8.onrender.com/getBooks`
        );
        setBook(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-slate-800 dark:text-white container mx-auto md:px-20 px-4">
        <div className="pt-32 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-10 text-md leading-7">
            Explore our wide selection of books across all genres, from
            bestsellers and classics to hidden gems and new releases. Whether
            you're a casual reader or a passionate bibliophile, our cozy
            bookstore offers something for everyone. Let your next great read
            begin here!
          </p>
          <Link to={"/"}>
            <button className="btn btn-sm px-6 mt-8 bg-pink-500 text-white hover:bg-pink-500">
              Back
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-12 cards">
        {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
