import AppBarMui from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Toolbar from "@mui/material/Toolbar";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBarMui
      position="sticky"
      sx={{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }}
    >
      <Container fixed>
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            px: "0",
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component={Link}
            fontSize={{ xs: "1em", sm: "2em" }}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            PhoneBook
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBarMui>
  );
};

export default AppBar;