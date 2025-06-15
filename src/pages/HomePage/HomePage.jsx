import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  return (
    <Box component={"section"}>
      <Container>
        <Typography
          variant="h3"
          textAlign={"center"}
          mt={{ xs: "40px", sm: "60px", md: "80px", lg: "100px" }}
          fontSize={{ xs: "2em", sm: "3em", md: "4em", lg: "5em" }}
        >
          Hello,{" "}
          {isLoggedIn ? userName : "for use this web site log in or register"}
        </Typography>
      </Container>
    </Box>
  );
};

export default HomePage;