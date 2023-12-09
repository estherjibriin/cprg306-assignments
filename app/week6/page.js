"use client";

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import Heading from './heading';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  

  return (
    <main className="bg-blue-100 p-4">
      <Heading title="Shopping List" />
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
