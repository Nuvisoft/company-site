import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
      }}
    >
      <Container>
        <Stack spacing={3} maxWidth={800}>
          <Typography variant="h2" component="h1">
            {t("components.hero.title")}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {t("components.hero.subtitle")}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained">
              {t("components.hero.contactButton")}
            </Button>
            <Button size="large" variant="outlined">
              {t("components.hero.learnMoreButton")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
