import { useState } from 'react';
import useUserAuth from './useUserAuth';
import { useRouter } from 'next/router';  

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const user = useUserAuth();  
  const router = useRouter();

  // Check if the user is not logged in, then redirect to the landing page

  if (!user) {
    // Redirect to the landing page or any other page of your choice
    router.push('/landing');  // Replace '/landing' with the desired landing page path
    return null;  // Prevent rendering the rest of the component
  }

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-blue-100 p-4" style={{ display: 'flex' }}>
      <div style={{ flex: 2 }}>
        <Heading title="Shopping List" />
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
