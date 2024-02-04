const Wrapper = (props: any) => {
  return <div className="w-[80vw] max-md:w-full max-md:p-10 max-lg:w-[90%]">{props.children}</div>;
};
export default Wrapper;
