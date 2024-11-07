import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { usePostLoginMutation } from "../../redux/service/login";
import { saveState } from "../../config/storege";
import { createUser } from "../../redux/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const distpach = useDispatch();
  const [mutationFns] = usePostLoginMutation();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    mutationFns(data)
      .unwrap()
      .then((res) => {
        if (res) {
          console.log(res);

          distpach(createUser(res));
          navigate("/app");
          toast.success(` Succses ${res.user.username}`);
        }
        reset();
      })
      .catch((error) => toast.error(error.data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(submit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Link
          style={{
            textDecoration: "none",
            fontFamily: "cursive",
            margin: "20px 40px",
          }}
          to="/sing-up"
        >
          Sing Up
        </Link>
      </Box>
    </Container>
  );
}
