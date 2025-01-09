"use client";

import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        emailOrPhoneOrUsername: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email, Phone, or Username</label>
                        <input
                            type="text"
                            name="emailOrPhoneOrUsername"
                            value={formData.emailOrPhoneOrUsername}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-6 flex justify-between items-center">
                    <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200">
                        <FaGoogle className="mr-2" /> Sign up with Google
                    </button>
                    <button className="flex items-center bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition duration-200">
                        <FaFacebook className="mr-2" /> Sign up with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;