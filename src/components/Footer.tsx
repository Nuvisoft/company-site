import { Box, Container, Stack, Typography, Link } from "@mui/material";

export default function Footer() {
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
            © {new Date().getFullYear()} Your Company
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" color="#cbd5e1" underline="hover">
              Privacy
            </Link>
            <Link href="#" color="#cbd5e1" underline="hover">
              Terms
            </Link>
            <Link href="#" color="#cbd5e1" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
