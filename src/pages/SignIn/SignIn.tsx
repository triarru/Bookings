import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { bookData } from "../../utils/mockData";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const theme = createTheme();

export default function SignIn() {
  const [step, setStep] = React.useState(1);
  const [book, setBook] = React.useState([]);
  const [test, setTest] = React.useState<any>([]);
  const [fromDate, setFromDate] = React.useState<Date | null>(new Date());
  const [toDate, setToDate] = React.useState<Date | null>(new Date());

  const [bookSubmitData, setBookSubmitData] = React.useState<any>([]);

  const [submitData, setSubmitData] = React.useState({
    name: "",
    age: "",
    address: "",
    mail: "",
    toDate: toDate,
    fromDate: fromDate,
    bookSubmitData: bookSubmitData,
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    handleBookSubmitData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBookSubmitData = () => {
    book.forEach((e, idx) => {
      setBookSubmitData((item: any) => {
        console.log(book);
        console.log(item);
        return [
          ...item,
          {
            name: e,
            quantity: test[idx],
            price:
              parseInt(test[idx], 10) *
              parseInt(
                bookData.filter((bookName) => bookName.name === e)[0].price,
                10
              ),
          },
        ];
      });
    });
    setSubmitData((ee) => {
      return {
        ...ee,
        bookSubmitData: bookSubmitData,
      };
    });
  };

  const handleSubmit = () => {
    console.log(submitData);
    setOpen(false);
  };

  useEffect(() => {}, []);

  const handleBookChange = (event: any) => {
    setBook(event.target.value);
  };

  const handleFromDateChange = (newValue: any) => {
    setFromDate(newValue);
    setSubmitData((e: any) => ({
      ...e,
      fromDate: newValue,
    }));
  };

  const handleToDateChange = (newValue: any) => {
    setToDate(newValue);
    setSubmitData((e: any) => ({
      ...e,
      toDate: newValue,
    }));
  };

  const handleNameChange = (newValue: any) => {
    setSubmitData((e) => ({
      ...e,
      name: newValue.target.value,
    }));
  };

  const handleAgeChange = (newValue: any) => {
    setSubmitData((e) => ({
      ...e,
      age: newValue.target.value,
    }));
  };

  const handleMailChange = (newValue: any) => {
    setSubmitData((e) => ({
      ...e,
      mail: newValue.target.value,
    }));
  };

  const handleAddressChange = (newValue: any) => {
    setSubmitData((e) => ({
      ...e,
      address: newValue.target.value,
    }));
  };

  const handleQuantityChange = (newValue: any) => {
    setTest((e: any) => [...e, newValue.target.value]);
  };

  const renderCount = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleNameChange}
                autoFocus
              />
              <Grid container spacing={1}>
                <Grid item lg={3}>
                  <TextField
                    required
                    fullWidth
                    name="age"
                    label="Age"
                    type="age"
                    id="age"
                    onChange={handleAgeChange}
                  />
                </Grid>
                <Grid item lg={9}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="address"
                    id="address"
                    onChange={handleAddressChange}
                  />
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    required
                    fullWidth
                    name="mail"
                    label="Email"
                    type="mail"
                    id="mail"
                    onChange={handleMailChange}
                  />
                </Grid>
              </Grid>
              <Button
                onClick={() => setStep(step + 1)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
            </Box>
            {/* </form> */}
          </>
        );
      case 2:
        return (
          <>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <Box sx={{ mt: 1 }}>
              <Box sx={{ my: 2 }}>
                <InputLabel id="demo-multiple-checkbox-label">Books</InputLabel>
                <Select
                  multiple
                  fullWidth
                  id="demo-simple-select"
                  value={book}
                  label="Book"
                  onChange={handleBookChange}
                >
                  {bookData.map((item, idx) => (
                    <MenuItem key={idx} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                {book.map((item, idx) => (
                  <Grid container spacing={2} key={idx}>
                    <Grid item lg={8}>
                      <TextField
                        margin="normal"
                        disabled
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        type="name"
                        id="name"
                        value={item}
                      />
                    </Grid>
                    <Grid item lg={4}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="quantity"
                        label="Quantity"
                        type="quantity"
                        id="quantity"
                        onChange={handleQuantityChange}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Box>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    <DesktopDatePicker
                      label="From Date"
                      inputFormat="MM/dd/yyyy"
                      value={fromDate}
                      onChange={handleFromDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <DesktopDatePicker
                      label="To Date"
                      inputFormat="MM/dd/yyyy"
                      value={toDate}
                      onChange={handleToDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>
                </Grid>
              </LocalizationProvider>
              <Grid container spacing={2}>
                <Grid item lg={6} sx={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    onClick={() => setStep(step - 1)}
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background: "gray" }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item lg={6} sx={{ textAlign: "center" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleClickOpen}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* </form> */}
          </>
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "gray" }}>
            <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bookings
          </Typography>
          {renderCount()}
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleSubmit} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
