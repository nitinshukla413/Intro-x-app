import { getInputText, typeOfData } from "@/utils/common-function";

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
      handleChange: (event: any) => {
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
  export default Step1Form