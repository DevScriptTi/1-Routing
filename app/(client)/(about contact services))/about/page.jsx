import React from 'react';

export const metadata = {
    title: "About Us",
    description: "Learn more about our company and team."
};

const AboutPage = () => {
    return (
        <div className="p-5 text-center">
            <h1 className="text-2xl text-gray-800">About Us</h1>
            <p className="text-lg text-gray-600">Welcome to the About Page. Here you can learn more about our company and team.</p>
        </div>
    );
};

export default AboutPage;
