import Box from "@mui/material/Box";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <Box>
      <AppBar />
      {children}
    </Box>
  );
}