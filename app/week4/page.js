//page.js
"use client"
import React from 'react';
import NewItem from './new-item';

export default function Page () {
    return(
        <div className="container mx-auto mt-8">
            <h1 className="text-2x1 font-bold mb-4">Shopping List</h1>
            <NewItem/> 
            </div>
    );
};