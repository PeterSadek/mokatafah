import { Box, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";
import styles from "./OurGoals.module.css";

const OurGoals = () => {
  const theme = useTheme();

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="الأهداف">
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
          الأهداف
        </Typography>
        <ol>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b>الدعم المالي : </b>العمل على تطوير مبادرات تؤدي إلى رفع مستوى
              المعيشة للأسر المحتاجة.
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> تعزيز التعاون المجتمعي : </b>إنشاء شبكة من الدعم بين العائلات،
              مما يسهم في بناء علاقات قوية تعزز من وحدة المجتمع .
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> تطوير القدرات : </b>تقديم البرامج التدريبية والدورات التعليمية
              التي تعزز من مهارات الأفراد وتساعدهم في تحقيق إمكاناتهم.
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> الاستدامة : </b>تنفيذ مشاريع طويلة الأمد تضمن استمرارية
              الفوائد للأجيال القادمة .
            </Typography>
          </li>
        </ol>
      </Animation>
    </Box>
  );
};

export default OurGoals;
