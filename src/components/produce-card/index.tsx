import Image from "next/image";
import TempImg from "../../../public/assets/images/04.jpg.png";
import Customer from "../../../public/assets/images/Customer.svg";
import Location from "../../../public/assets/images/location-light.svg";
import Call from "../../../public/assets/images/phon.svg";
import Mails from "../../../public/assets/images/msg.svg";

const ProductCard = ({
  image,
  tag,
  title,
  price,
  Bname,
  Blocation,
  mobileView = false,
}: {
  image: string;
  tag: string;
  title: string;
  mobileView?: boolean;
  price: string;
  Bname: string;
  Blocation: string;
}) => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="1000"
      className={`${
        mobileView ? "flex-col mb-10 ml-10 justify-center items-center mt-10" : ""
      } cursor-pointer max-md:flex-col hover:scale-105 flex delay-3000  border-[#c3c3c4] rounded-xl  bg-[#F5F5F5] `}
    >
      <Image alt="image" src={image || TempImg} className="flex-[0.5]"></Image>
      <div className="flex flex-col justify-start items-start p-5 flex-[0.5]">
        <h3 className="text-md w-full font-[500] wider text-[#777777]">
          {title || " Raunak Lake view at Powai"}
        </h3>
        <h3 className="text-lg font-extrabold text-[#0244B8]">
          {"₹ " + (price || "9000")}
        </h3>
        <div className="flex flex-col w-full space-y-1">
          <div className="flex space-x-2">
            <Image src={Customer} className="h-5 w-5" alt="customer" />
            <h4 className="text-sm text-[#949393]">
              {Bname || "Joshi real estate"}
            </h4>
          </div>
          <div className="flex space-x-2 pb-3 border-b border-[#d1d1d1]">
            <Image src={Location} className="h-5 w-5" alt="customer" />
            <h4 className="text-sm text-[#949393]">{Blocation || "Pune"}</h4>
          </div>
          <div className="flex  w-full cursor-pointer pt-2">
            <div className="flex w-full  space-x-1 justify-center items-center border-r  border-[#c3c3c4]">
              <Image src={Call} className="h-5 w-4" alt="customer" />
              <h4 className="text-sm text-[#777777]">call</h4>
            </div>
            <div className="flex border-r-1  space-x-1  justify-center  w-full items-center border-[#515151]">
              <Image src={Mails} className="h-5 w-4" alt="customer" />
              <h4 className="text-sm text-[#777777]">message</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
