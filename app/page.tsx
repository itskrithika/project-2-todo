'use client';
import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Laptop', price: 55000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 500, category: 'Accessories' },
  ]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const addProduct = () => {
    if (!name || !price) return;
    setProducts([...products, {
      id: Date.now(),
      name,
      price: Number(price),
      category: category || 'General'
    }]);
    setName(''); setPrice(''); setCategory('');
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">GlowLogistics - Products (Project 2)</h1>
        
        <div className="flex gap-2 mb-6">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Product Name" className="border p-2 rounded flex-1" />
          <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" type="number" className="border p-2 rounded w-24" />
          <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" className="border p-2 rounded w-32" />
          <button onClick={addProduct} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>

        <div className="space-y-2">
          {products.map(p => (
            <div key={p.id} className="flex justify-between items-center border p-3 rounded">
              <div>
                <p className="font-bold">{p.name} - ₹{p.price}</p>
                <p className="text-sm text-gray-500">{p.category}</p>
              </div>
              <button onClick={()=>deleteProduct(p.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">Total Products: {products.length}</p>
      </div>
    </div>
  );
}