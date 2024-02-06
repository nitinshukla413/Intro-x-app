"use client";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import HeaderBand from "@/components/header-band";
import Wrapper from "@/components/wrapper";
import PrimaryBtn from "@/components/buttons/primary";
import img from "../../../public/assets/images/tick-animation-blue-success-feedback-plX7vWp4dQ.png";
import Image from "next/image";
import Step2Form from "./step2";
import Step1Form from "./step1";
const steps = ["Step 1", "Step 2"];

const AddProduct = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    location: "",
    productImages: "",
    productVideos: "",
  });
  const handleNext = () => {
    const bool = getFilled(activeStep);
    if (!bool) {
      alert("Please fill all details");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSubmit = () => {
    router.push("/success");
  };
  const progressPercentage = Math.floor((activeStep / steps.length) * 100);
  const handleChange = (payload: any) => {
    setData({ ...data, ...payload });
  };
  const getFilled = (id: number) => {
    return true;

    switch (id) {
      case 0:
        return true;
      // data.name.length > 0 && data.dob.length > 0 && data.email.length > 0
      case 1:
        return (
          // data.companyName.length > 0 &&
          // data.ownerName.length > 0 &&
          // data.turnover.length > 0 &&
          // data.bussType.length > 0
          true
        );
      case 2:
        return true;

      case 3:
        return true;

      case 5:
        return true;
    }
  };
  const getForm = (id: number) => {
    switch (id) {
      case 0:
        return <Step1Form data={data} handleChange={handleChange} />;
      case 1:
        return <Step2Form data={data} handleChange={handleChange} />;
      case steps.length:
        return (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <Image src={img} alt="" className="h-30 w-30" />
            <h3 className="text-[50px] max-md:text-xl font-bold text-[#0044BB]">
              Product submitted
            </h3>
            <p className="text-md text-[#999999] py-5">
              Your listing is in review, it will be live shortly.
            </p>
            <PrimaryBtn
              handleClick={() => {
                router.push("/");
              }}
              title="Explore more"
            ></PrimaryBtn>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBand title={"Add Product"}></HeaderBand>
      <Wrapper>
        <div className="flex justify-center px-10  items-center ">
          <div className=" flex-col w-full h-[70vh] mt-20 mb-20 max-md:mt-10 flex justify-center items-start">
            <div className="w-full flex flex-col justify-end items-end">
              <p className="text-md text-[#D9D9D9] font-bold">
                {progressPercentage}%
              </p>
              <LinearProgress
                sx={{
                  backgroundColor: "#D9D9D9",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#0044BB",
                  },
                }}
                variant="determinate"
                value={progressPercentage}
                // color="#D9D9D9"
                className="w-full mb-4 "
              />
            </div>
            <h2 className="text-xl max-md:text-lg text-black wider uppercase font-[600]">
              Product <span className="text-[#0044BB]"> information</span>
            </h2>
            <div className="w-full p-8 my-5 max-md:pt-5 px-10 min-h-[50vh] max-md:min-h-[60vh]  flex justify-start items-start rounded-xl border-2 border-[#DDDDDD] bg-[#FAFAFA]">
              {getForm(activeStep)}
            </div>
            {activeStep !== steps.length && (
              <div className="flex item-center justify-between mt-4 w-full px-10">
                <PrimaryBtn
                  handleClick={handleBack}
                  title="  Previous  "
                  disable={activeStep === 0}
                ></PrimaryBtn>
                <PrimaryBtn
                  handleClick={handleNext}
                  title={
                    activeStep === steps.length - 1 ? "  Submit  " : "  Next  "
                  }
                ></PrimaryBtn>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddProduct;
