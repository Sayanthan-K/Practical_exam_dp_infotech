const EmplyeeFamilyDetails = require("../Model/EmplyeeFamilyDetails");
const { ObjectId } = require("mongodb");
const Employee = require("../Model/Employee");

exports.AddEmployeeFmaily = async (req, res) => {
  const { EmplyeeID, firstname, surname, relationship } = req.body;

  const member = new EmplyeeFamilyDetails({
    EmplyeeID,
    firstname,
    surname,
    relationship,
  });

  await member
    .save()
    .then((data) => {
      return res.status(200).json({ add: true });
    })
    .catch(() => {
      return res.status(201).json({ add: false });
    });
};

exports.UpdateEmployeeFmaily = async (req, res) => {
  const { _id } = req.params;
  const {
    firstname,
    surname,
    relationship,

    // emplyee_famaily_details,
  } = req.body;
  await EmplyeeFamilyDetails.findOne({ _id })
    .then((data) => {
      if (data) {
        EmplyeeFamilyDetails.updateOne(
          { _id },
          {
            $set: {
              firstname: firstname,
              surname: surname,
              relationship: relationship,
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

exports.getAllFmaily = async (req, res) => {
  const { EmpID } = req.params;
  console.log(EmpID);

  let seachdata = await EmplyeeFamilyDetails.find({
    EmplyeeID: ObjectId(EmpID),
    // $in: [
    //   {
    //     EmplyeeID: { $regex: EmpID },
    //   },
    // ],
  });

  if (seachdata) {
    return res.status(200).json({ seachdata });
  }

  //   return res.status(200).json({ get: false });
};

exports.getFmaily = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  await EmplyeeFamilyDetails.findOne({ _id })
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
