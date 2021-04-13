import React, { useRef, useState } from "react";
import { useFormik } from "formik";

import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  authCard: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bottomText: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  alert: {
    width: "100%",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({email, password}) => {
      
      try {
        setError("");
        setLoading(true);
        await login(email, password);
        setLoading(false);
        history.push("/");
      } catch {
        setError("Failed to log in");
        setLoading(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.authCard}>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        {error && (
          <Alert severity="error" className={classes.alert}>
            {error}
          </Alert>
        )}
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            size="small"
            color="secondary"
          />
          {/* <Form.Group id="email1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group> */}
          <TextField
            id="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            size="small"
            color="secondary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={loading}
          >
            Log In
          </Button>
        </form>
        <div>
          <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      </Card>
      <div className={classes.bottomText}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
