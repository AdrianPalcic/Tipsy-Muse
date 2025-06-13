import React, { useState } from 'react'

const CTAHome = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form data if needed
        setFormData({ name: '', email: '', message: '' });
    }


    return (
        <div className="cta-home">
            <div className="cta-form">
                <p>Dođi se zabaviti!</p>
                <h2>Kontaktiraj nas</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Ime i prezime</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <label htmlFor="message">Poruka</label>
                    <textarea
                        rows="10"

                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    ></textarea>
                    <button type='submit' className="formButton">Pošalji</button>
                </form>
            </div>
            <div className="cta-image">
                <img src="/cta-image (2).png" alt="Contact Us" loading='lazy' />
            </div>
        </div>
    )
}

export default CTAHome