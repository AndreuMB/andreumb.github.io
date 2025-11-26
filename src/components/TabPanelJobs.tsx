import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Trans } from "@lingui/react/macro";
import { msg } from "@lingui/core/macro";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

export default function TabPanelJobs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "yellow",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="secondary"
          className="text-secondary"
          variant="fullWidth"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "yellow",
            },
          }}
        >
          <Tab label={msg`Web Developer`.message} />
          <Tab label={msg`Game Developer`.message} />
          {/* <Tab label="Game Developer" {...a11yProps(0)} /> */}
          {/* <Tab label="Game Developer" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ul className="flex flex-col gap-2 list *:bg-primary-light p-2">
          <li>
            <Trans>This days I am focused on </Trans>
            <span>
              <Trans>frontend development</Trans>{" "}
            </span>
            (HTML, CSS, TypeScript, React, Tailwind, etc.).
          </li>
          <li>
            <Trans>I know my things around modern </Trans>
            <span>frameworks</span>
            <Trans> like Next.js, NestJS and Vue.js</Trans>
          </li>
          <li>
            <Trans>I've handled both </Trans>
            <span>
              SQL <Trans>and</Trans> NoSQL
            </span>{" "}
            <Trans>databases, including Firebase and Supabase.</Trans>
          </li>
          <li>
            <Trans>Comfortable using </Trans>
            <span>
              <Trans>version control</Trans>
            </span>
            <Trans>
              {" "}
              softwares like Git to keep projects smooth and organized
            </Trans>
            .
          </li>
        </ul>
        <div>
          <Trans>You can check my Web Developer resume here!</Trans> ={">"}
          <div>
            ★{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1PIvPWuf6B3CBkkH8gpuSGHwo6hV8fnhx/view?usp=sharing"
            >
              <Trans>Spanish</Trans>
            </a>{" "}
            ★ ★{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1m2AbjP1Y_vy8qAdH6r-BjMdWd1dVF8re/view?usp=sharing"
            >
              <Trans>English</Trans>
            </a>{" "}
            ★
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ul className="flex flex-col gap-2 list *:bg-primary-light p-2">
          <li>
            <Trans>
              Most of my experience is in <span>Unity</span> where I developed
              all kind of games
            </Trans>
            .
          </li>
          <li>
            <Trans>
              I have some projects on <span>Godot</span> too, where I learned
              the basics of it and GDscript
            </Trans>
            .
          </li>
          <li>
            <Trans>
              I did{" "}
              <span>
                <Trans>multiplayer</Trans>
              </span>{" "}
              projects using Netcode and{" "}
              <span>
                <Trans>VR/AR</Trans>
              </span>{" "}
              projects with XRTools and Vuforia
            </Trans>
            .
          </li>
          <li>
            <Trans>
              Even if my focus is in programming I made models in{" "}
              <span>Blender</span> and texture them with Blender/Substance
            </Trans>
            .
          </li>
        </ul>
        <div>
          <div>
            <Trans>You can check my Game Developer resume here!</Trans> ={">"}
            <div>
              ★{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/17cZbwyVoFon7fStYObZHxwokXo7S0xc2/view?usp=sharing"
              >
                <Trans>Spanish</Trans>
              </a>{" "}
              ★ ★{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1HSr1ef0mGMrCqoSh4Tl_BTXsBmpZnr3L/view?usp=sharing"
              >
                <Trans>English</Trans>
              </a>{" "}
              ★
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
