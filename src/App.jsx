import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalLayout from "layouts/NormalLayout";
import HomePage from "pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthLayout from "layouts/AuthLayout";
import UserLogin from "pages/AuthUser/Login";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<NormalLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="auth" element={<AuthLayout />}>
              <Route index path="login" element={<UserLogin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
