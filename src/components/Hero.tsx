import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background: "linear-gradient(180deg,#f8fafc, #ffffff)",
      }}
    >
      <Container>
        <Stack spacing={3} maxWidth={800}>
          <Typography variant="h2" component="h1">
            This Headline Grabs Visitors’ Attention
          </Typography>
          <Typography variant="h6" color="text.secondary">
            A short description of your business
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained">
              Contact us
            </Button>
            <Button size="large" variant="outlined">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
