import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { AllLists } from "./AllLists";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { NotFoundPage } from "./NotFoundPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { StyleListing } from "./StyleListing";
import { ListInfo } from "./ListsInfo";

function App() {
  const Navigate = useNavigate();

  const [dresses, setDresses] = useState([]);

  useEffect(() => {
    fetch("https://back-end-nodejs.onrender.com/dresses")
      .then((res) => res.json())
      .then((data) => setDresses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [mode, setMode] = useState("light");

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <AppBar
          position="static"
          style={{
            backgroundColor: "brown",
            borderBottom: "solid",
            height: "40px",
            width: "100%",
            display: "inline-table",
            borderRadius: "10px",
          }}
        >
          <Container maxWidth="xl">
            <CssBaseline />
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/dresses");
              }}
            >
              All Dresses
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/dresses/Bohemian");
              }}
            >
              Bohemian
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/dresses/Elegant");
              }}
            >
              Elegant
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/dresses/Professional");
              }}
            >
              Professional
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                Navigate("/dresses/Relaxed");
              }}
            >
              Relaxed
            </Button>
            <Button
              style={{ position: " absolute", right: " 0%", color: "white" }}
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              {" "}
              {mode === "light" ? "dark" : "light"} MODE
            </Button>
          </Container>
        </AppBar>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dresses"
            element={<AllLists dresses={dresses} setDresses={setDresses} />}
          />
          <Route
            path="/dresses/Bohemian"
            element={<StyleListing style="Bohemian" dresses={dresses} />}
          />
          <Route
            path="/dresses/Elegant"
            element={<StyleListing style="Elegant" dresses={dresses} />}
          />
          <Route
            path="/dresses/Professional"
            element={<StyleListing style="Professional" dresses={dresses} />}
          />
          <Route
            path="/dresses/Relaxed"
            element={<StyleListing style="Relaxed" dresses={dresses} />}
          />
          <Route path="/dresses/:id" element={<ListInfo dresses={dresses} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
     
      </div>
    </ThemeProvider>
  );
}

export default App;
