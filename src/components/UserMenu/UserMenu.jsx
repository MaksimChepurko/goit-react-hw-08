import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import Button from "@mui/material/Button";
import { logOut } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState();
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogOut = async () =>
    toast.promise(dispatch(logOut()).unwrap(), {
      loading: "Logging Out ...",
      success: `Goodbye ${userName}`,
      error: "Please try again later",
    });
  const handleOpenNavMenu = (e) => setIsOpen(e.currentTarget);
  const handleCloseNavMenu = () => setIsOpen(null);
  return (
    <>
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection={"row"}
        alignItems={"center"}
        gap={1}
      >
        <Typography variant="p" color="#000" sx={{ cursor: "default" }}>
          Hello, {userName}
        </Typography>
        <Button size="medium" color="secondary.main" onClick={handleLogOut}>
          {<LogoutIcon />}Log Out
        </Button>
      </Box>
      <Box display={{ xs: "flex", md: "none" }}>
        <IconButton
          size="medium"
          aria-label="User menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <Avatar sx={{ bgcolor: "Background", color: "primary.main" }}>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
        </IconButton>
        <Menu
          id="user-menu-appbar"
          anchorEl={isOpen}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(isOpen)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography
              variant="p"
              fontSize={{ xs: "1rem" }}
              color="inherit"
              sx={{ cursor: "default" }}
            >
              Hello, {userName}
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography component={Button} onClick={handleLogOut}>
              {<LogoutIcon />}Log Out
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}