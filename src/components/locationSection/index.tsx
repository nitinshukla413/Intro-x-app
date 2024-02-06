import delhi from "../../../public/assets/images/delhi.png";
import nashik from "../../../public/assets/images/nashik.png";
import nagpur from "../../../public/assets/images/nagpur.png";
import ratnigir from "../../../public/assets/images/ratnagiri.png";
import latur from "../../../public/assets/images/Latur.png";
import mumbai from "../../../public/assets/images/mumbai.png";
import Image from "next/image";
const LocationSection = () => {
  const images = [
    { img: mumbai, w: "12%" },
    { img: delhi, w: "20%" },
    { img: nashik, w: "35%" },
    { img: nagpur, w: "35%" },
    { img: ratnigir, w: "20%" },
    { img: latur, w: "12%" },
  ];
  return (
    <div className="flex flex-col">
      <h3
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl max-md:text-2xl text-black font-[500] mb-10 max-md:mb-5"
      >
        Products By Top <span className="text-[#0344B6]">Cities</span>
      </h3>
      <div className="flex flex-wrap justify-center items-center">
        {images?.map((elem, i) => (
          <Image
            data-aos={i % 2 == 0 ? "fade-up" : "fade-left"}
            data-aos-duration="1000"
            src={elem.img}
            className={`hover:scale-105 h-[25vh] max-lg:h-[20vh] object-fill delay-3000 cursor-pointer w-[${elem.w}] max-lg:w-[30%] max-md:w-[100%] max-md:mr-0 max-md:mb-5 mr-10 mb-10`}
            alt={"city"}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
export default LocationSection;
