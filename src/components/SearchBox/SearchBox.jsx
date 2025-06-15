import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(changeFilter(e.target.value));
  return (
    <Paper
      elevation={15}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "32px",
      }}
    >
      <TextField
        id="searchBox"
        name="searchBox"
        label="Search contacts"
        variant="standard"
        onChange={handleChange}
        sx={{ width: { sm: "300px", md: "400px", lg: "450px" } }}
      />
    </Paper>
  );
};

export default SearchBox;