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
    label: "Product Title ",
    placeholder: "Name",
    val: data.title,
    handleChange: (event: any) => {
      handleChange({ title: event.target.value });
    },
  });
  const mailInput = getInputText({
    id: typeOfData.select,
    label: "Product Category",
    placeholder: "Select",
    val: data.category,
    menuList: ["Plats & Machinery", "Plots", "Consultants", "No. Of Employees"],
    handleChange: (event: any) => {
      handleChange({ category: event.target.value });
    },
  });
  const dobInput = getInputText({
    id: typeOfData.text,
    val: data.description,
    label: "Message",
    placeholder: "Description",
    handleChange: (event: any) => {
      handleChange({ description: event.target.value });
    },
  });
  const field3 = getInputText({
    id: typeOfData.text,
    val: data.description,
    label: "Location",
    placeholder: "Place",
    handleChange: (event: any) => {
      handleChange({ description: event.target.value });
    },
  });
  const field4= getInputText({
    id: typeOfData.number,
    val: data.description,
    label: "Price",
    placeholder: "Number",
    handleChange: (event: any) => {
      handleChange({ description: event.target.value });
    },
  });
  const field5= getInputText({
    id: typeOfData.file,
    val: data.productImages,
    label: "Product Images",
    placeholder: "Choose File No File Selected",
    hintText:'image size 2 mb / up to 5 images only',
    handleChange: (event: any) => {
      handleChange({ productImages: event.target.value });
    },
  });
  const field6= getInputText({
    id: typeOfData.file,
    val: data.productVideos,
    label: "Product Videos",
    placeholder: "Choose File No File Selected",
    hintText:'image size 2 mb / up to 5 images only',
    handleChange: (event: any) => {
      handleChange({ productVideos: event.target.value });
    },
  });
  return (
    <div className=" h-full w-full grid max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-10 gap-y-10 gap-x-10 grid-cols-2">
      {nameInput &&
        nameInput({})}
      {mailInput && mailInput({ 
        
    })}
      {dobInput && dobInput({
     })}
       {field3 && field3({
     })}
        {field4 && field4({
     })}
       {field5 && field5({
     })}
       {field6 && field6({
     })}
    </div>
  );
};
export default Step1Form;
