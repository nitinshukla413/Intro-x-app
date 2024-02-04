import ProductGrid from "@/components/product-grid";
import Image from "next/image";
import Shipping from "../../public/assets/images/shipping.png";
import Frame from "../../public/assets/images/Frame.svg";
import support from "../../public/assets/images/24.svg";
import safe from "../../public/assets/images/100save.svg";
export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center">
      <SectionFeature />
      <ProductGrid
        title={"Top"}
        highlightTitle="Listing"
        afterhighlight="Near You"
      />
      <ProductGrid title={"Top"} highlightTitle="Products" />
      <ProductGrid title={"Browse Our Top"} highlightTitle="Categories" />
    </div>
  );
}

export const SectionFeature = () => {
  const features = [
    { title: "Free Shipping", img: Shipping },
    { title: "Join Risk free", img: Frame },
    { title: "support 24/7", img: support },
    { title: "100% safe", img: safe },
  ];
  return (
    <div className="py-10 my-20 px-40  bg-[#080229]  w-full">
      <div className=" flex justify-evenly items-center">
        {features.map((elem) => (
          <div className="flex flex-col justify-center items-center">
            <Image src={elem.img} alt="ship" />
            <h3 className="text-lg font-[500] text-white mt-2">{elem.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
