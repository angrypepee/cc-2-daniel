import React from 'react';
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
      
        return (
          <div className="testimonial-container">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">— {testimonial.author}</p>
              </div>
            ))}
            <style jsx>{`
              .testimonial-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px;
                background-color: #f7f9fc;
                border-radius: 10px;
                box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
              }
              .testimonial {
                max-width: 600px;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
                text-align: center;
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
