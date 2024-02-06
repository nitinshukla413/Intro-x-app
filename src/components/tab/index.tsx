import {
  Tab,
  Tabs,
} from "@mui/material";
import { useState } from "react";
const TabNavigator = ({
  tabs,
  getTabContent,
}: {
  tabs: string[];
  getTabContent: (id: number) => any;
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col justify-start w-full">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        className="w-full flex  justify-start border-b-2 "
        TabIndicatorProps={{
          style: { background: "#0444BB", height: "4px", color: "red" },
        }}
        sx={{
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
          },
        }}
      >
        {tabs?.map((elem: string, i: number) => (
          <Tab
            label={elem}
            style={{
              ...(value == i
                ? {
                    color: "#0444BB",
                    backgroundColor: "rgb(192,192,192,0.15)",
                  }
                : ""),
            }}
            className="flex-[0.5] p-5"
            key={i}
          />
        ))}
      </Tabs>
      {getTabContent(value)}
    </div>
  );
};

export default TabNavigator;
