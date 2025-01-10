import React from 'react';

const ProdCard = () => {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-md  animate-pulse">
            <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
            <div className="bg-gray-300 h-5 w-3/5 mb-2 rounded-md"></div>
            <div className="bg-gray-300 h-5 w-4/5 mb-2 rounded-md"></div>
            <div className="bg-gray-300 h-5 w-2/5 mb-2 rounded-md"></div>
            <div className="bg-gray-300 h-5 w-1/2 rounded-md"></div>
        </div>
    );
};

export default ProdCard;
