import LeadCard from "@/components/LeadCard";
import HeaderBand from "@/components/header-band";
import { Button } from "@mui/material";
import React from "react";

const Leads = () => {
  const numberOfCards = 10; // Change this number based on your requirement

  return (
    <div className="flex flex-col items-center">
      <HeaderBand title="Leads" />
      <div
        data-aos="fade-up"
        data-aos-duration="1000" className="flex flex-wrap my-20 justify-center items-center">
        {[...Array(numberOfCards)].map((_, index) => (
            <LeadCard key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Leads;
