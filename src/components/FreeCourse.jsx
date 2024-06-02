import React from 'react'
import freeCourse from '../../public/freeCourses.json'

const FreeCourse = () => {
    return (
        <>
            <section className="max-w-screen-2xl flex gap-6 md:flex-row flex-col container mx-auto md:px-20 px-6">
                <div className="w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FreeCourse