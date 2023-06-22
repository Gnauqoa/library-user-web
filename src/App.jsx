import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalLayout from "layouts/NormalLayout";
import HomePage from "pages/Home";
import AuthLayout from "layouts/AuthLayout";
import UserLogin from "pages/AuthUser/Login";
import UserRegister from "pages/AuthUser/Register";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AutoLogin from "components/AutoLogin";
import Book from "pages/Book";
import PrivateRouter from "components/PrivateRouter";
import UserProfile from "pages/UserProfile";
import SearchBook from "pages/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AutoLogin />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<NormalLayout />}>
              <Route index element={<HomePage />} />
              <Route path="book/:current_book_id" element={<Book />} />{" "}
              <Route path="user" element={<PrivateRouter />}>
                <Route index element={<UserProfile />} />
              </Route>
              <Route path="search" element={<SearchBook />}></Route>
            </Route>
            <Route path="auth" element={<AuthLayout />}>
              <Route index path="login" element={<UserLogin />} />{" "}
              <Route index path="register" element={<UserRegister />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
