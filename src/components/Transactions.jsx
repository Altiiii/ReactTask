import React from "react";

export default function Transactions({title,category,amount,date}){

    
    return(
        <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-4 flex justify-between items-start">

        <div>
            <h2 className="text-xl font-bold mb-1 text-gray-400">{title}</h2>
            <p className="text-gray-300">Category: {category}</p>
            <p className="text-gray-300">Amount: {amount}</p>
            <p className="text-gray-300">Date: {date}</p>
        </div>

        <div className="flex flex-col gap-2">
            <button className="bg-transparent border hover:bg-gray-600 text-white py-1 px-4 rounded">
                Edit
            </button>

            <button className="bg-gray-200 hover:bg-gray-300 text-black py-1 px-4 rounded">
                Delete
            </button>
        </div>
        </div>

    );
}