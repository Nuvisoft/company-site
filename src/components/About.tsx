import { Stack, Typography, Container, Grid, Card, CardContent, Avatar, IconButton, Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const teamMembers = [
  {
    name: "Nombre Apellido",
    role: "Frontend Developer",
    bio: "Apasionado por crear interfaces de usuario interactivas y accesibles con React y las últimas tecnologías web.",
    image: "https://via.placeholder.com/200",
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Nombre Apellido",
    role: "Backend Developer",
    bio: "Especialista en la construcción de APIs robustas y escalables, con experiencia en Node.js, Python y bases de datos.",
    image: "https://via.placeholder.com/200",
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    name: "Nombre Apellido",
    role: "Full-Stack Developer",
    bio: "Conecto el frontend y el backend para entregar productos completos y funcionales. Me encanta resolver problemas complejos.",
    image: "https://via.placeholder.com/200",
    socials: {
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      twitter: "https://twitter.com/",
    },
  },
];

export default function About() {
  return (
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      {/* Encabezado de la sección */}
      <Stack spacing={2} sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Nuestro Equipo
        </Typography>
        <Typography color="text.secondary" maxWidth="700px" margin="0 auto">
          Somos un grupo de desarrolladores apasionados por la tecnología y la creación de soluciones innovadoras que impactan positivamente en el mundo.
        </Typography>
      </Stack>

      {/* Grid de Perfiles */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Card
              sx={{
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                ':hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: 6, // Aumenta la sombra al pasar el cursor
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
                  borderColor: 'primary.main',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" fontWeight="500">
                  {member.name}
                </Typography>
                <Typography color="primary" sx={{ mb: 1.5 }}>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <IconButton component="a" href={member.socials.linkedin} target="_blank" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton component="a" href={member.socials.github} target="_blank" aria-label="GitHub">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton component="a" href={member.socials.twitter} target="_blank" aria-label="Twitter">
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}