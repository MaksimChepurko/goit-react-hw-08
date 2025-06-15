import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PlaceHolder = ({ hasContacts, hasVisibleContacts }) => {
  return (
    <Box>
      <Typography variant="h2" color="info" bgcolor={"transparent"}>
        {(hasContacts && !hasVisibleContacts && "No match") ||
          (!hasContacts && "No contacts. Please add!")}
      </Typography>
    </Box>
  );
};

export default PlaceHolder;