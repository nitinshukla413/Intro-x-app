"use client";
import React, { useState } from "react";
import PrimaryBtn from "../buttons/primary";
import { Button } from "@mui/material";

const LeadCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const onPress = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="flex flex-row w-[45%] max-md:w-full bg-[#F7F7F7] mb-5 mx-5 max-md:mx-0 rounded-lg p-4 ">
      <div className="flex flex-grow flex-col pr-4">
        <h5 className="text-[#777777] text-lg">Sahil Jain</h5>
        <p className="text-[#777777] text-sm pt-2">
          Received 20 minutes ago for the Product Name of the Product{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        {showDetails ? (
          <>
            <p className="p-2 text-sm font-bold">Lead Purchased</p>

            <div className="flex flex-col items-center justify-center mt-2">
              <Button variant="outlined" className="flex flex-1 w-full m-2">
                <p className="">Call</p>
              </Button>
              <Button variant="outlined" className="flex flex-1 w-full">
                <p className="">Message</p>
              </Button>
            </div>
          </>
        ) : (
          <PrimaryBtn title="Buy Now" handleClick={onPress}>
            <p className="p-2">Buy Now</p>
          </PrimaryBtn>
        )}
      </div>
    </div>
  );
};

export default LeadCard;
