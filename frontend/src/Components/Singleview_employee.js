import { Card, Button, Typography, Grid, TextField } from "@mui/material";
// card matrial ui
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// usenavigation
import { useNavigate } from "react-router-dom";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";
// react-toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Moment from "moment";
import { useEffect, useState } from "react";
//Singleview Registration
function Singleview_employee(props) {
  const [Age, setAge] = useState();
  useEffect(() => {
    const formatDate = Moment().format("YYYY");
    const d = new Date(props.data.DOB);
    let year = d.getFullYear();
    setAge(+formatDate - +year);
  }, []);

  //useNavigation
  const navigate = useNavigate();

  return (
    <>
      <Grid item md={10} sm={10} xs={10} sx={{ mt: { xs: 1, sm: 2 } }}>
        <Card
          sx={{
            minWidth: 270,
            border: "2px solid #1976D2",

            "&:hover": {
              boxShadow: "0 0 5px 2px #1976D2",
              transitionDuration: ".5s",
            },
          }}
        >
          <CardContent>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Grid item>
                <Typography gutterBottom variant="h5" component="div">
                  code : {props.data.code}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  initials : {props.data.initials}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  firstname : {props.data.firstname}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  surname : {props.data.surname}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Address1 : {props.data.Address1}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Address2 : {props.data.Address2}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  DOB : {props.data.DOB}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  Age :{" "}
                  <TextField
                    name="Age"
                    required
                    fullWidth
                    value={Age}
                    id="id"
                    disabled={true}
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            {" "}
            <Button
              onClick={() => {
                navigate("/Editemployee/" + props.data._id);
              }}
              component={Typography}
              variant="contained"
              size="small"
              startIcon={<EditOutlinedIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",
                  color: "#1976D2",
                },
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                navigate("/viewEmployeeFamily/" + props.data._id);
              }}
              component={Typography}
              variant="contained"
              size="small"
              startIcon={<MoreVertIcon />}
              sx={{
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#333",

                  color: "#1976D2",
                },
                mr: 1,
              }}
            >
              Employee Family Details
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default Singleview_employee;
