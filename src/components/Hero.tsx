import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SectionId } from "@/constants";

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
            <Button
              size="large"
              variant="contained"
              href={`#${SectionId.Contact}`}
            >
              {t("components.hero.contactButton")}
            </Button>
            <Button
              size="large"
              variant="outlined"
              href={`#${SectionId.About}`}
            >
              {t("components.hero.learnMoreButton")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
