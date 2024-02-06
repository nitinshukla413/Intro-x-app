"use client";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import PrimaryBtn from "@/components/buttons/primary";
const Coins = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 1, credits: 100, price: 10.99, validity: "30 days" },
    { id: 2, credits: 200, price: 19.99, validity: "60 days" },
    { id: 3, credits: 400, price: 139.99, validity: "30 days" },
    { id: 4, credits: 20, price: 30.99, validity: "40 days" },
    { id: 5, credits: 220, price: 339.99, validity: "20 days" },
  ];

  const handlePlanChange = (planId:any) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-semibold">
        Choose your <span className="text-[#0441BE]">Plan</span>
      </h1>
      <div className="w-[50%] shadow-[2px_10px_32px_-15px_rgba(0,0,0,0.6)] p-5 mt-5 rounded-xl">
        <table className="w-full">
          <th className="flex w-full justify-evenly p-5">
            <tr className="text-lg wider">No. of Credits</tr>
            <tr className="text-lg wider">Price</tr>
            <tr className="text-lg wider">Validity</tr>
          </th>
        </table>
        <tbody className="w-full flex flex-col justify-evenly item-center">
          {plans.map((plan) => (
            <tr
              key={plan.id}
              onClick={() => handlePlanChange(plan.id)}
              className={`cursor-pointer flex w-full justify-evenly p-3 ${
                selectedPlan === plan.id ? "border-[#105BBE] border-2" : ""
              }`}
            >
              <td>
                <FormControlLabel
                  checked={selectedPlan === plan.id}
                  value={selectedPlan}
                  onChange={() => handlePlanChange(plan.id)}
                  control={<Radio />}
                  label={plan.credits}
                />
              </td>
              <td className="py-2 ">${plan.price}</td>
              <td className="py-2">{plan.validity}</td>
            </tr>
          ))}
          <tr className="w-full  pt-10 flex justify-center items-center">
            <PrimaryBtn disable={!selectedPlan} title={"Buy Now"} handleClick={() => {}}></PrimaryBtn>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default Coins;
