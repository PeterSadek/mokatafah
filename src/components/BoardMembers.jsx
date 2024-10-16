import {
  Box,
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import Animation from "./Animation";

const BoardMembers = () => {
  const theme = useTheme();
  const members = [
    { role: "رئيس المجلس", name: "خالد بن إبراهيم المحيذيف" },
    { role: "نائب الرئيس", name: "أديب بن محمد المحيذيف" },
    { role: "عضو المجلس", name: "عبدالله بن سليمان المحيذيف" },
    { role: "عضو المجلس", name: "سليمان بن حمد المحيذيف" },
    { role: "عضو المجلس", name: "عبدالعزيز بن إبراهيم المحيذيف" },
  ];

  return (
    <Box dir="rtl" sx={{ marginBlock: "7rem" }} id="أعضاء المجلس">
      <Animation>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            color: theme.palette.green.main,
            mb: "2rem",
            textAlign: "center",
          }}
        >
          أعضاء المجلس
        </Typography>
        <Grid container spacing={4}>
          {members.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderRadius: "10px",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.gold.dark }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.gold.main }}
                  >
                    {member.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Animation>
    </Box>
  );
};

export default BoardMembers;
