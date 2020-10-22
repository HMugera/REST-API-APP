const express = require("express");
const router = express.Router();
const {getUsers,createUser,getUser,deleteUser,updateUser} = require("../controllers/users")


//all routes in here are starting with /users
router.get("/",getUsers);

router.post("/", createUser);

//req.params
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
