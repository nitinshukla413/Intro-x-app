"use client"
import React, { useState } from 'react';

const Coins = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, credits: 100, price: 10.99, validity: '30 days' },
    { id: 2, credits: 200, price: 19.99, validity: '60 days' },
    // ... Add more plans as needed
  ];

  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-semibold">
        Choose your <span className="text-[#0441BE]">Plan</span>
      </h1>
      <div className="w-[50%]">
        <div className="flex w-full items-center justify-center">
          <div className="grid grid-cols-3 gap-6 text-center font-bold">
            <div>No. of Credits</div>
            <div>Price</div>
            <div>Validity</div>
          </div>
        </div>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex space-x-4 p-4 item-center justify-center border rounded-lg cursor-pointer ${
              selectedPlan === plan.id
                ? 'border-blue-500'
                : 'border-gray-300'
            }`}
          >
            <div className='flex w-1/5 flex-start'>
              <input
                type="radio"
                id={`plan-${plan.id}`}
                name="plan"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => handlePlanChange(plan.id)}
                className="cursor-pointer"
              />
            </div>
            <div className='flex items-center justify-center space-x-16 w-3/5'>
            <div>{plan.credits}</div>
            <div>${plan.price}</div>
            <div>{plan.validity}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Selected Plan Details</h2>
          {plans.find((plan) => plan.id === selectedPlan) && (
            <div>
              <p>
                <strong>No of Credits:</strong>{' '}
                {plans[selectedPlan - 1].credits}
              </p>
              <p>
                <strong>Price:</strong> ${plans[selectedPlan - 1].price}
              </p>
              <p>
                <strong>Validity:</strong> {plans[selectedPlan - 1].validity}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Coins;
