// /C:/Users/hamri/OneDrive/Desktop/nextJS/Next-js-tutorial/1-routing/app/(client)/(Auth)/layout.jsx

import React from 'react';
import Link from 'next/link';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
                {children}
        </div>
    );
};

export default AuthLayout;