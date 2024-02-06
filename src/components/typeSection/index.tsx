import Image from "next/image";
import product from "../../../public/assets/images/icons8-box.gif";
import plots from "../../../public/assets/images/icons8-country.gif";
import plants from "../../../public/assets/images/icons8-gears.gif";
import computer from "../../../public/assets/images/icons8-computer-chat.gif";
export const TypesSection = () => {
  const features = [
    { title: "Plants & Machinery", img: plants },
    { title: "Plots", img: plots },
    { title: "All Products", img: product },
    { title: "Consultants", img: computer },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex bg-white w-[60%] max-md:w-4/5 max-md:flex-col max-md:justify-center max-md:px-5 justify-evenly py-5 px-10 max-md:space-x-0 space-x-2 rounded-xl shadow-[2px_10px_32px_-15px_rgba(0,0,0,0.3)]">
        {features.map((elem, i) => (
          <div
            key={i}
            className={`flex  max-md:py-5 flex-col w-[25%] max-md:w-full border-[#E8E8E8] justify-center items-center ${
              i !== features?.length - 1
                ? " border-r-2 max-md:border-b-2 max-md:border-r-0 "
                : ""
            }`}
          >
            <Image
              src={elem.img}
              alt="ship"
              className="max-lg:w-10 max-lg:h-10"
            />
            <h3 className="text-lg max-lg:text-sm font-[500] text-black mt-2">
              {elem.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
