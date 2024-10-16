import { Box, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";

const OurVision = () => {
  const theme = useTheme();

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="الرؤية">
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
          الرؤية
        </Typography>
        <Typography
          sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
          mb="0.5rem"
        >
          <b>رؤية عائلة متكاتفة لجودة حياة مستدامة</b> تعبر عن الطموح نحو بناء
          مجتمع يتمتع بجودة حياة عالية، حيث تعمل جميع الأسر معًا لتحقيق التنمية
          المستدامة.
        </Typography>
        <Typography sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}>
          تتطلع هذه الرؤية إلى تحقيق توازن بين العوامل الاقتصادية والاجتماعية
          والبيئية، مما يعكس التزام المملكة بتعزيز روح التعاون والتكامل بين
          أفراد المجتمع.
        </Typography>
      </Animation>
    </Box>
  );
};

export default OurVision;
