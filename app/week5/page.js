import React from 'react'; 
import ItemList from './item-list'; 

export default function Page() {
  return (
    <main className="bg-blue-100 p-4"> 
    <h1 className="text-4xl font-bold m-6 text-center text-black-300">
        Shopping List
      </h1>
      <ItemList /> 
    </main>
  );
}
