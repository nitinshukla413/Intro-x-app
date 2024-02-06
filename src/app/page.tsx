import ProductGrid from "@/components/product-grid";
import SearchBox from "@/components/search";
import Wrapper from "@/components/wrapper";
import LocationSection from "@/components/locationSection";
import { TypesSection } from "@/components/typeSection";
import SectionFeature from "@/components/sectionFeature";
export default function Home() {
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
