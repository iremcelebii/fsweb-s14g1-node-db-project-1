const accountModel = require("./accounts-model");
const yup = require("yup");

const accountSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "name of account must be between 3 and 100")
    .max(100, "name of account must be between 3 and 100")
    .required("name and budget are required"),
  budget: yup
    .number("budget of account must be a number")
    .min(0, "budget of account is too large or too small")
    .max(1000000, "budget of account is too large or too small")
    .required("name and budget are required"),
});

exports.checkAccountPayload = async (req, res, next) => {
  try {
    if (req.body.name) {
      req.body.name = req.body.name.trim();
    }
    await accountSchema.validate(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const varMi = await accountModel.getByName(req.body.name);
    if (varMi) {
      res.status(400).json({ message: "that name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};
exports.checkAccountNameUniqueWithout = async (req, res, next) => {
  try {
    const varMi = await accountModel.getByNameWithoutKendisi(
      req.params.id,
      req.body.name
    );
    if (varMi) {
      res.status(400).json({ message: "that name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkAccountId = async (req, res, next) => {
  try {
    const id = await accountModel.getById(req.params.id);
    if (id) {
      next();
    } else {
      res.status(404).json({ message: "account not found" });
    }
  } catch (err) {
    next(err);
  }
};
