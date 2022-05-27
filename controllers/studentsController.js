const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const StudentsModel  = require('../models/studentsModel');


// Get all student
router.get('/', (req, res) => {
  StudentsModel.find((err, docs) => {
    if(!err) res.send(docs);
    else console.log("Erros to get data : " + err);
  });
});

// Post new student
router.post('/', (req, res) => {
  const newRecord = new StudentsModel({
    email: req.body.email,
    phone: req.body.phone,
    fullName: req.body.fullName,
    gender: req.body.gender,
    country: req.body.country
  });
  newRecord.save((err, docs) => {
    if(!err) res.send(docs);
    else console.log('Error : ' + err)
  })
})

// edit
router.put('/:id', (req,res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow: ' + req.params.id);

  const updateRecord = {
    email: req.body.email,
    phone: req.body.phone,
    fullName: req.body.fullName,
    gender: req.body.gender,
    country: req.body.country
  }

  StudentsModel.findByIdAndUpdate(
    req.params.id,
    {$set: updateRecord},
    { new: true},
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log('Update error : ' + err);
    }
  )
})

// delete
router.delete('/:id', (req,res) => {
  if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknow: ' + req.params.id);

  StudentsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log('Deleted error :' + err);
    }
  )

})

module.exports = router;
