import { Button } from "@mui/material";

const PrimaryBtn = ({
  title,
  handleClick,
  tailingIcon = null,
  containerStyle = "",
  disable = false,
}: {
  title: string;
  containerStyle?: string;
  tailingIcon?: any;
  handleClick: () => void;
  disable?: boolean;
}) => {
  return (
    <Button
      disabled={disable}
      variant="contained"
      onClick={handleClick}
      className={`bg-[#0044BB] rounded-lg p-3 ${containerStyle}`}
    >
      {tailingIcon}
      {title}
    </Button>
  );
};
export default PrimaryBtn;
