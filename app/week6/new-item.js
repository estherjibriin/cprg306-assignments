"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the item object with name, quantity, and category
    const newItem = {
      name: name,
      quantity: quantity,
      category: category,
    };

    // Call the onAddItem prop and pass the newItem
    onAddItem(newItem);

    // Clear the form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-yellow-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border rounded py-2 px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Quantity */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-yellow-700">Quantity</label>
          <input
            type="number"  // Changed to number type
            id="quantity"
            className="w-full border rounded py-2 px-3"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            max="99"
            required
          />
        </div>
        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-yellow-700">Category</label>
          <select
            id="category"
            className="w-full border rounded py-2 px-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="canned">Canned</option>
            <option value="dry">Dry</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
