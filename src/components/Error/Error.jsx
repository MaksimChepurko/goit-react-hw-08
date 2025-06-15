import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Error({ message }) {
  return (
    <Box bgcolor="Background">
      <Typography variant="h2" color="error">
        {message}
      </Typography>
    </Box>
  );
}