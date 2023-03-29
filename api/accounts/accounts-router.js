const router = require("express").Router();
const accountModel = require("./accounts-model");
const accountMd = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await accountModel.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", accountMd.checkAccountId, async (req, res, next) => {
  try {
    const account = await accountModel.getById(req.params.id);
    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  accountMd.checkAccountPayload,
  accountMd.checkAccountNameUnique,
  async (req, res, next) => {
    try {
      const accountObj = { name: req.body.name, budget: req.body.budget };
      const accountPro = await accountModel.create(accountObj);
      res.status(201).json(accountPro);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  accountMd.checkAccountId,
  accountMd.checkAccountPayload,
  accountMd.checkAccountNameUniqueWithout,
  async (req, res, next) => {
    try {
      const accountObj = { name: req.body.name, budget: req.body.budget };
      const accountPro = await accountModel.updateById(
        req.params.id,
        accountObj
      );
      res.json(accountPro);
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", accountMd.checkAccountId, async (req, res, next) => {
  try {
    await accountModel.deleteById(req.params.id);
    res.json({ message: `${req.params.id} ID'li kayıt silindi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
