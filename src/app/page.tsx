"use client";
import ProductGrid from "@/components/product-grid";
import SearchBox from "@/components/search";
import Wrapper from "@/components/wrapper";
import LocationSection from "@/components/locationSection";
import { TypesSection } from "@/components/typeSection";
import SectionFeature from "@/components/sectionFeature";
import { useRouter } from "next/navigation";
import CustomSlider1 from "@/components/slider/components/CustomSlider";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start items-center pb-40">
      <div className="w-full bg-[url('../../public/assets/images/banner.png')] bg-cover bg-no-repeat h-[50vh] flex justify-center items-center">
        <SearchBox />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="300"
        className="relative -top-10 w-full"
      >
        <TypesSection />
      </div>
      <SectionFeature />
      <Wrapper>
        <CustomSlider1
        slideToShow={1}
          components={[
            <div className="h-[20vh] w-full bg-black"></div>,
            <div className="h-[20vh] w-[100vw] bg-[#cece]"></div>,
            <div className="h-[20vh]  w-[100vw] bg-[#cece]"></div>,
            <div className="h-[20vh] w-[100vw] bg-[#cece]"></div>,
            <div className="h-[20vh]  w-[100vw] bg-[#cece]"></div>,
          ]}
        />

        <ProductGrid
          title={"Top"}
          handleClose={() => {
            router.push("/top-listing");
          }}
          highlightTitle="Listing"
          afterhighlight="Near You"
        />
        <ProductGrid
          handleClose={() => {
            router.push("/top-listing?id=products");
          }}
          title={"Top"}
          highlightTitle="Products"
        />
        <ProductGrid
          showTabs
          handleClose={(Categories?: string) => {
            router.push(`/top-listing?id=${Categories}`);
          }}
          title={"Browse Our Top"}
          highlightTitle="Categories"
        />
        <LocationSection />
      </Wrapper>
    </div>
  );
}
