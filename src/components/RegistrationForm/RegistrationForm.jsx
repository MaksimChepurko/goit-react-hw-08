import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(25, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Password should be of minimum 7 characters length")
    .max(40, "Too long")
    .required("Required"),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    try {
      toast.loading("Registration...", { id: "register" });
      const response = await dispatch(register(values)).unwrap();
      toast.success(`Welcome ${response.user.name}`, { id: "register" });
    } catch {
      toast.error("Something went wrong", { id: "register" });
    } finally {
      actions.resetForm();
    }
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      validateOnBlur
      validateOnChange
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
      }) => (
        <Form autoComplete="off">
          <Box
            display={"flex"}
            flexDirection={"column"}
            padding={2}
            maxWidth={400}
            margin={"0 auto"}
          >
            <TextField
              name="name"
              label="Name"
              type="text"
              value={values.name}
              autoComplete="given-name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              variant="outlined"
              margin="dense"
              size="small"
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={values.email}
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              variant="outlined"
              margin="dense"
              size="small"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              autoComplete="new-password"
              margin="dense"
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              sx={{
                px: 2,
                display: "block",
                width: "fit-content",
                mx: "auto",
                mt: 1,
              }}
            >
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}