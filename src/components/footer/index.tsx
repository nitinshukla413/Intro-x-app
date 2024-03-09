import Image from "next/image";
import Visa from "../../../public/assets/images/visa.jpg.svg";
import MasterCard from "../../../public/assets/images/mastercard.svg";
import locationImg from "../../../public/assets/images/location.svg";
import mail from "../../../public/assets/images/mail.svg";
import phone from "../../../public/assets/images/phone.svg";
import Paytm from "../../../public/assets/images/payment.png";
import {
  email1,
  email2,
  information,
  location,
  phone1,
  phone2,
  quickLinks,
} from "@/utils/constants";
import logoLight from "../../../public/assets/images/introapp-light.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" w-full flex max-lg:flex-wrap flex-col bg-primary justify-center items-center">
      <div className="p-10 w-4/5 max-md:w-full max-lg:w-full">
        <div className="flex justify-between max-md:flex-wrap max-md:space-x-0 items-start w-full border-b  border-b-[#333333]">
          <div className="flex mt-5 flex-col justify-center max-md:w-[90%] items-start max-md:items-center">
          <h1 className="font-bold text-[#D4B103] text-2xl py-10">Auction Wale</h1>
            <div className="flex  flex-col space-y-5 max-md:text-center">
              <div className=" flex flex-col justify-start">
                <h2 className="text-white text-lg">929,235</h2>
                <p className="text-[#555555] text-md">Registered Users</p>
              </div>
              <div className="flex flex-col justify-start">
                <h2 className="text-white text-lg">245,782</h2>
                <p className="text-[#555555] text-md">All Products</p>
              </div>
            </div>
          </div>
          <div className="flex pb-10  max-md:mt-10 flex-col space-y-5 justify-center max-md:items-center items-start max-md:w-full w-[25%]">
            <div className="flex flex-col max-md:items-center border-b py-5 border-b-[#333333] w-full">
              <h2 className="text-xl  text-[#BBBBBB]">Contact US</h2>
              <div className="h-[2px] relative top-5 w-[30%] bg-[#003034]"></div>
            </div>
            <div className="flex px-2 flex-col space-y-5 justify-center items-start max-md:items-center">
              <div className="flex justify-start items-start max-md:items-center  max-md:justify-center space-x-5 text-lg cursor-pointer hover:text-[#003034] text-[#777777]">
                <Image src={locationImg} className="mt-3" alt="phone" />
                <p className="text-[#555555] w-[60%] text-wrap">{location}</p>
              </div>
              <div className="flex justify-start items-start max-md:items-center max-md:justify-center text-lg space-x-5  cursor-pointer hover:text-[#003034] text-[#777777]">
                <Image className="mt-3" src={mail} alt="phone" />
                <div className="flex flex-col w-[60%]">
                  <p className="text-[#555555] word-wrap">{email1}</p>
                  <p className="text-[#555555] word-wrap">{email2}</p>
                </div>
              </div>
              <div className="max-md:w-full flex justify-start items-start max-md:items-center max-md:justify-center text-lg  space-x-5 cursor-pointer hover:text-[#003034] text-[#777777]">
                <Image className="mt-3" src={phone} alt="phone" />
                <div className="flex w-[60%] flex-col">
                  <p className="text-[#555555]  word-wrap">{phone1}</p>
                  <p className="text-[#555555] word-wrap">{phone2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pb-10 flex-col space-y-5 justify-center max-md:items-center items-start max-md:w-full w-[25%]">
            <div className="border-b py-5 flex  flex-col max-md:items-center max-md:justify-center border-b-[#333333] w-full">
              <h2 className="text-xl text-[#BBBBBB] font-[500]">Information</h2>
              <div className="h-[2px] relative top-5 w-[30%] bg-[#003034]"></div>
            </div>
            <div className="flex px-2 max-md:items-center flex-col space-y-5 justify-center items-start">
              {information.map((elem) => {
                return (
                  <Link
                    key={elem?.link || "/"}
                    href={elem?.link || "/"}
                    className="text-lg cursor-pointer hover:text-[#003034] text-[#777777]"
                  >
                    {elem?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-wrap w-full justify-center items-center p-5 max-lg:p-10 max-md:p-10">
          <Image src={MasterCard} alt="payment options" className="mr-5 mt-5" />
          <Image src={Visa} alt="payment options" className="mr-5 mt-5" />
          <Image src={Paytm} alt="payment options" className="mr-5 mt-5" />
        </div>
        <div className=" flex max-md:flex-col w-full justify-center item-center text-center">
          <h3 className="text-[#555555] max-md:text-center max-md:mb-5 text-lg max-md:text-md">
            All Copyrights Reserved © 2024 - Developed by{" "}
            <a href="/" className="cursor-pointer text-[#7EA27C]">
              Metaminds Studio
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
