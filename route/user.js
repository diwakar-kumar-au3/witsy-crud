var express = require("express");
var router = express.Router();

router.post("/signup", (req, res) => {
  db.collection("user").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/login", (req, res) => {
  // console.log(req.body);
  db.collection("user").findOne({ email: req.body.email }, (err, result) => {
    // console.log(result);
    if (result == null) {
      res.send("Login Invalid");
    } else if (
      result.email == req.body.email &&
      result.password == req.body.password
    ) {
      res.send({ ...result, password: null });
    }
  });
});
router.get("/getinfo", (req, res) => {
  db.collection("user")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
router.put("/edit", (req, res) => {
  const { id, email, username, password, region } = req.body;
  // console.log({ id, email, username, password, region });
  db.collection("user").updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        email,
        username,
        password,
        region,
      },
    },
    (error, result) => {
      if (error) res.send({ error: true, message: "unable to update" });
      else res.send({ error: false, message: "updated Successfully" });
    }
  );
});
router.delete("/delete/:id", (req, res) => {
  db.collection("user").findOneAndDelete(
    { _id: ObjectId(req.params.id) },
    (error, result) => {
      if (error) res.send({ error: true, message: "unable to Delete" });
      else res.send({ error: false, message: "Delete Successfully" });
    }
  );
});
module.exports = router;
