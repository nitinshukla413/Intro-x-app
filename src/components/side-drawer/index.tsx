import {
  IconButton,
  SwipeableDrawer,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../../public/assets/images/introapp-dark.svg";
import PrimaryBtn from "../buttons/primary";
import plus from "../../../public/assets/images/add-light.svg";
import CloseIcon from "@mui/icons-material/Close";
import TabNavigator from "../tab";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { mainMenu, selectMenu } from "@/utils/constants";
import Avt from "../../../public/assets/images/Avatar.png";
const Drawer = ({
  openDrawer,
  toggleDrawer,
  title,
}: {
  title: string;
  openDrawer: boolean;
  toggleDrawer: () => void;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const getTabContent = (id: number) => {
    switch (id) {
      case 0:
        return (
          <div className="flex flex-col w-full justify-start item-center">
            {mainMenu.map((elem, i) => (
              <Link
                href="/"
                key={i}
                className={`p-4 text-left border-b-2 pl-5 cursor-pointer hover:bg-[#dedede4e] ${
                  elem?.link === pathName ? "bg-[#dedede4e] " : ""
                }`}
              >
                Home
              </Link>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col w-full justify-start item-center">
            {selectMenu.map((elem: any, i) => (
              <Link
                href={elem?.link || "/"}
                key={i}
                className={`p-4 text-left border-b-2 pl-5 cursor-pointer hover:bg-[#dedede4e] ${
                  elem?.link === pathName ? "bg-[#dedede4e] " : ""
                }`}
              >
                {elem?.title}
              </Link>
            ))}
          </div>
        );
      case 2:
    }
  };
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={openDrawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <div className="flex overflow-scroll flex-col justify-start items-center bg-white h-full w-[22vw] max-md:w-[80vw] max-lg:w-[50vw]">
        <div className="flex justify-between w-full items-center p-5 border-b border-[#DEE2E6]">
          <Image
            alt=""
            onClick={() => {
              router.push("/");
            }}
            src={Logo}
            className="h-full w-[60%] cursor-pointer"
          />
          <IconButton
            onClick={toggleDrawer}
            className="shadow-xl "
            sx={{ p: "15px", mx: "10px" }}
            type="button"
            aria-label="search"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col w-full p-5 items-center justify-center">
          <div className=" bg-[#0444BB] rounded-[50%] flex justify-center items-center color-white font-bold h-[58%] w-[47%]">
            <Image src={Avt} alt="" className="w-[95%] h-[95%]" />
          </div>
          <h3 className="text-xl font-bold wider py-5">{title}</h3>
          <PrimaryBtn
            title={"Add a Product"}
            handleClick={() => {
              router.push("/add-product");
              toggleDrawer();
            }}
            tailingIcon={
              <Image src={plus} className="h-8 w-8 -mb-[5px] -mr-1" alt="" />
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <TabNavigator
            tabs={["MAIN MENU", "SELLER MENU"]}
            getTabContent={getTabContent}
          />
        </div>
        <h3 className="mt-8">
          All Rights Reserved By{" "}
          <span className="text-[#0044BB]">Introapp</span>
        </h3>
        <h3 className="mb-8">
          Developed By <span className="text-[#0044BB]">Metaminds Studio</span>
        </h3>
        <div className="h-20 bg-black"></div>
      </div>
    </SwipeableDrawer>
  );
};
export default Drawer;
