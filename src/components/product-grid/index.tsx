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
import TabNavigator from "../tab";

enum options {
  "location" = "location",
  "Date Published" = "Date Published",
}
const ProductGrid = ({
  title,
  highlightTitle,
  afterhighlight,
  handleClose = (id?: any) => {},
  showTabs = false,
}: {
  title: string;
  highlightTitle: string;
  showTabs?: boolean;
  afterhighlight?: string;
  handleClose: () => void;
}) => {
  let tabs = ["Plants & Machinery", "Plots", "Consultants", "all PRODUCTS"];
  const [selectedOption, setSelectedOption] = useState(options.location);
  const [id, setId] = useState<string>("");
  const getTabContent = (id?: number) => {
    if (!!id && id !== null) {
      setId(tabs[id]);
    }
    return (
      <div
        className={`flex max-md:flex-wrap w-full max-lg:flex-wrap max-lg:space-x-0 max-lg:justify-center max-lg:space-y-10 justify-start space-x-10 max-md:justify-center max-md:space-y-10 max-md:space-x-0 items-center ${
          showTabs ? "mt-10" : ""
        }`}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
  };
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="700"
      className="flex flex-col justify-start items-center mb-10  pt-20 max-md:pt-10"
    >
      <div className="flex max-md:flex-col justify-between w-full">
        <h2 className="max-md:text-center text-3xl max-md:text-2xl max-md:mb-5 font-bold wider mb-10">
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
      <div className="flex flex-col items-center max-md:mt-5 justify-center ">
        {showTabs ? (
          <TabNavigator
            tabs={tabs}
            getTabContent={getTabContent}
          ></TabNavigator>
        ) : (
          getTabContent()
        )}
        <PrimaryBtn
          containerStyle={"mt-10"}
          handleClick={() => handleClose(id?.length > 0 ? id : tabs[0])}
          title={"VIEW ALL NEARBY PRODUCTS"}
        />
      </div>
    </div>
  );
};

export default ProductGrid;
