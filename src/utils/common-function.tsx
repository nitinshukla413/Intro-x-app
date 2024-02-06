import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
export const typeOfData = {
  text: "text",
  dob: "dob",
  email: "email",
  file: "file",
  number: "number",
  select: "select",
};

export const getInputText = ({
  id,
  val,
  handleChange,
  placeholder,
  label,
  hintText,
  menuList,
}: {
  id: string;
  val: string;
  label?: string;
  placeholder?: string;
  menuList?: any;
  hintText?:string,
  handleChange: (val: any) => void;
}) => {
  // Define inner functional components
  const TextComponent = (props: any) => (
    <div className="flex flex-col w-full">
      <label className="text-lg text-[#777777] font-[500] max-md:text-md">{label}</label>
      <TextField
        {...props}
        id="standard-basic"
        variant="standard"
        placeholder={placeholder}
        type={id}
        onChange={handleChange}
        value={val}
      />
    </div>
  );

  const SelectComponent = (props: any) => (
    <FormControl {...props} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        {...props}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={val}
        label={label}
        onChange={handleChange}
      >
        {menuList?.map((elem: string, i: number) => (
          <MenuItem value={i} key={i}>
            {elem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const FileComponent = (props: any) => (
    <div className="flex flex-col justify-start ">
      <h2 className="text-[#787878] mb-2">{label}</h2>
      <TextField type="file" className="border-none" {...props} />
    </div>
  );

  // Switch statement to return the appropriate component
  switch (id) {
    case typeOfData.dob:
    case typeOfData.text:
    case typeOfData.number:
    case typeOfData.email:
      return TextComponent;
    case typeOfData.select:
      return SelectComponent;
    case typeOfData.file:
      return FileComponent;
    default:
      break;
  }
};
