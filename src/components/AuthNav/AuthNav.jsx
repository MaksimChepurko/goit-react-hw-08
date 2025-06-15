import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@mui/material/Link";

export default function AuthNav() {
  const [isOpen, setIsOpen] = useState(null);
  const handleOpenNavMenu = (e) => setIsOpen(e.currentTarget);
  const handleCloseNavMenu = () => setIsOpen(null);
  return (
    <>
      <Box display={{ xs: "none", md: "flex" }} flexDirection={"row"} gap={2}>
        <Link
          component={NavLink}
          to={"/register"}
          color="textPrimary"
          sx={{
            transition: "color 350ms ease-in-out",
            "&:hover": { color: "#fff" },
          }}
        >
          Register
        </Link>
        <Link
          component={NavLink}
          to={"/login"}
          color="textPrimary"
          sx={{
            transition: "color 350ms ease-in-out",
            "&:hover": { color: "#fff" },
          }}
        >
          Log In
        </Link>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={isOpen}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(isOpen)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography
              component={NavLink}
              to="/register"
              sx={{ textAlign: "center" }}
            >
              Register
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography
              component={NavLink}
              to="/login"
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LoginIcon />
              Log in
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}