import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MemberCard from "./MemberCard";
import { teamMembers } from "@data/teamMembers";
import { SectionId } from "@/constants";

export default function About() {
  const { t } = useTranslation();

  return (
    <Stack id={SectionId.About} spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3">{t("components.about.title")}</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
      >
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </Stack>
    </Stack>
  );
}
