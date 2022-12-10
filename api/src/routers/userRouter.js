import express from "express";
import { deleteUserById, getUsers, insertUser, updateUsers } from "../model/user/UserModel.js";

const router = express.Router();

router.get("/", async(req, res, next) => {
 
 
  try {
    const users = await getUsers();
    res.json({
      status: "Success",
      message: "hey wassup",
      users
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Success",
      message: error.message,
    });
  }
});

router.post("/", async(req, res, next) => {
 try {
  const user = req.body
  console.log(user)
  const result = await insertUser(user)

  result ?._id ? res.json({
    status: "success",
    message : "User created successfully"
  })
  :  res.json({
    status: "error",
    message : "unable to create user"
  })
 } catch (error) {
  
 }
});

router.put("/", async(req, res, next) => {
  try {
   const {_id, ...rest} = req.body
   const filter = {_id}
  //  const updateObj = {password}
   const result = await updateUsers(filter, rest)


 
   result?._id ? res.json({
     status: "success",
     message : "User created successfully"
   })
   :  res.json({
     status: "error",
     message : "unable to create user"
   })
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
 });
 
router.patch("/", (req, res, next) => {
  res.json({
    message: "Success updated",
  });
});

router.delete("/:_id", async(req, res) => {
  try {
   const {_id } = req.params
   const filter = {_id}
  //  const updateObj = {password}
   const result = await deleteUserById(filter)

 
   result ?._id ? res.json({
     status: "success",
     message : "User created successfully"
   })
   :  res.json({
     status: "error",
     message : "unable to create user"
   })
  } catch (error) {
    console.log(error);
    res.json({
      status: "Success",
      message: error.message,
    });
  }
 });

export default router;
