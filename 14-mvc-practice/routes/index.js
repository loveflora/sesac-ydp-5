const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/index", controller.main);
router.get("/index/axios", controller.getAxios);
router.post("/index/axios", controller.postAxios);
// router.get("/login", controller.login);

// app.get("/index", (req, res) => {
//   res.render("index");
// });

// app.get("/index/axios", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

// app.post("/index/axios", (req, res) => {
//   console.log(req.body);
//   // res.send(req.body);

//   res.send({ id: req.body.id, pw: req.body.pw, msg: "반가워 !" });
// });

module.exports = router;
