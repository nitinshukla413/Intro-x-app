import Image from "next/image";
import HamBurger from "../../../public/assets/images/sidebar.svg";
import Logo from "../../../public/assets/images/introapp-dark.svg";
import Search from "../../../public/assets/images/search.svg";
import Filter from "../../../public/assets/images/filter.svg";
import Fav from "../../../public/assets/images/fav.svg";
import Bell from "../../../public/assets/images/bell-dark.svg";
import mail from "../../../public/assets/images/mail-dark.svg";
import plus from "../../../public/assets/images/add-light.svg";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
const AppBar = () => {
  return (
    <div className="flex justify-between px-10 py-4 max-md:px-5 items-center bg-[#F5F5F5]">
      <div className="flex justify-start items-center">
        <IconButton
          sx={{ p: "15px", mx: "10px" }}
          type="button"
          aria-label="search"
          className="bg-white shadow-2xl"
        >
          <Image src={HamBurger} alt="hm" className="h-5 w-5" />
        </IconButton>
        <Image src={Logo} className="ml-3 h-full max-md:ml-0" alt="hm" />
      </div>
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
      <div className="flex max-md:hidden max-lg:hidden space-x-3">
        <IconButton
          sx={{ p: "15px" }}
          type="button"
          aria-label="search"
          className="bg-white shadow-2xl"
        >
          <Image src={Fav} alt="hm" className="h-5 w-5" />
        </IconButton>
        <IconButton
          sx={{ p: "15px" }}
          type="button"
          aria-label="search"
          className="bg-white shadow-2xl"
        >
          <Image src={mail} alt="hm" className="h-5 w-5" />
        </IconButton>
        <IconButton
          sx={{ p: "15px" }}
          type="button"
          aria-label="search"
          className="bg-white shadow-2xl"
        >
          <Image src={Bell} alt="hm" className="h-5 w-5" />
        </IconButton>
        <Button variant="contained" className=" bg-[#0044BB] rounded-lg">
          <Image src={plus} className="h-10 w-10 -mb-[5px] -mr-1" alt="" />
          Become a Seller
        </Button>
      </div>
    </div>
  );
};
export default AppBar;
