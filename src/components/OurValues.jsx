import { Box, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";
import styles from "./OurGoals.module.css";

const OurValues = () => {
  const theme = useTheme();

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="القيم">
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
          القيم
        </Typography>
        <ul>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> الابتكار : </b>تشجيع التفكير الإبداعي وإيجاد حلول جديدة
              للتحديات التي تواجه المجتمع.
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> الشفافية : </b>الالتزام بالعمل بشفافية كاملة، مما يعزز الثقة
              بين المؤسسة والمجتمع.{" "}
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> الجودة : </b>السعي نحو تقديم خدمات ومبادرات ذات جودة عالية
              تلبي احتياجات المجتمع.
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> الشراكة : </b>بناء شراكات فعالة مع مختلف الجهات الحكومية
              والخاصة والمجتمع المدني لتحقيق الأهداف المشتركة .
            </Typography>
          </li>
          <li className={styles.goals}>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
            >
              <b> المسؤولية : </b>تحمل المسؤولية الاجتماعية والاقتصادية تجاه
              المجتمع والعمل على تحقيق التنمية المستدامة.
            </Typography>
          </li>
        </ul>
      </Animation>
    </Box>
  );
};

export default OurValues;
