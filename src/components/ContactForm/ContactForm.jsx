import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";

const ContactValid = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short")
    .matches(/^\+?[0-9\s-]{1,}$/, "Type Correct Phone!")
    .max(50, "Too Long")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    toast.promise(dispatch(addContact(values)).unwrap(), {
      loading: "Loading",
      success: `Added ${values.name} to your contacts`,
      error: "Something went wrong",
    });
    actions.resetForm();
  };
  return (
    <Box bgcolor={"Highlight"} p={1} borderRadius={2}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
        validationSchema={ContactValid}
      >
        {({
          errors,
          values,
          handleBlur,
          handleChange,
          touched,
          isSubmitting,
        }) => (
          <Form>
            <Box
              display={"flex"}
              flexDirection={"column"}
              p={3}
              gap={2}
              maxWidth={500}
              m={"0 auto"}
              bgcolor={"Background"}
              borderRadius={2}
            >
              <TextField
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                variant="outlined"
                margin="dense"
                size="small"
              />
              <TextField
                type="tel"
                label="Number"
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                variant="outlined"
                margin="dense"
                size="small"
              />
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  bgcolor: "ButtonFace",
                  color: "ButtonText",
                  "&:hover": {
                    bgcolor: "Background",
                  },
                }}
              >
                Add contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;