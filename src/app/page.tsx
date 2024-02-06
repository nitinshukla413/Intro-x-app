"use client";
import ProductGrid from "@/components/product-grid";
import SearchBox from "@/components/search";
import Wrapper from "@/components/wrapper";
import LocationSection from "@/components/locationSection";
import { TypesSection } from "@/components/typeSection";
import SectionFeature from "@/components/sectionFeature";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-full bg-[#0044BB] h-[50vh] flex justify-center items-center">
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
            router.push("/top-listing");
          }}
          title={"Top"}
          highlightTitle="Products"
        />
        <ProductGrid
          handleClose={() => {
            router.push("/top-listing");
          }}
          title={"Browse Our Top"}
          highlightTitle="Categories"
        />
        <LocationSection />
      </Wrapper>
    </div>
  );
}
