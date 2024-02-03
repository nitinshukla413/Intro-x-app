import Image from "next/image";
import HamBurger from "../../../public/assets/images/sidebar.svg";
import Logo from "../../../public/assets/images/introapp-dark.svg";
import Search from "../../../public/assets/images/search.svg";
import Filter from "../../../public/assets/images/filter.svg";
import Fav from "../../../public/assets/images/fav.svg";
import Bell from "../../../public/assets/images/bell-dark.svg";
import mail from "../../../public/assets/images/mail-dark.svg";
import plus from "../../../public/assets/images/add-light.svg";
import { IconButton, InputBase, Paper } from "@mui/material";
const AppBar = () => {
  return (
    <div className="flex justify-between px-10 py-4 items-center bg-[#F5F5F5]">
      <div className="flex justify-start items-center">
        <div className="p-3 bg-white cursor-pointer shadow-3xl shadow-black rounded-3xl">
          <Image src={HamBurger} alt="hm" className="h-5 w-5" />
        </div>
        <Image src={Logo} className="ml-3 h-full" alt="hm" />
      </div>
      <div className="bg-white w-1/2 focus:outline-1 rounded-lg shadow-lg flex justify-between items-center">
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
      <div className="flex space-x-5">
        <div className="p-3 bg-white  flex justify-center items-center cursor-pointer shadow-3xl shadow-black rounded-3xl">
          <Image src={Fav} alt="hm" className="h-5 w-5" />
        </div>
        <div className="p-3 bg-white flex justify-center items-center cursor-pointer shadow-3xl shadow-black rounded-3xl">
          <Image src={mail} alt="hm" className="h-5 w-5" />
        </div>
        <div className="p-3 bg-white flex justify-center items-center  cursor-pointer shadow-3xl shadow-black rounded-3xl">
          <Image src={Bell} alt="hm" className="h-5 w-5" />
        </div>
        <div className="flex px-3 py-2 cursor-pointer rounded-lg justify-center items-center bg-[#0044BB] ">
          <Image src={plus} className="-mr-1 mt-1" alt="" />
          <h4 className="text-md wider uppercase text-white font-extrabold">
            Become a Seller
          </h4>
        </div>
      </div>
    </div>
  );
};
export default AppBar;
