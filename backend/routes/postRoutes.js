const express = require("express");
const mongoose = require("mongoose");
const Post = require("../model/post");

const router = new express.Router();

router.post("/post", async (req, res) => {
  try {
    const data = new Post({
      companyId: req.body.companyId,
      primaryText: req.body.primaryText,
      headline: req.body.headline,
      description: req.body.description,
      CTA: req.body.CTA,
      imageUrl: req.body.imageUrl,
    });
    const saveData = await data.save();

    res.json({
      status: "success",
      data: saveData,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
});

router.get("/post", async (req, res) => {
  try {
    const key = req.query.key
    let data = await Post.find();
    const newData = []
    data.forEach(ele => {
      if (ele.primaryText.toUpperCase().includes(key.toUpperCase()) || ele.headline.toUpperCase().includes(key.toUpperCase()) || ele.description.toUpperCase().includes(key.toUpperCase())) {
        newData.push(ele)
      }
    })

    res.json({
      status: "success",
      data: newData,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
});

module.exports = router;
