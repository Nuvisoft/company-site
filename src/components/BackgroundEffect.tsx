import { Box } from "@mui/material";

interface BackgroundProps {
  effect: React.ReactNode;
  children: React.ReactNode;
  disablePointerEvents?: boolean;
}

function BackgroundEffect({
  effect,
  children,
  disablePointerEvents = true,
}: BackgroundProps) {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: disablePointerEvents ? "none" : "auto",
        }}
        aria-hidden={disablePointerEvents}
      >
        {effect}
      </Box>
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundEffect;
