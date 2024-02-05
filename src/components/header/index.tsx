"use client";
import Image from "next/image";
import HamBurger from "../../../public/assets/images/sidebar.svg";
import Logo from "../../../public/assets/images/introapp-dark.svg";
<<<<<<< HEAD

=======
>>>>>>> a6415b2 (Merge pull request #3 from nitinshukla413/priyanka/home-page)
import Fav from "../../../public/assets/images/fav.svg";
import Bell from "../../../public/assets/images/bell-dark.svg";
import mail from "../../../public/assets/images/mail-dark.svg";
import plus from "../../../public/assets/images/add-light.svg";
<<<<<<< HEAD
import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import SearchBox from "../search";
import PrimaryBtn from "../buttons/primary";
=======
import { useState } from "react";
import SearchBox from "../search";
import PrimaryBtn from "../buttons/primary";
import Drawer from "../side-drawer";
import { IconButton } from "@mui/material";
>>>>>>> a6415b2 (Merge pull request #3 from nitinshukla413/priyanka/home-page)

const AppBar = () => {
  const [openDrawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((val) => !val);
  };
  return (
    <>
      <div className="flex justify-between px-10 py-4 max-md:px-5 items-center bg-[#F5F5F5]">
<<<<<<< HEAD
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawer}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <div className="bg-white h-full w-[30vw]"></div>
        </SwipeableDrawer>
=======
       <Drawer title={'Sahil Jain'} openDrawer={openDrawer} toggleDrawer={toggleDrawer}/>
>>>>>>> a6415b2 (Merge pull request #3 from nitinshukla413/priyanka/home-page)
        <div className="flex justify-start items-center">
          <IconButton
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
            className="bg-white shadow-2xl"
            onClick={toggleDrawer}
          >
            <Image src={HamBurger} alt="hm" className="h-5 w-5" />
          </IconButton>
          <Image src={Logo} className="ml-3 h-full max-md:ml-0" alt="hm" />
        </div>
        <SearchBox hideOnMobile/>
<<<<<<< HEAD

=======
>>>>>>> a6415b2 (Merge pull request #3 from nitinshukla413/priyanka/home-page)
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
          <PrimaryBtn
            title={" Become a Seller"}
            handleClick={() => {}}
            tailingIcon={
              <Image src={plus} className="h-10 w-10 -mb-[5px] -mr-1" alt="" />
            }
          />
        </div>
      </div>
    </>
  );
};
export default AppBar;
