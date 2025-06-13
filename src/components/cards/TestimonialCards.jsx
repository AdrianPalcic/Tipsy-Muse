import { Star } from 'lucide-react'
import React from 'react'

const TestimonialCards = () => {
    return (
        <div className="testimonial-card">
            <div className="stars">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
            </div>
            <h3>Super radno okruženje i jako zabavna radionica</h3>
            <span>Ana K.</span>
        </div>
    )
}

export default TestimonialCards