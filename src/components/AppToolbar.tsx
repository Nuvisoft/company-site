import React from "react";
import {
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";

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
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));
  const buttonSize: "small" | "medium" = smUp ? "medium" : "small";

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 3 }}>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Nuvisoft
          </Typography>
          <Button variant="text" size={buttonSize}>
            Services
          </Button>
          <Button variant="text" size={buttonSize}>
            About
          </Button>
          <Button variant="contained" size={buttonSize}>
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
