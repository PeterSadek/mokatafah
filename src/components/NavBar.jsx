import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import logo2 from "../assets/logo2.png";

const pages = [
  "تواصل معنا",
  "أعضاء المجلس",
  "القيم",
  "الأهداف",
  "الرسالة",
  "الرؤية",
  "من نحن",
  "الرئيسية",
];

function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleCloseNavMenu();
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverColor =
    scrollPosition > 50 ? theme.palette.green.light : theme.palette.green.light;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrollPosition > 50 ? "transparent" : "transparent",
        transition: "background-color 0.3s ease",
        paddingInline: { md: "2rem", xs: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: "space-between" } }}
        >
          <Box
            component="a"
            href="#"
            sx={{ width: { md: "10%", sm: "10%", xs: "20%" } }}
          >
            <img
              src={logo2}
              alt="mokatafah logo"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleScrollToSection(page)}
                sx={{
                  my: 2,
                  color: theme.palette.green.main,
                  display: "block",
                  fontWeight: 900,
                  fontSize: "1rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: hoverColor,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.primary.light }}
            >
              <MenuIcon sx={{ color: theme.palette.green.main }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 0.4,
                  fontFamily: "monospace",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  color: theme.palette.green.main,
                }}
              >
                القائمة
              </Typography>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleScrollToSection(page)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#cfb74e",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ color: theme.palette.green.main, fontWeight: 600 }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
