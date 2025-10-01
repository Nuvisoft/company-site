import React from "react";
import {
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./LanguageSelect";
import Magnet from "./Magnet";

type HideOnScrollProps = { children: React.ReactElement };

function HideOnScroll({ children }: HideOnScrollProps) {
  // Hides the AppBar when scrolling down and shows it when scrolling up
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function AppToolbar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const buttonSize: "small" | "medium" = smUp ? "medium" : "small";

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 3 }}>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 600 }}>
            {t("global.companyName")}
          </Typography>
          <Button variant="text" size={buttonSize}>
            {t("components.toolbar.services")}
          </Button>
          <Button variant="text" size={buttonSize}>
            {t("components.toolbar.about")}
          </Button>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "primary.main" }}
          />
          <LanguageSelect />
          <Magnet padding={50} magnetStrength={2}>
            <Button variant="contained" size={buttonSize}>
              {t("components.toolbar.contactUs")}
            </Button>
          </Magnet>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
