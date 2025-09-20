import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

const benefits = ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"];

export default function WhyChooseUs() {
  return (
    <Stack spacing={3} sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3">Why Choose Us</Typography>
      <Grid container spacing={2}>
        {benefits.map((b, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6 }}>
            <Typography variant="h6">{b}</Typography>
            <Typography color="text.secondary">
              A short description of the benefit.
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
