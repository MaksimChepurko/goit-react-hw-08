import Container from "@mui/material/Container";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Error from "../../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    console.log("Start");

    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box component={"section"} my={3}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ContactForm />
        <SearchBox />
        <Loader isLoading={isLoading} />
        {!isLoading && !error && <ContactList />}
        {!isLoading && error && <Error message={error} />}
      </Container>
    </Box>
  );
}