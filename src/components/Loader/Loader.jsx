import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HashLoader } from "react-spinners";

export default function Loader({ isLoading }) {
  return (
    <Box
      m={"30px auto"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <HashLoader loading={isLoading} color="#00d1ff" size={45} />
        {isLoading && (
          <Typography variant="h5">Loading, please wait</Typography>
        )}
      </Box>
    </Box>
  );
}