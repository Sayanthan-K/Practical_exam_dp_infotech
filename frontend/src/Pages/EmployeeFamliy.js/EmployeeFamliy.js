import {
  Box,
  Paper,
  Container,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

// import Singleview_vehicle from "../../Components/Singleview_vehicle_registration";
import { useEffect, useState } from "react";
import axios from "axios";
import Singleview_employee from "../../Components/Singleview_employee";
import { useParams, useNavigate } from "react-router-dom";
import SingleviewFmaliy from "../../Components/SingleviewFmaliy";
function EmployeeFamliy(props) {
  let navigate = useNavigate();
  let { _id } = useParams();

  const [EmployeeFmailydetails, setEmployeeFmailydetails] = useState([]);
  const [emplyeedata, setemplyeedata] = useState([]);
  const [EmpID, setEmpID] = useState();
  const [isLoaded, setLoded] = useState(false);
  console.log();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/fmaily/employee/${_id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data.seachdata);
          setEmployeeFmailydetails(res.data.seachdata);
          setLoded(true);
        }
      })
      .catch((er) => {
        setLoded(true);
      });
    axios
      .get(`http://localhost:5000/api/` + _id)
      .then((res) => {
        if (res.data) {
          console.log(res.data.data);
          setemplyeedata(res.data.data);
          setEmpID(_id);
        }
      })
      .catch((er) => {});
  }, []);

  return (
    <>
      {/* <Box component={Paper} elevation={0} square minHeight={"82vh"} py={3}> */}
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
            view this particular emplyee details
            <br /> Employeecode : {emplyeedata.code}
            <br />
            EmplyeeName : {emplyeedata.firstname}
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                navigate("/addEmployeefmaily/" + EmpID);
              }}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                  color: "#1976D2",
                },
              }}
            >
              ADD {emplyeedata.firstname} Famliy details
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
            {EmployeeFmailydetails.map((row, index) => {
              return (
                <SingleviewFmaliy key={row._id} data={row} index={index} />
              );
            })}
            {isLoaded && EmployeeFmailydetails.length <= 0 && (
              <Box m={2} sx={{ flex: 1, justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center", color: "#555" }}>
                  No Employee FamilyDetails found
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

export default EmployeeFamliy;
