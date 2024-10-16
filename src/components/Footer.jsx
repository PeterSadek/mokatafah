import { Box, Stack, Typography, useTheme } from "@mui/material";
import x from "../assets/x-green.png";
import youtube from "../assets/youtube-green.png";
import instagram from "../assets/instagram-green.png";
import whatsapp from "../assets/whatsapp-green.png";
import email from "../assets/email-green.png";
import snapchat from "../assets/snapchat-green.png";
import styles from "./ContactUs.module.css";

const Footer = () => {
  const theme = useTheme();

  const socialIcons = [
    {
      name: instagram,
      link: "https://www.instagram.com/mokatafah/?utm_source=qr",
    },
    {
      name: youtube,
      link: "https://www.youtube.com/@المحيذيف",
    },
    { name: x, link: "https://www.x.com/@mokatafah" },
    {
      name: snapchat,
      link: "https://www.snapchat.com/add/mokatafah",
    },
  ];

  return (
    <footer>
      <Box
        dir="rtl"
        sx={{
          padding: "2rem",
          background:
            "linear-gradient(to bottom right, rgba(9, 106, 56, 0.5), rgba(207, 183, 78, 0.1))",
        }}
        id="تواصل معنا"
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-evenly"
          alignItems={{ xs: "center", md: "start" }}
          gap={2}
        >
          <Stack direction="column">
            <Typography variant="h6" mb={1} color={theme.palette.green.main}>
              تواصل معنا
            </Typography>
            <Stack alignItems="start" gap={1}>
              <a
                className={styles.link}
                target="_blank"
                href="mailto:info@mokatafah.sa"
              >
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <span>info@mokatafah.sa</span>
                  <img src={email} alt="email logo" width="30px" />
                </Stack>
              </a>

              <a
                className={styles.link}
                target="_blank"
                href="https://wa.me/9660537931827"
                aria-label="Chat on WhatsApp"
                style={{ alignSelf: "flex-end" }}
              >
                <Stack direction="row" alignItems="center" gap={0.5}>
                  <span>0537931827</span>
                  <img src={whatsapp} alt="what's app logo" width="30px" />
                </Stack>
              </a>
            </Stack>
          </Stack>

          <Stack>
            <Typography variant="h6" mb={1} color={theme.palette.green.main}>
              تابعنا على
            </Typography>
            <Stack alignItems="start" gap={1} direction="row">
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.link} target="_blank">
                  <img
                    src={icon.name}
                    alt={`${icon.name}'s logo`}
                    width="35px"
                    style={{ cursor: "pointer", transition: "transform 0.2s" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </a>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="h6" mb={1} color={theme.palette.green.main}>
              روابط سريعة
            </Typography>
            <Stack gap={1}>
              <a className={styles.link} href="#الرئيسية">
                الرئيسية
              </a>
              <a className={styles.link} href="#من نحن">
                من نحن
              </a>
              <a className={styles.link} href="#الأهداف">
                الأهداف
              </a>
              <a className={styles.link} href="#الرسالة">
                الرسالة
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
