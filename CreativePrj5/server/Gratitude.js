const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");





const entrySchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    created: {
      type: Date,
      default: Date.now,
    },
    entry: String,
  });

  const users = require("./users.js");
  const User = users.model;
  const entry = mongoose.model('entries', entrySchema);


// upload photo
router.post("/", auth.verifyToken, User.verify, async (req, res) => {
    // check parameters
    console.log(req.text);
      const user_entry = new entries({
        user:req.user,
        entry: req.text,
        //idk what else i am not really sure about this at all.
      })
    try {
      await user_entry.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });
  router.get("/", auth.verifyToken, User.verify, async (req, res) => {
   
    try {
      let entries = await entry.find({
        user: req.user
      }).sort({
        created: -1
      }).populate('user');
      return res.send(entries);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  
  module.exports = {
    model: entry,
    routes: router,
  }
