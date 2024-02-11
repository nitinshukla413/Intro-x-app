"use client";
import HeaderBand from "@/components/header-band";
import Image from "next/image";
import Avt from "../../../public/assets/images/Avatar.png";
import PrimaryBtn from "@/components/buttons/primary";
import TempImg from "../../../public/assets/images/04.jpg.png";
import Wrapper from "@/components/wrapper";

const ProductDetails = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <HeaderBand title="Product Details" />
      <div className="flex w-[80%] flex-col mt-20 mb-20">
        <div className="bg-[#DC3545] w-40 px-10 ">
          <h3 className="text-white py-2 font-bold wider">{"Properties"}</h3>
        </div>
        <h3 className="text-2xl my-5 text-black font-[500]">{"Add Title"}</h3>
        <div className="flex justify-between">
          <div className="max-md:h-[50vh] w-[60%]">
            <div className="w-full h-[60vh] bg-black"></div>
            <div className="w-full flex mt-5 space-between overflow-x-scroll">
              {[
                TempImg,
                TempImg,
                TempImg,
                TempImg,
                TempImg,
                TempImg,
                TempImg,
              ].map((elem) => (
                <Image
                  alt="image"
                  src={elem}
                  className={`rounded-lg w-[70%] mx-2`}
                ></Image>
              ))}{" "}
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-[#F5F5F5] border border-[#BBBBBB]"><h3 className="text-lg text-[#0044BB]">
              Add to Favorite    </h3> </div>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="flex px-5 py-4 rounded-xl  justify-evenly items-center bg-[#e1e1e185] border-2">
              <div className=" bg-[#0444BB] rounded-[50%] flex justify-center items-center color-white font-bold h-[50%] w-[50%]">
                <Image src={Avt} alt="" className="w-[95%] h-[95%]" />
              </div>
              <div className="flex flex-col justify-start items-start w-full ml-10">
                <h2 className="text-xl font-bold">Sahil Jain</h2>
                <h2 className="text-xm font-[400]">New Seller</h2>
                <h2 className="text-lg font-[500]">Mumbai</h2>
                <h2 className="text-lg font-[500]">View Profile</h2>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className="flex flex-col items-center justify-center">
                <PrimaryBtn title={"CALL NOW "} handleClick={() => {}} />
                <h3 className="text-sm font-[400] mt-2 text-[#777777]">
                  Credit: 10
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <PrimaryBtn title={"MESSAGE NOW "} handleClick={() => {}} />
                <h3 className="text-sm font-[400] mt-2 text-[#777777]">
                  Credit: 10
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
