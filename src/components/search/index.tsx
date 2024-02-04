'use client'
import Search from "../../../public/assets/images/search.svg";
import Filter from "../../../public/assets/images/filter.svg";
import { IconButton } from "@mui/material";
import Image from "next/image";
const SearchBox = () => (
  <div className="max-md:hidden bg-white w-1/2 focus:outline-1 rounded-lg shadow-lg flex justify-between items-center">
    <IconButton sx={{ p: "15px", ml: "4px" }} aria-label="menu">
      <Image src={Search} alt="search" />
    </IconButton>
    <input
      placeholder="Search ..."
      className="focus:outline-none pl-5 w-full h-full text-lg py-3"
    />
    <IconButton
      sx={{ p: "15px", mx: "10px" }}
      type="button"
      aria-label="search"
    >
      <Image src={Filter} alt="search" />
    </IconButton>
  </div>
);

export default SearchBox;
