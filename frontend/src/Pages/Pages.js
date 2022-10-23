import { Route, Routes } from "react-router";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import AddEmployeedetails from "./Dashborad.js/AddEmplyee";
import Dashboard from "./Dashborad.js/Dashborad";
import AddEmplyeeFamliydetails from "./EmployeeFamliy.js/AddEmplyeeFamliy";
import EmployeeFamliy from "./EmployeeFamliy.js/EmployeeFamliy";

function Pages() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addEmployee" element={<AddEmployeedetails />} />
        <Route path="/Editemployee/:_id" element={<AddEmployeedetails />} />
        <Route
          path="/addEmployeefmaily/:EmpID"
          element={<AddEmplyeeFamliydetails />}
        />
        <Route
          path="/EditEmployeefmaily/:_id"
          element={<AddEmplyeeFamliydetails />}
        />

        <Route path="/viewEmployeeFamily/:_id" element={<EmployeeFamliy />} />
      </Routes>
      <Footer />
    </>
  );
}
export default Pages;
