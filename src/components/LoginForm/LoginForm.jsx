import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import Paper from "@mui/material/Paper";

const LogInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Short").max(40, "Too long"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleLogIn = async (values, actions) => {
    try {
      toast.loading("Logging in...", { id: "login" });
      const response = await dispatch(logIn(values)).unwrap();
      toast.success(`Welcome ${response.user.name}`, { id: "login" });
    } catch {
      toast.error("Something went wrong", { id: "login" });
    } finally {
      actions.resetForm();
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LogInSchema}
      validateOnBlur
      validateOnChange
      onSubmit={handleLogIn}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form>
          <Box
            component={Paper}
            display={"flex"}
            flexDirection={"column"}
            maxWidth={{ xs: "400px", md: "450px" }}
            m={"0 auto"}
            p={{ xs: "16px", md: "32px" }}
            elevation={15}
          >
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
              variant="standard"
              margin="dense"
              size="small"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              autoComplete="password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              variant="standard"
              margin="dense"
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
              Log In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}