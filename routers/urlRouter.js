const express = require("express");
const URL = require("../models/Url");
const router = express.Router();

router.post('/', async (req, res) => {
  console.log("err");
try{
  const fullUrl = req.body.fullUrl;
  console.log(req.body)
  const url = await URL.create({ fullUrl });

  res.status(200).json({ status: "success", shortUrl: url.shortUrl });
}
catch(err){
    res.json('someThing went Wrong');
}
});

router.post("/:shortUrl", async(req, res) => {
  const shortlUrl = await URL.findOne({ shortUrl: req.params.shortUrl });
  shortlUrl.clicks++;
  shortlUrl.save();
  res.json({
    status: "success",
    OriginalUrl: shortlUrl,
  });
});

module.exports = router;
