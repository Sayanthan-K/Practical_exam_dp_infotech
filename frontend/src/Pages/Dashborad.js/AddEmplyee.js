import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";

import ButtonA from "../../Components/ButtonA";
import Input from "../../Components/Input";
import Label from "../../Components/Label";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function AddEmployeedetails() {
  const [code, setcode] = useState();
  const [initials, setinitials] = useState();
  const [firstname, setfirstname] = useState();
  const [surname, setsurname] = useState();
  const [address1, setaddress1] = useState();
  const [address2, setaddress2] = useState();
  const [DOB, setDOB] = useState();

  const navigate = useNavigate();
  let { _id } = useParams();
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:5000/api/${_id}`)
        .then((res) => {
          if (res.data) {
            setcode(res.data.data.code);
            setinitials(res.data.data.initials);
            setfirstname(res.data.data.firstname);
            setsurname(res.data.data.surname);
            setaddress1(res.data.data.Address1);
            setaddress2(res.data.data.Address2);
            setDOB(res.data.data.DOB);
          }
        })
        .catch((er) => {});
    }
  }, []);

  const submithandler = () => {
    if (code.length !== 3)
      return toast("Code length should be 3 characters ", { type: "error" });

    if (initials.length !== 1)
      return toast(" initials should be 1 characters", { type: "error" });

    if (firstname.length > 50)
      return toast("firstname  should not exceed 50 characters", {
        type: "error",
      });

    if (surname.length > 50)
      return toast("surname  should not exceed 50 characters", {
        type: "error",
      });

    if (address1.length > 100)
      return toast("address1  should not exceed 100 characters", {
        type: "error",
      });

    if (address2.length > 100)
      return toast("address2  should not exceed 100 characters", {
        type: "error",
      });

    const imputdata = {
      code: code,
      initials: initials,
      firstname: firstname,
      surname: surname,
      Address1: address1,
      Address2: address2,
      DOB: DOB,
    };
    if (_id) {
      axios
        .put("http://localhost:5000/api/" + _id, imputdata)
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg === "alredy") {
            toast.warning("already have exit Employeecode ", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            setTimeout(() => {
              navigate("/");
            }, 3050);
            toast.success("Successfully updated the Employee", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
        .catch(() => {
          toast.error("Successfully updated the Employee", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } else {
      axios
        .post("http://localhost:5000/api/", imputdata)
        .then((res) => {
          console.log(res);
          console.log(res.data.msg);
          if (res.data.msg === "alredy") {
            toast.warning("already have exit Employeecode ", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            setTimeout(() => {
              navigate("/");
            }, 3050);
            toast.success("successfully added the new Employee", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })

        .catch(() => {
          toast.error("Successfully updated the Employee", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
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
            {_id ? "Update Employee" : "Add New Employee"}
          </Typography>
          <Box component={Paper} sx={{ bgcolor: "#fff" }} p={3} my={2.5}>
            <Label title="EmployeeCode" for="EmployeeCode" />
            <Input
              value={code}
              set={setcode}
              id="Employee_code"
              size="small"
              type="text"
            />{" "}
            <Label title="initials" for="Initials" />
            <Input
              value={initials}
              set={setinitials}
              id="initials"
              size="small"
              type="text"
            />
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
            {/* address */}
            <Label for="address1" title="Address1" />
            <Input
              value={address1}
              set={setaddress1}
              id="address1"
              multiple={true}
              minRows={3}
              maxRows={4}
              type="text"
              size="small"
            />
            {/* address */}
            <Label for="address1" title="Address2" />
            <Input
              value={address2}
              set={setaddress2}
              id="address"
              multiple={true}
              minRows={3}
              maxRows={4}
              type="text"
              size="small"
            />
            <Label title="Date of Birth" for="dob" />
            <Input
              id="dob"
              size="small"
              type="date"
              value={DOB}
              set={setDOB}
              disableFuture
            />
            {/* <DatePicker
              autoOk
              variant="static"
              openTo="year"
              value={DOB}
              set={setDOB}
            /> */}
            <Box mt={2} />
            <ButtonA fullWidth={true} title="Save" handler={submithandler} />
            <Box mt={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AddEmployeedetails;
