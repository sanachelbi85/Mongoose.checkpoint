const express = require("express");
const PersonRouter = express.Router();
const Person = require("../Models/Person");

// post Person
PersonRouter.post("/add", async (req, res) => {
    try {
      let newPerson = new Person (req.body);
      let result = await newPerson.save();
      res.send({ result, msg: "succefull added" });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });
// get all Person
PersonRouter.get("/", async (req, res) => {
  try {

    let result = await Person.find();
    res.send({ result, msg: "all person" });
  } catch (error) {
    console.log(error);
  
  }
});
//get Person by id
PersonRouter.get ("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await Person.findOne({ _id: req.params.id });
    res.send({ result, msg: " one person" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// update Person
PersonRouter.put ("/:id", async (req, res) => {
  try {
    let result = await Person.findByIdAndUpdate(
      {_id: req.params.id},
      {$set: {...req.body }}
    );
    res.send({ result, msg: " ONE person" });
  } catch (error) {
    console.log(error);
  }
});
//delete Person
PersonRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Person.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete person" });
  } catch (error) {
    console.log(error);
  }
});


module.exports= PersonRouter;