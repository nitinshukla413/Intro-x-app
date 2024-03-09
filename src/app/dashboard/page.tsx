"use client";
import HeaderBand from "@/components/header-band";
import Phone from "../../../public/assets/images/phone.svg";
import mail from "../../../public/assets/images/mail.svg";
import location from "../../../public/assets/images/location.svg";
import Image from "next/image";
import TabNavigator from "@/components/tab";
import ProductCard from "@/components/produce-card";
import Wrapper from "@/components/wrapper";
import Avt from "../../../public/assets/images/Avatar.png";

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
    color?: string;
  }) => {
    return (
      <div
      data-aos="zoom-in"
      data-aos-duration="300"
        className={`bg-[${color}] hover:scale-105 cursor-pointer   ${
          large ? "w-[20%] h-[12vh] max-md:w-full h-20 scale-150 max-lg:scale-100 max-md:scale-100 bg-[#0F0158]" :" max-md:w-full w-[15%] h-[10vh]"
        } rounded-lg  flex-col flex justify-center items-center mx-2 my-2`}
      >
        <h2 className="text-lg text-white font-[600]  w-4/5 text-center">
          {title}
        </h2>
        <h2 className="text-sm text-white w-4/5 text-center max-md:w-4/5 max-lg:w-4/5 ">{subtitle}</h2>
      </div>
    );
  };
  const Products = ({ productList }: { productList: any[] }) => {
    return (
      <div className="flex flex-wrap ">
        {["ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad", "ad"]?.map(
          (elem, i) => (
            <ProductCard mobileView key={i}></ProductCard>
          )
        )}
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
        <div data-aos="fade-right" className="relative -top-10  max-md:-top-20 w-full">
          <div className="flex justify-between max-md:flex-col max-lg:flex-col px-5 py-5 rounded-2xl items-center shadow-[2px_10px_32px_-15px_rgba(0,0,0,0.3)] bg-white">
            <div className="flex border-2  max-md:flex-col items-center justify-start  border-[#a6a6a677] p-3 px-10 rounded-2xl">
              <div className=" bg-[#0444BB] rounded-[50%] flex justify-center items-center color-white font-bold h-40 w-40">
                <Image src={Avt} alt="" className="w-[95%] h-[95%]" />
              </div>
              <div className="flex flex-col max-md:justify-center max-md:items-center max-md:pl-0 pl-5 justify-start items-start ">
                <h2 className="text-lg font-bold wider">Sahil Jain</h2>
                <p className="text-md text-[#777777] font-[500] wider">
                  New Seller
                </p>
                <div className=" mt-2 flex flex-col max-md:justify-center max-md:items-center justify-start items-start space-y-3">
                  <div className="flex space-x-2">
                    <Image src={Phone} style={{ color: "#105BBE" }} alt="ph" />
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
            <div className="flex px-5 ml-5 max-md:ml-0 justify-center max-md:flex-col  max-md:mt-10 max-lg:mt-10 item-center   h-full  w-full">
              <Box
                title="1000"
                subtitle="Credits"
                large={true}
              />
             <div className="w-full flex flex-wrap  max-md:justify-center max-md:ml-0 h-full justify-start items-center">
             <Box title="200" subtitle=" Products List" color={"#003034"} />
              <Box title="50" subtitle="Leads" color={"#003034"} />
              <Box title="30000" subtitle="Profile Views" color={"#003034"} />
              <Box title="500" subtitle="Calls received" color={"#003034"} />
              <Box title="600" subtitle="Messages received" color={"#003034"} />
            </div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-md:mt-0">
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
