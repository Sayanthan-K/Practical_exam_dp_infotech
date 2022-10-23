const Employee = require("../Model/Employee");

var mongoose = require("mongoose");

exports.AddEmployee = async (req, res) => {
  const {
    code,
    initials,
    firstname,
    surname,
    Address1,
    Address2,
    DOB,
    status,
  } = req.body;

  const newuser = new Employee({
    code,
    initials,
    firstname,
    surname,
    Address1,
    Address2,
    DOB,
    status,
  });
  await Employee.findOne({ code })
    .then((data) => {
      if (data) {
        return res.status(201).json({ msg: "alredy" });
      }
      console.log(data);
      console.log(newuser);

      newuser
        .save()
        .then((data) => {
          return res.status(200).json({ register: true });
        })
        .catch(() => {
          return res.status(201).json({ register: false });
        });
    })
    .catch(() => {});
};

exports.UpdateEmployee = async (req, res) => {
  const { _id } = req.params;
  const {
    code,
    initials,
    firstname,
    surname,
    Address1,
    Address2,
    DOB,
    status,
  } = req.body;
  await Employee.findOne({ _id })
    .then((data) => {
      if (data.code === code) {
        return res.status(201).json({ msg: "alredy" });
      }
      if (data) {
        Employee.updateOne(
          { _id },
          {
            $set: {
              code: code,
              initials: initials,
              firstname: firstname,
              surname: surname,
              Address1: Address1,
              Address2: Address2,
              DOB: DOB,
              status: status,
            },
          }
        )
          .then(() => {
            return res.status(200).json({ Updated: true });
          })
          .catch(() => {
            return res.status(200).json({ Updated: false });
          });
      }
    })
    .catch(() => {
      return res.status(404).json({ get: false });
    });
};

exports.getAllEmployee = async (req, res) => {
  await Employee.find({})
    .then((data) => {
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(200).json({ get: false });
    })
    .catch(() => {});
};

exports.getEmployee = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  await Employee.findOne({ _id })
    .then((data) => {
      if (data) {
        return res.status(200).json({ data });
      }
      return res.status(200).json({ get: false });
    })
    .catch(() => {
      return res.status(404).json({ deleted: false });
    });
};

// exports.AddFmailydetails = async (req, res) => {
//   const { emplyee_famaily_details } = req.body;
//   const { _id } = req.params;

//   await Employee.findOne({ _id })
//     .then((data) => {
//       if (data) {
//         let arr = data.emplyee_famaily_details;
//         arr.push(emplyee_famaily_details);
//         console.log(data.emplyee_famaily_details);
//         const newuser = new Employee({
//           emplyee_famaily_details: arr,
//         });
//         newuser
//           .then(() => {
//             return res.status(200).json({ add: true });
//           })
//           .catch(() => {
//             return res.status(201).json({ add: false });
//           });
//       }
//     })
//     .catch(() => {});
// };
