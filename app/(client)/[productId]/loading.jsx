import React from 'react';

const Loading = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default Loading;