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
//Singleview Registration
function SingleviewFmaliy(props) {
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
                  EmplyeeID : {props.data.EmplyeeID}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  firstname : {props.data.firstname}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  surname : {props.data.surname}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Relationship of employee : {props.data.relationship}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            {" "}
            <Button
              onClick={() => {
                navigate("/EditEmployeefmaily/" + props.data._id);
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
            {/* <Button
              //   onClick={OnDelete}
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
            ></Button> */}
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

export default SingleviewFmaliy;
