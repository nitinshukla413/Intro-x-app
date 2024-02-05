import ProductGrid from "@/components/product-grid";
import Image from "next/image";
import Shipping from "../../public/assets/images/shipping.png";
import Frame from "../../public/assets/images/Frame.svg";
import support from "../../public/assets/images/24.svg";
import safe from "../../public/assets/images/100save.svg";
import plants from "../../public/assets/images/icons8-machinery 1.png";
import plots from "../../public/assets/images/icons8-country 1.png";
import product from "../../public/assets/images/icons8-box 1.png";
import computer from "../../public/assets/images/icons8-computer-chat 2.png";
import delhi from "../../public/assets/images/delhi.png";
import nashik from "../../public/assets/images/nashik.png";
import nagpur from "../../public/assets/images/nagpur.png";
import ratnigir from "../../public/assets/images/ratnagiri.png";
import latur from "../../public/assets/images/Latur.png";
import mumbai from "../../public/assets/images/mumbai.png";
import SearchBox from "@/components/search";
import Wrapper from "@/components/wrapper";
export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center">
      <BannerSection />
      <div className="relative -top-10 w-full">
        <TypesSection />
      </div>
      <SectionFeature />
      <Wrapper>
        <ProductGrid
          title={"Top"}
          highlightTitle="Listing"
          afterhighlight="Near You"
        />
        <ProductGrid title={"Top"} highlightTitle="Products" />
        <ProductGrid title={"Browse Our Top"} highlightTitle="Categories" />
        <LocationSection />
      </Wrapper>
    </div>
  );
}
export const BannerSection = () => {
  return (
    <div className="w-full bg-[#0044BB] h-[50vh] flex justify-center items-center">
      <SearchBox />
    </div>
  );
};
export const LocationSection = () => {
  const images = [
    { img: mumbai, w: "20%" },
    { img: delhi, w: "40%" },
    { img: nashik, w: "45%" },
    { img: nagpur, w: "45%" },
    { img: ratnigir, w: "40%" },
    { img: latur, w: "20%" },
  ];
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl max-md:text-2xl text-black font-[500] mb-10 max-md:mb-5">
        Products By Top <span className="text-[#0344B6]">Cities</span>
      </h3>
      <div className="flex flex-wrap justify-center items-center">
        {images?.map((elem, i) => (
          <Image
            src={elem.img}
            className={`hover:scale-105 h-[25vh] max-lg:h-[20vh] object-fill delay-3000 cursor-pointer w-[${elem.w}] max-lg:w-[30%] max-md:w-[100%] max-md:mr-0 max-md:mb-5 mr-10 mb-10`}
            alt={"city"}
          />
        ))}
      </div>
    </div>
  );
};
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
            className={`flex  flex-col w-[25%] max-md:w-full border-[#E8E8E8] justify-center items-center ${
              i !== features?.length - 1
                ? " border-r-2 max-md:border-b-2 max-md:border-r-0 "
                : ""
            }`}
          >
            <Image src={elem.img} alt="ship" className="max-lg:w-10 max-lg:h-10" />
            <h3 className="text-lg max-lg:text-sm font-[500] text-black mt-2">{elem.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export const SectionFeature = () => {
  const features = [
    { title: "Free Shipping", img: Shipping },
    { title: "Join Risk free", img: Frame },
    { title: "support 24/7", img: support },
    { title: "100% safe", img: safe },
  ];
  return (
    <div className="max-md:py-5 max-md:px-10 max-md:my-10 py-10 my-20 mt-10 px-40  bg-[#080229]  w-full">
      <div className=" flex justify-evenly max-md:space-y-5  items-center max-md:flex-col">
        {features.map((elem) => (
          <div className="flex flex-col justify-center items-center">
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
