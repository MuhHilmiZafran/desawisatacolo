// src/Checkout.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [originCity, setOriginCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [weight, setWeight] = useState(1000); // Default weight in grams
  const [shippingCost, setShippingCost] = useState(null);

  useEffect(() => {
    // Fetch available cities from RajaOngkir API
    axios.get('https://api.rajaongkir.com/starter/city', {
      headers: {
        key: import.meta.env.VITE_REACT_APP_RAJAONGKIR_API_KEY,
      },
    })
      .then(response => {
        // Set the origin city to the first city in the list
        setOriginCity(response.data.rajaongkir.results[0].city_name);
        // Set the destination city to the second city in the list
        setDestinationCity(response.data.rajaongkir.results[1].city_name);
      })
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const calculateShippingCost = () => {
    // Fetch shipping cost from RajaOngkir API
    axios.post('https://api.rajaongkir.com/starter/cost', {
      origin: 501, // ID of the origin city (adjust as needed)
      destination: 114, // ID of the destination city (adjust as needed)
      weight: weight,
      courier: 'jne', // Choose your preferred courier
    }, {
      headers: {
        key: import.meta.env.VITE_REACT_APP_RAJAONGKIR_API_KEY,
      },
    })
      .then(response => {
        // Set the shipping cost based on the first available service
        setShippingCost(response.data.rajaongkir.results[0].costs[0].cost[0].value);
      })
      .catch(error => console.error('Error fetching shipping cost:', error));
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleCalculateShipping = () => {
    calculateShippingCost();
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      <div className="flex mb-4">
        <div className="w-1/2 mr-4">
          <label className="block mb-2">Origin City</label>
          <input type="text" value={originCity} readOnly className="w-full p-2" />
        </div>
        <div className="w-1/2">
          <label className="block mb-2">Destination City</label>
          <input type="text" value={destinationCity} readOnly className="w-full p-2" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Weight (grams)</label>
        <input type="number" value={weight} onChange={handleWeightChange} className="w-full p-2" />
      </div>

      <button onClick={handleCalculateShipping} className="bg-blue-500 text-white px-4 py-2">Calculate Shipping</button>

      {shippingCost !== null && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Shipping Cost:</p>
          <p className="text-xl">Rp {shippingCost}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
