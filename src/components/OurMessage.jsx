import { Box, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";

const OurMessage = () => {
  const theme = useTheme();

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="الرسالة">
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
          الرسالة
        </Typography>
        <Typography
          sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
          mb="0.5rem"
        >
          <b>
            نسعى لتحقيق حياة كريمة لأفراد الأسر من خلال مبادرات مجتمعية مستدامة
            بواسطة فريق يعمل بكفاءة و فاعلية.
          </b>
        </Typography>
        <Typography
          sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}
          mb="0.5rem"
        >
          توضح هذه الرسالة الهدف الأساسي من العمل الاجتماعي والتنموي، حيث يهدف
          الصندوق إلى توفير الدعم للعائلات، وضمان مستوى عالٍ من الحياة الكريمة.
        </Typography>
        <Typography sx={{ color: theme.palette.gold.dark, fontSize: "1.5rem" }}>
          يتم ذلك من خلال تنفيذ مبادرات تتسم بالاستدامة، مع التركيز على إشراك
          المجتمع وتعزيز المشاركة الفعالة بين أفراده.
        </Typography>
      </Animation>
    </Box>
  );
};

export default OurMessage;
