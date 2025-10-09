
import { Stack, Typography, Container, Card, CardContent, Avatar, IconButton, Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { teamMembers } from "@/data/teamMembers";
import type { TeamMember } from "@/data/teamMembers";
import { isValidUrl } from '@/utils/validation';

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard = ({ member }: MemberCardProps) => (
  <Box
   
    sx={{
      flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 30%' },
      minWidth: { xs: 0, sm: 280, md: 320 },
      maxWidth: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
    }}
  >
    <Card
      sx={{
        textAlign: 'center',
        width: '100%',
        height: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
        boxShadow: 0,
        transition: 'transform 0.3s, box-shadow 0.3s',
        ':hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
          borderColor: 'secondary.main',
        },
      }}
    >
      <Avatar
        alt={member.name}
        src={member.image}
        sx={{
          width: 120,
          height: 120,
          margin: '24px auto 16px',
          border: '4px solid',
          borderColor: 'secondary.main',
          bgcolor: 'background.default',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="h2" fontWeight="500" color="text.primary">
          {member.name}
        </Typography>
        <Typography color="secondary" sx={{ mb: 1.5 }}>
          {member.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {member.bio}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {isValidUrl(member.socials.linkedin) && (
            <IconButton component="a" href={member.socials.linkedin} rel="noopener noreferrer" target="_blank">
              <LinkedInIcon />
            </IconButton>
          )}
          {isValidUrl(member.socials.github) && (
            <IconButton component="a" href={member.socials.github} rel="noopener noreferrer" target="_blank">
              <GitHubIcon />
            </IconButton>
          )}
          {isValidUrl(member.socials.twitter) && (
            <IconButton component="a" href={member.socials.twitter} rel="noopener noreferrer" target="_blank">
              <TwitterIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default function About() {
  return (
    <Container sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default', color: 'text.primary' }}>
      <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight="bold" color="text.primary">
          Nuestro Equipo
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
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
    </Container>
  );
}