import React from "react";
import { useScrollTrigger, Slide } from "@mui/material";
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
  return (
    <HideOnScroll>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ gap: 3 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
            company-site
          </Typography>
          <Button variant="text">Services</Button>
          <Button variant="text">About</Button>
          <Button variant="contained">Contact us</Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
