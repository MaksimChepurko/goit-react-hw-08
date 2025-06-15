import Contact from "../Contact/Contact";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import {
  selectContacts,
  selectFiltredContacts,
} from "../../redux/contacts/selectors";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFiltredContacts);
  return (
    <Paper square={false} elevation={24} sx={{ p: 2 }}>
      <Typography variant="h6">Contacts list</Typography>
      {visibleContacts.length > 0 ? (
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            gap: { xs: "8px", sm: "16px", md: "24px" },
          }}
        >
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ListItem
                width={"100%"}
                key={id}
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: "5",
                  flexDirection: { xs: "column", sm: "row" },
                  alignContent: "stretch",
                }}
              >
                <Contact name={name} number={number} id={id} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <PlaceHolder
          hasContacts={contacts.length > 0}
          hasVisibleContacts={visibleContacts.length > 0}
        />
      )}
    </Paper>
  );
};

export default ContactList;