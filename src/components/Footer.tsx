import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ mt: 8, py: 6, bgcolor: "#0b1020" }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Typography color="#cbd5e1">
            © {new Date().getFullYear()} {t("global.companyName")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
