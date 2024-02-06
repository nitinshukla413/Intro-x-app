"use client";
import Image from "next/image";
import HamBurger from "../../../public/assets/images/sidebar.svg";
import Logo from "../../../public/assets/images/introapp-dark.svg";
import Fav from "../../../public/assets/images/Star.svg";
// import Bell from "../../../public/assets/images/bell-dark.svg";
import mail from "../../../public/assets/images/mail-dark.svg";
import plus from "../../../public/assets/images/add-light.svg";
import { useEffect, useState } from "react";
import SearchBox from "../search";
import PrimaryBtn from "../buttons/primary";
import Drawer from "../side-drawer";
import { Avatar, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  Email,
  NotificationAdd,
  Notifications,
  Star,
} from "@mui/icons-material";

const AppBar = () => {
  const [openDrawer, setDrawer] = useState(false);
  const router = useRouter();
  const toggleDrawer = () => {
    setDrawer((val) => !val);
  };
  return (
    <header className={`sticky top-0 z-50 duration-300 shadow-lg `}>
      <div
        className={`flex justify-between px-10 py-4 max-md:px-5 items-center bg-[#F5F5F5]`}
      >
        <Drawer
          title={"Sahil Jain"}
          openDrawer={openDrawer}
          toggleDrawer={toggleDrawer}
        />
        <div
          data-aos="flip-up"
          data-aos-duration="300"
          className="flex justify-start items-center"
        >
          <IconButton
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
            className="bg-white shadow-2xl"
            onClick={toggleDrawer}
          >
            <Image src={HamBurger} alt="hm" className="h-5 w-5" />
          </IconButton>
          <Image
            onClick={() => {
              router.push("/");
            }}
            src={Logo}
            className="cursor-pointer ml-3 h-full max-md:ml-0"
            alt="hm"
          />
        </div>
        <SearchBox hideOnMobile />
        <div
          data-aos="flip-up"
          data-aos-duration="300"
          className="flex max-md:hidden max-lg:hidden space-x-3"
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
            className="bg-white shadow-2xl"
          >
            <Star style={{ fill: "#0444B6" }} />
          </IconButton>
          <IconButton
            onClick={toggleDrawer}
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
            className="bg-white shadow-2xl"
          >
            <Email style={{ fill: "#0444B6" }} />
          </IconButton>
          <IconButton
            onClick={toggleDrawer}
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
            className="bg-white shadow-2xl"
          >
            <Notifications style={{ fill: "#0444B6" }} />
          </IconButton>
          <PrimaryBtn
            title={" Become a Seller"}
            handleClick={() => {}}
            tailingIcon={
              <Image src={plus} className="h-10 w-10 -mb-[5px] -mr-1" alt="" />
            }
          />
        </div>
      </div>
    </header>
  );
};
export default AppBar;
