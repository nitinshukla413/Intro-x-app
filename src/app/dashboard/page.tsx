"use client";
import HeaderBand from "@/components/header-band";
import { Avatar } from "@mui/material";
import Phone from "../../../public/assets/images/phone.svg";
import mail from "../../../public/assets/images/mail.svg";
import location from "../../../public/assets/images/location.svg";
import Image from "next/image";
import TabNavigator from "@/components/tab";
import ProductCard from "@/components/produce-card";
import Wrapper from "@/components/wrapper";
const Dashboard = () => {
  const Box = ({
    title,
    subtitle,
    color,
    large = false,
  }: {
    title: string;
    subtitle: string;
    large?: boolean;
    color: string;
  }) => {
    return (
      <div
        className={`bg-[${color}] ${
          large ? "w-[11vw] h-[13vh]" : " w-[9vw] h-[11vh]"
        } rounded-lg  flex-col flex justify-center items-center mx-2 my-2`}
      >
        <h2 className="text-3xl text-white font-[600]  w-4/5 text-center">
          {title}
        </h2>
        <h2 className="text-md text-white w-4/5 text-center ">{subtitle}</h2>
      </div>
    );
  };
  const Products = ({ productList }: { productList: any[] }) => {
    return (
      <div className="flex flex-wrap ">
        {["ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad"]?.map((elem) => (
          <ProductCard mobileView></ProductCard>
        ))}
      </div>
    );
  };
  const getTabContent = (id: number) => {
    return (
      <Products
        productList={["ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad"]}
      />
    );
  };
  const Card = () => {};
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <HeaderBand title="Dashboard"></HeaderBand>
      <Wrapper>
        <div  data-aos="fade-right" className="relative -top-10 w-full">
          <div className="flex justify-start p-5 px-5 rounded-2xl items-center shadow-[2px_10px_32px_-15px_rgba(0,0,0,0.3)] bg-white">
            <div className="flex border-2 items-center justify-start  border-[#7777] p-3 px-10 rounded-2xl">
              <Avatar className=" bg-[#105BBE]  color-white font-bold h-[11vh] w-[6vw]">
                SJ
              </Avatar>
              <div className="flex flex-col pl-5 justify-start items-start ">
                <h2 className="text-lg font-bold wider">Sahil Jain</h2>
                <p className="text-md text-[#777777] font-[500] wider">
                  New Seller
                </p>
                <div className=" mt-2 flex flex-col justify-start items-start space-y-3">
                  <div className="flex space-x-2">
                    <Image src={Phone} style={{color:'#105BBE'}} alt="ph" />
                    <h3 className="text-[#777777] text-md">9009388921</h3>
                  </div>
                  <div className="flex space-x-2">
                    <Image src={mail} alt="ph" />
                    <h3 className="text-[#777777] text-md">
                      infoapp@gmail.com
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <Image src={location} alt="ph" />
                    <h3 className="text-[#777777] text-md">Mumbai</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center item-center">
              <Box
                title="1000"
                subtitle="Credits"
                large={true}
                color={"#0F0158"}
              />
              <Box title="200" subtitle=" Products List" color={"#0044BB"} />
              <Box title="50" subtitle="Leads" color={"#0044BB"} />
              <Box title="30000" subtitle="Profile Views" color={"#0044BB"} />
              <Box title="500" subtitle="Calls received" color={"#0044BB"} />
              <Box title="600" subtitle="Messages received" color={"#0044BB"} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <TabNavigator
            tabs={[
              "Plants & Machinery",
              "PLOTS",
              "CONSULTANCY",
              "ALL PRODUCTS",
            ]}
            getTabContent={getTabContent}
          />
        </div>
      </Wrapper>
    </div>
  );
};
export default Dashboard;
