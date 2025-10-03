import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import { useTranslation } from "react-i18next";
import SpotlightCard from "./SpotlightCard";
import { SectionId } from "@/constants";
import "./SpotlightCard/Custom.css";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("components.services.mobileApplications.title"),
      desc: t("components.services.mobileApplications.description"),
    },
    {
      title: t("components.services.customWebApps.title"),
      desc: t("components.services.customWebApps.description"),
    },
    {
      title: t("components.services.projectAdvisory.title"),
      desc: t("components.services.projectAdvisory.description"),
    },
    {
      title: t("components.services.staffAugmentation.title"),
      desc: t("components.services.staffAugmentation.description"),
    },
  ];

  return (
    <Stack id={SectionId.Services} spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3">{t("components.services.title")}</Typography>
      <Typography color="text.secondary" maxWidth={720}>
        {t("components.services.description")}
      </Typography>

      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <SpotlightCard className="custom-spotlight-card">
              <BuildRoundedIcon fontSize="large" />
              <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                {s.title}
              </Typography>
              <Typography color="text.secondary">{s.desc}</Typography>
            </SpotlightCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
