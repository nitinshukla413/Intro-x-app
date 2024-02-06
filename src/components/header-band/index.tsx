const HeaderBand = ({ title }: { title: string }) => {
  return (
    <div
      data-aos="flip-up"
      className="h-[25vh] w-full bg-[#080229] flex justify-center items-center"
    >
      <h3 className="text-3xl font-bold text-white">{title}</h3>
    </div>
  );
};
export default HeaderBand;
