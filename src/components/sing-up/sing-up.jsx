import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePostRegisterMutation } from "../../redux/service/register";
import { createUser } from "../../redux/reducer/user-reducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [MutationFn] = usePostRegisterMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    MutationFn(data)
      .unwrap()
      .then((res) => {
        dispatch(createUser(res));
        navigate("/app");
        reset();
      }).catch((error)=> toast.error(error.data));
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
          Sign Up
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
            label="Username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
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
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
