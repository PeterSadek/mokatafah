import Header from "./components/Header";
import "./App.css";
import { Box } from "@mui/material";
import Welcome from "./components/Welcome";
import OurVision from "./components/OurVision";
import OurMessage from "./components/OurMessage";
import OurGoals from "./components/OurGoals";
import OurValues from "./components/OurValues";
import GeneralGoals from "./components/GeneralGoals";
import BoardMembers from "./components/BoardMembers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Box sx={{ marginInline: { md: "6rem", xs: "1rem" } }}>
        <Welcome />
        <OurVision />
        <OurMessage />
        <OurGoals />
        <OurValues />
        <GeneralGoals />
        <BoardMembers />
      </Box>
      <Footer />
    </>
  );
}

export default App;
