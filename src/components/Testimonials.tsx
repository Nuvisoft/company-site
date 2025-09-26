import { Avatar, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Client Name",
    quote:
      "“A testimonial from a client who benefited from your product or service...”",
  },
  {
    name: "Client Name",
    quote:
      "“A testimonial from a client who benefited from your product or service...”",
  },
  {
    name: "Client Name",
    quote:
      "“A testimonial from a client who benefited from your product or service...”",
  },
];

export default function Testimonials() {
  return (
    <Stack spacing={3} sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3">Client Testimonials</Typography>
      <Grid container spacing={3}>
        {testimonials.map((t, i) => (
          <Grid key={i} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%", backgroundColor: "#0b1020" }}>
              <CardContent>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {t.quote}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar />
                  <Typography fontWeight={600}>{t.name}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
