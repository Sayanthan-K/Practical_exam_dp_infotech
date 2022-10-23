import { Box, Button, MenuItem, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";

import ButtonA from "../../Components/ButtonA";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function AddEmplyeeFamliydetails() {
  const [firstname, setfirstname] = useState();
  const [surname, setsurname] = useState();
  const [relationship, setrelationship] = useState();
  const [EmployeeID, setEmployeeID] = useState();

  const navigate = useNavigate();
  let { _id, EmpID } = useParams();
  console.log(EmpID);

  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:5000/api/fmaily/${_id}`)
        .then((res) => {
          if (res.data) {
            setfirstname(res.data.data.firstname);
            setsurname(res.data.data.surname);
            setrelationship(res.data.data.relationship);
            setEmployeeID(EmpID);
          }
        })
        .catch((er) => {});
    }
  }, []);

  const submithandler = () => {
    if (firstname.length > 50)
      return toast("firstname  should not exceed 50 characters", {
        type: "error",
      });

    if (surname.length > 50)
      return toast("surname  should not exceed 50 characters", {
        type: "error",
      });

    const imputdata = {
      EmplyeeID: EmpID,
      firstname: firstname,
      surname: surname,
      relationship: relationship,
    };
    if (_id) {
      axios
        .put("http://localhost:5000/api/fmaily/" + _id, imputdata)
        .then((data) => {
          setTimeout(() => {
            navigate(-1);
          }, 3050);
          toast.success("Successfully updated the EmployeeFamaily", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch();
    } else {
      axios
        .post("http://localhost:5000/api/fmaily/", imputdata)
        .then((data) => {
          setTimeout(() => {
            navigate(-1);
          }, 3050);
          toast.success("successfully added the new EmployeeFmailydetails", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch();
    }
  };
  return (
    <>
      {" "}
      <ToastContainer />
      <Box
        component={Paper}
        elevation={0}
        square
        minHeight={"82vh"}
        py={3}
        sx={{ backgroundColor: "#c3c4c7" }}
      >
        <Container maxWidth="md">
          {" "}
          <Typography
            sx={{
              fontFamily: "open sans",
              fontWeight: "1000",
              color: "#2B4865",
              letterSpacing: -0.9,
              fontSize: 18,
              my: 1.5,
            }}
          >
            {_id
              ? "Update Employee Fmaily details"
              : "Add New Employee Fmaily details"}
          </Typography>
          <Box component={Paper} sx={{ bgcolor: "#fff" }} p={3} my={2.5}>
            <Label title="firstname" for="FirstName" />
            <Input
              value={firstname}
              set={setfirstname}
              id="firstname"
              size="small"
              type="text"
            />
            <Label title="surname" for="SurName" />
            <Input
              value={surname}
              set={setsurname}
              id="surname"
              size="small"
              type="text"
            />
            <Label title="relationship" for="relationship" />
            <Input
              value={relationship}
              set={setrelationship}
              id="surname"
              size="small"
              type="text"
            />
            <Box mt={2} />
            <ButtonA fullWidth={true} title="Save" handler={submithandler} />
            <Box mt={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AddEmplyeeFamliydetails;
