import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function NotFoundPage() {
  return (
    <Box
      component={"section"}
      p={{ xs: "30px", sm: "40px", md: "60px" }}
      bgcolor={"#4692ddb3"}
      height={"100vh"}
      mt={"-5px"}
    >
      <Container>
        <Paper
          elevation={24}
          sx={{
            p: "20px",
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h1"
            fontSize={{ xs: "4rem", md: "6rem", lg: "7rem" }}
            textAlign={"center"}
          >
            Oops
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            fontSize={{ xs: "1rem", lg: "1.5rem" }}
          >
            The Page you're looking for isn't here.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}