import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
  Box,
  Paper,
  Container,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Singleview_vehicle from "../../Components/Singleview_vehicle_registration";
import { useEffect, useState } from "react";
import axios from "axios";
import Singleview_employee from "../../Components/Singleview_employee";


function Dashboard() {

  const [isLoaded, setLoded] = useState(false);
  const [emplyeedata, setemplyeedata] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/`)
      .then((res) => {
        if (res.data) {
          console.log(res.data.data);
          setemplyeedata(res.data.data);
          setLoded(true);
        }
      })
      .catch((er) => {
        setLoded(true);
      });
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <Box
        component={Paper}
        elevation={0}
        square
        minHeight={"82vh"}
        py={3}
        sx={{ backgroundColor: "#c3c4c7" }}
      >
        <Container maxWidth="md">
          <Grid
            component={Paper}
            elevation={2}
            container
            justifyContent={"center"}
            alignItems="center"
            sx={{ border: "3px solid #1976D2", p: 2, borderRadius: 2 }}
          >
            <Button
              variant="contained"
              onClick={() => {
                navigate("/addEmployee");
              }}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                  color: "#1976D2",
                },
              }}
            >
              ADD Employee
            </Button>
          </Grid>
          <Divider />
          <br />
          <Grid
            component={Paper}
            elevation={2}
            container
            justifyContent={"center"}
            alignItems="center"
            sx={{ border: "3px solid #1976D2", p: 2, borderRadius: 2 }}
          >
            {emplyeedata.map((row, index) => {
              return (
                <Singleview_employee key={row._id} data={row} index={index} />
              );
            })}
            {isLoaded && emplyeedata.length <= 0 && (
              <Box m={2} sx={{ flex: 1, justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center", color: "#555" }}>
                  No Employee found
                </Typography>
              </Box>
            )}
            {!isLoaded && (
              <Box sx={{ flex: 1, justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center", color: "#555" }}>
                  Loading ..
                </Typography>
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
