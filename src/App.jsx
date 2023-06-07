import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalLayout from "layouts/NormalLayout";
import HomePage from "pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthLayout from "layouts/AuthLayout";
import UserLogin from "pages/AuthUser/Login";
import UserRegister from "pages/AuthUser/Register";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<NormalLayout />}>
                <Route index element={<HomePage />} />
              </Route>
              <Route path="auth" element={<AuthLayout />}>
                <Route index path="login" element={<UserLogin />} />{" "}
                <Route index path="register" element={<UserRegister />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
