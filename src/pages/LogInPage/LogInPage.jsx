import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LogInPage() {
  return (
    <Box component={"section"} py={5}>
      <Container>
        <LoginForm />
      </Container>
    </Box>
  );
}