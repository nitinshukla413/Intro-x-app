"use client";
import { TextField } from "@mui/material";
import ProductCard from "../produce-card";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import { useState } from "react";
import Arrow from "../../../public/assets/images/arrow.svg";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PrimaryBtn from "../buttons/primary";

enum options {
  "location" = "location",
  "Date Published" = "Date Published",
}
const ProductGrid = ({
  title,
  highlightTitle,
  afterhighlight,
}: {
  title: string;
  highlightTitle: string;
  afterhighlight?: string;
}) => {
  const [selectedOption, setSelectedOption] = useState(options.location);
  const handleClose = () => {};
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="flex flex-col justify-start items-center mb-10"
    >
      <div className="flex max-md:flex-wrap justify-between w-full">
        <h2 className="text-3xl max-md:text-2xl max-md:mb-5 font-bold wider mb-10">
          {title || "Browse Our Top"}
          {"  "}
          <span className="text-[#004BE5]">
            {highlightTitle || "Categories"}{" "}
          </span>
          {afterhighlight ? afterhighlight : ""}
        </h2>
        <div className="cursor-pointer flex justify-center item-center">
          <h3 className="text-md  font-[600] wider uppercase">
            SORT BY: {selectedOption}
          </h3>
          <Image src={Arrow} className="h-5 w-4 ml-3 mt-1" alt="<" />
        </div>
      </div>
      <div
        className="flex flex-col items-center max-md:mt-5 justify-center "
      >
        <div className="flex max-md:flex-wrap  max-lg:flex-wrap max-lg:space-x-0 max-lg:justify-center max-lg:space-y-10 justify-start space-x-10 max-md:justify-center max-md:space-y-10 max-md:space-x-0 items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <PrimaryBtn
          containerStyle={"mt-5"}
          handleClick={handleClose}
          title={"VIEW ALL NEARBY PRODUCTS"}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
