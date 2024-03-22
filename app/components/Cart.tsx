import React from 'react'

const Cart = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md">

      <h2 className="text-lg font-semibold mb-4" text-center>Panier</h2>
      <ul>
        <li className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold">
              item 1
            </p>
            <p className="text-blue-400">
              10 € x 4
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={() => console.log('remove')}>-</button>
            <button className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => console.log('add')}>+</button>
          </div>
        </li>
        <li className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold">
              item 1
            </p>
            <p className="text-blue-400">
              10 € x 4
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={() => console.log('remove')}>-</button>
            <button className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => console.log('add')}>+</button>
          </div>
        </li>
        <li className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold">
              item 1
            </p>
            <p className="text-blue-400">
              10 € x 4
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={() => console.log('remove')}>-</button>
            <button className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => console.log('add')}>+</button>
          </div>
        </li>
      </ul>
      <div className="mt-4">
        <p className="text-lg font-semibold">
          Total: 120 €
        </p>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded focus:outline-non focus:ring-green-500 focus:ring-offset-2"
        onClick={() => console.log('checkout')}>
        Commander
      </button>
    </div>
  )
}

export default Cart