
import Image from "next/image";
import Shipping from "../../../public/assets/images/shipping.png";
import Frame from "../../../public/assets/images/Frame.svg";
import support from "../../../public/assets/images/24.svg";
import safe from "../../../public/assets/images/100save.svg";
const  SectionFeature= () => {
    const features = [
      { title: "Free Shipping", img: Shipping },
      { title: "Join Risk free", img: Frame },
      { title: "support 24/7", img: support },
      { title: "100% safe", img: safe },
    ];
    return (
      <div className="max-md:py-5 max-md:px-10 max-md:my-10 py-10 my-20 mt-10 px-40  bg-[#080229]  w-full">
        <div className=" flex justify-evenly max-md:space-y-5  items-center max-md:flex-col">
          {features.map((elem, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="flex flex-col justify-center items-center"
              key={i}
            >
              <Image
                src={elem.img}
                className="max-md:h-10 max-md:w-10 max-lg:w-10 max-lg:h-10"
                alt="ship"
              />
              <h3 className="text-lg max-lg:text-sm  max-md:text-sm font-[500] text-white mt-2">
                {elem.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default SectionFeature
   