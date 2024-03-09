'use client'
import delhi from "../../../public/assets/images/delhi.png";
import nashik from "../../../public/assets/images/nashik.png";
import nagpur from "../../../public/assets/images/nagpur.png";
import ratnigir from "../../../public/assets/images/ratnagiri.png";
import latur from "../../../public/assets/images/Latur.png";
import mumbai from "../../../public/assets/images/mumbai.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const LocationSection = () => {
  const router=useRouter()
  const images = [
    { img: mumbai, w: "12%",title:'Mumbai' },
    { img: delhi, w: "20%",title:'Delhi'  },
    { img: nashik, w: "35%", title:'Nashik' },
    { img: nagpur, w: "35%",title:'Nagpur'  },
    { img: ratnigir, w: "20%" ,title:'Ratnigiri' },
    { img: latur, w: "12%",title:'Latur'  },
  ];
  return (
    <div className="flex flex-col pt-20 max-md:pt-10">
      <h3
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-3xl max-md:text-2xl text-black font-[500] mb-10 max-md:mb-5"
      >
        Products By Top <span className="text-[#0A6269] font-bold">Cities</span>
      </h3>
      <div className="flex flex-wrap justify-center items-center">
        {images?.map((elem, i) => (
          <Image
          onClick={()=>{
            router.push(`/top-listing?id= products in ${elem.title}`);
          }}
            data-aos={i % 2 == 0 ? "fade-up" : "fade-left"}
            data-aos-duration="1000"
            src={elem.img}
            className={`hover:scale-110 h-[25vh] max-lg:h-[20vh] object-fill delay-3000 cursor-pointer w-[${elem.w}] max-lg:w-[30%] max-md:w-[100%] max-md:mr-0 max-md:mb-5 mr-10 mb-10`}
            alt={"city"}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
export default LocationSection;
