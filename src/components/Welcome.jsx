import { Box, Stack, Typography, useTheme } from "@mui/material";
import Animation from "./Animation";
import favicon from "../assets/favicon.png";

const Welcome = () => {
  const theme = useTheme();
  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="من نحن">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ md: "center" }}
      >
        <Stack
          direction="column"
          textAlign="start"
          width={{ xs: "100%", md: "50%" }}
        >
          <Animation>
            <Typography
              color={theme.palette.gold.dark}
              fontSize="2rem"
              mb="0.5rem"
            >
              قصتنا
            </Typography>
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
              من نحن
            </Typography>
            <Typography
              sx={{ color: theme.palette.gold.dark, fontSize: "1.1rem" }}
              mb="1rem"
            >
              منذ تأسست المملكة العربية السعودية على يد المغفور له الملك
              عبدالعزيز آل سعود طيب الله ثراه ، كان للعمل التنموي والاجتماعي
              الحظ الوافر من اهتمام قادة هذه البلاد منذ نشأتها وحتى هذا العقد
              الميمون بقيادة خادم الحرمين الشريفين الملك سلمان حفظه الله والرؤية
              المباركة لولي العهد صاحب السمو الملكي الأمير محمد بن سلمان.
            </Typography>
            <Typography
              mb="1rem"
              sx={{ color: theme.palette.gold.dark, fontSize: "1.1rem" }}
            >
              يشهد القطاع غير الربحي نقلة نوعية وتطورا ملحوظا في السياسات
              والتشريعات والأدوات والممكنات على كافة الأصعدة ، ولعل الصناديق
              الأهلية من هذه الممكنات المجتمعية التي لاقت ناجحاً واهتماما من
              كافة شرائح المجتمع.
            </Typography>
            <Typography
              mb="1rem"
              sx={{ color: theme.palette.gold.dark, fontSize: "1.1rem" }}
            >
              ومن هذا المنطلق الخيري والمجتمعي تأسس بحمد الله صندوق مكاتفة
              لعائلة المحيذيف ليكون داعما ومؤزرا ومحققا لطموحات أبناء العائلة
              على الوجه الذي يرضي الله تعالى ثم قادة هذه البلاد وكافة أصحاب
              المصلحة. وذلك بتضافر جهود المخلصين الخيرين.
            </Typography>
            <Typography
              sx={{
                color: theme.palette.gold.dark,
                fontSize: "1.1rem",
                lineHeight: 2.5,
              }}
            >
              وانطلاقًا من مبدأ التعاون على البر والتقوى وعملاً بقوله تعالى
              <Typography sx={{ color: theme.palette.green.main }}>
                &quot;يَسْأَلُونَكَ مَاذَا يُنفِقُونَ ۖ قُلْ مَا أَنفَقْتُم
                مِّنْ خَيْرٍ فَلِلْوَالِدَيْنِ وَالأَقْرَبِينَ وَالْيَتَامَىٰ
                وَالْمَسَاكِينِ وَابْنِ السَّبِيلِ ۚ وَمَا تَفْعَلُوا مِنْ
                خَيْرٍ فَإِنَّ اللَّـهَ بِهِۦ عَلِيمٌ&quot;
              </Typography>
              -سورة البقرة آية ٢١٥-
            </Typography>
          </Animation>
        </Stack>
        <Box width={{ xs: "100%", md: "50%" }} alignSelf="end">
          <img src={favicon} alt="mokatafah's logo" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Welcome;
