import { Box, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";
import styles from "./OurGoals.module.css";

export const GeneralGoals = () => {
  const theme = useTheme();

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }}>
      <Animation>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontWeight: 400,
            fontSize: { md: "3.5rem", xs: "2.5rem" },
            color: theme.palette.green.main,
          }}
          mb="2rem"
        >
          الأهداف العامة للصندوق
        </Typography>
        <ol>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              تعزيز صلة الرحم
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              بث روح التكافل
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              التآلف والرحمة بين أفراد العائلة
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              اصلاح ذات البين
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              التعاون على البر والتقوى
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              المساهمة في تنظيم أوجه الاحسان بين أفراد العائلة
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              المساهمة في تعليم وتدريب وتطوير أفراد العائلة
            </Typography>
          </li>
        </ol>
      </Animation>
    </Box>
  );
};

export default GeneralGoals;
