import { getInputText, typeOfData } from "@/utils/common-function";

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
  export default Step2Form