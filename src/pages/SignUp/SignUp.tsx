import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { signInWithCredentials } from "../../services/api/auth";
import * as Yup from 'yup';
import { string } from "yup/lib/locale";

const theme = createTheme();

const validationSchema = Yup.object().shape({
    name: Yup.string().required('You have to fill this field'),
    username: Yup.string().required('You have to fill this field'),
    password: Yup.string().required('You have to fill this field'),
    email: Yup.string().email('Must be a valid email').required('You have to fill this field'),
    repassword: Yup.string().required('You have to fill this field'),
})

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      email: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      console.log(values);
      if (values.password === values.repassword) {
        signInWithCredentials(
            values.name,
            values.username,
            values.password,
            values.email,
        )
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    error={formik.touched.name}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                 
                    helperText={formik.touched.name ? formik.errors.name : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    error={formik.touched.email}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email ? formik.errors.email : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={formik.values.username}
                    error={formik.touched.username}
                    onChange={formik.handleChange}
                    helperText={formik.touched.username ? formik.errors.username : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={formik.touched.password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    helperText={formik.touched.password ? formik.errors.password : ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="repassword"
                    label="Re-Password"
                    type="password"
                    id="repassword"
                    error={formik.touched.repassword}
                    value={formik.values.repassword}
                    onChange={formik.handleChange}
                    helperText={formik.touched.repassword ? formik.errors.repassword : ''}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
