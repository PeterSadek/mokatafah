import { Box, Paper } from "@mui/material";
import heroImage2 from "../assets/تصميم_بدون_عنوان-removebg.png";
import heroImage from "../assets/تصميم_بدون_عنوان-removebgmob.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Paper
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#e0e0e0",
      }}
      id="الرئيسية"
    >
      <Box
        sx={{
          backgroundImage: {
            md: `linear-gradient(to bottom right, rgba(9, 106, 56, 0.5), rgba(207, 183, 78, 0.1)), url(${heroImage2})`,
            xs: `linear-gradient(to bottom right, rgba(9, 106, 56, 0.5), rgba(207, 183, 78, 0.1)), url(${heroImage})`,
          },
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      />
      <NavBar />
    </Paper>
  );
};

export default Header;
