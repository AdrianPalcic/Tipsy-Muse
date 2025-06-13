import React from 'react'
import TestimonialCards from './cards/TestimonialCards'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Što kažu drugi?</h2>
            <p>Pogledaj što drugi kažu o našim radionicama</p>
            <div className="testimonials-card-container">
                <div className="testimonials-card-wrapper">
                    <TestimonialCards />
                    <TestimonialCards />
                    <TestimonialCards />
                </div>
            </div>
        </div>
    )
}

export default Testimonials