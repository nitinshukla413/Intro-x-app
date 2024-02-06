// pages/login.js
"use client";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import HeaderBand from "@/components/header-band";
import Wrapper from "@/components/wrapper";
import PrimaryBtn from "@/components/buttons/primary";
import img from "../../../public/assets/images/tick-animation-blue-success-feedback-plX7vWp4dQ.png";
import Image from "next/image";
import { getInputText, typeOfData } from "../business-profile/page";
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
                router.push('/')
              }}
              title="Explore more"
            ></PrimaryBtn>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderBand
        title={"Add Product"}
      ></HeaderBand>
      <Wrapper >
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

const Step1Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const nameInput = getInputText({
    id: typeOfData.text,
    label: "Product title ",
    placeholder: "Product title ",
    val: data.title,
    handleChange: (event: any) => {
      handleChange({ title: event.target.value });
    },
  });
  const mailInput = getInputText({
    id: typeOfData.select,
    label: "Product Category",
    placeholder: "Product Category",
    val: data.category,
    menuList: ["Plats & Machinery", "Plots", "Consultants", "No. Of Employees"],
    handleChange: (event: any) => {
      handleChange({ category: event.target.value });
    },
  });
  const dobInput = getInputText({
    id: typeOfData.text,
    val: data.description,
    label: "description",
    placeholder: "description",
    handleChange: (event: string) => {
      handleChange({ description: event.target.value });
    },
  });
  return (
    <div className="flex flex-wrap  w-full justify-start items-center max-md:flex-col ">
      {nameInput &&
        nameInput({
          className: "w-[45%] max-md:w-full  mr-5 max-md:mr-0 mb-20  ",
        })}
      {mailInput && mailInput({ className: "w-[50%] max-md:w-full mb-10" })}
      {dobInput && dobInput({ className: "w-[45%] max-md:w-full mb-20 " })}
    </div>
  );
};

const Step2Form = ({
  data,
  handleChange,
}: {
  data: any;
  handleChange: (val: any) => void;
}) => {
  const field1 = getInputText({
    id: typeOfData.text,
    label: "price",
    placeholder: "price",
    val: data.price,
    handleChange: (event: any) => {
      handleChange({ price: event.target.value });
    },
  });
  const field2 = getInputText({
    id: typeOfData.text,
    label: "location",
    placeholder: "location",
    val: data.location,
    handleChange: (event: any) => {
      handleChange({ location: event.target.value });
    },
  });
  const field3 = getInputText({
    id: typeOfData.file,
    label: "Product Images",
    placeholder: "Product Images",
    val: data.productImages,
    handleChange: (event: any) => {
      handleChange({ productImages: event.target.value });
    },
  });
  const field4 = getInputText({
    id: typeOfData.file,
    label: "Product Videos",
    placeholder: "Product Videos",
    val: data.productVideos,

    handleChange: (event: any) => {
      handleChange({ productVideos: event.target.value });
    },
  });

  return (
    <div className="flex flex-wrap w-full justify-start items-center max-md:flex-col ">
      {field1 &&
        field1({
          className: "w-[45%] max-md:w-full mr-5 max-md:mr-0 mb-10  ",
        })}
      {field2 &&
        field2({
          className: "w-[45%] max-md:w-full mr-5 max-md:mr-0 mb-10 ",
        })}

      {field3 &&
        field3({
          className: "w-[50%] max-md:w-full  max-md:mr-0 mb-10 ",
        })}
      {field4 &&
        field4({
          className:
            "w-[50%] flex justify-center items-start max-md:w-full max-md:mr-0 mb-10 ",
        })}
    </div>
  );
};

export default AddProduct;
