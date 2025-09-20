import { Stack, Typography, Button } from "@mui/material";

export default function About() {
  return (
    <Stack spacing={2} sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3">About Our Company</Typography>
      <Typography color="text.secondary" maxWidth={900}>
        Use this section to describe your company and the services you offer.
        You could share your company’s story and details about why you are in
        business. The goal is to create a connection with the visitor and give
        them confidence to work with you.
      </Typography>
      <Button variant="text">Our Story</Button>
    </Stack>
  );
}
