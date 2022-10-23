import {
  Box,
  AppBar,
  Toolbar,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import logo from "../Assets/employee.jpg";

// Header
function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color={"primary"} position="sticky">
          <Toolbar>
            <Button href="/">
              <Tooltip title="logo">
                <img alt="vehicle" src={logo} width="50px" />
              </Tooltip>
            </Button>
            <Typography
              variant="h4"
              sx={{
                textTransform: "none",
                ml: 2,
                fontSize: { xs: 14, sm: 25 },
              }}
            >
              Employee Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
    </>
  );
}

export default Header;
