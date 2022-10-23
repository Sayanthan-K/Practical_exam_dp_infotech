import { Paper, Typography, Button, Divider, Grid } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";

//Footer
function Footer() {
  return (
    <>
      <Divider />
      <Grid
        square
        elevation={2}
        component={Paper}
        sx={{ py: 2, px: 1 }}
        container
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <Typography
            variant="subtitle2"
            textAlign={{ xs: "center", sm: "left" }}
          >
            © 2022, made with ❤️ by sayanthan for a better vehicle registration
            . All copyrights reserved
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign={{ xs: "center", sm: "right" }}>
          <Button endIcon={<MessageIcon />} variant="text" href="/">
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
