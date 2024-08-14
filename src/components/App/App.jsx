import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.firstName) {
            newErrors.firstName = 'First Name cannot be empty';
            valid = false;
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last Name cannot be empty';
            valid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email Address cannot be empty';
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email Address is not valid';
            valid = false;
        }
        if (!formData.password) {
            newErrors.password = 'Password cannot be empty';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Ma'lumotlar serverga yuborilishi mumkin yoki boshqa harakatlar bajarilishi mumkin.
        }
    };

    return (
        <div className='intro'>
            <div className="container">
                <div className="intro__in">
                    <div className="intro__in__left">
                        <button className="button__one">Frontend va Backend</button>
                        <h2>Professional dasturchilarni kuzatib, dasturlashni o'rganing</h2>
                        <p>Qanday qilib tajribali dasturchilar haqiqiy vaqtda muammolarni hal qilishlarini ko'ring</p>
                        <button className='button__two'>Bepul 7 kun sinab ko'ring, so'ngra $20/oy</button>
                    </div>

                    <div className="intro__in__right">
                        <h2>Kursga ro'yxatdan o'ting va 7 kun bepul oling</h2>

                        <div className="input-group">
                            <input
                                className={`input ${errors.firstName ? 'input-error' : ''}`}
                                type="text"
                                name="firstName"
                                placeholder='First Name'
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`input ${errors.lastName ? 'input-error' : ''}`}
                                type="text"
                                name="lastName"
                                placeholder='Last Name'
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`input ${errors.email ? 'input-error' : ''}`}
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="input-group">
                            <input
                                className={`input ${errors.password ? 'input-error' : ''}`}
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <button onClick={handleSubmit}>Bepul sinovni talab qiling</button>
                        <p>Tugmani bosish orqali siz <span>Foydalanish shartlari</span> ga rozilik bildirasiz</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
