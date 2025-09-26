import { Card, CardContent, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

const items = [
  {
    title: "Service 1",
    desc: "A short description of the service and how the visitor will benefit from it.",
  },
  {
    title: "Service 2",
    desc: "A short description of the service and how the visitor will benefit from it.",
  },
  {
    title: "Service 3",
    desc: "A short description of the service and how the visitor will benefit from it.",
  },
  {
    title: "Service 4",
    desc: "A short description of the service and how the visitor will benefit from it.",
  },
];

export default function Services() {
  return (
    <Stack spacing={4} sx={{ py: { xs: 4, md: 6 } }} id="services">
      <Typography variant="h3">Our Services</Typography>
      <Typography color="text.secondary" maxWidth={720}>
        This text briefly introduces your main services to your visitors.
      </Typography>

      <Grid container spacing={3}>
        {items.map((s, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: "100%", backgroundColor: "#0b1020" }}>
              <CardContent>
                <BuildRoundedIcon fontSize="large" />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {s.title}
                </Typography>
                <Typography color="text.secondary">{s.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
