// pages/index.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Testimonial component with slider effect
const Testimonial = () => {
    const testimonialsData = [
        {
        quote: "The freshest fish I've ever received! The quality is exceptional, and their delivery is always on time.",
        author: "Emma R., Home Chef"
        },
        {
        quote: "Running a restaurant requires consistent, high-quality ingredients, and [Your Company Name] never disappoints.",
        author: "Michael T., Restaurant Owner"
        },
        {
        quote: "I was impressed with the variety of fish and frozen products available. The service was seamless.",
        author: "Sophia L., Busy Parent"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true
    };

    return (
        <div className="testimonial-slider-container">

        <h6 className="text-black text-2xl font-bold text-center">What our customers say</h6>
        <h6 className="text-black text-sm text-center">______________</h6>
        <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
            </div>
            ))}
        </Slider>
        <style jsx>{`
            .testimonial-slider-container {
            margin: 20px;
            padding: 20px;
            }
            .testimonial {
            text-align: center;
            padding: 20px;
            }
            .testimonial-quote {
            font-style: italic;
            color: #333;
            margin-bottom: 10px;
            }
            .testimonial-author {
            font-weight: bold;
            color: #555;
            }
        `}</style>
        </div>
    );
};


export default Testimonial;
