const { nanoid } = require("nanoid");
const URL = require("../models/url");

exports.createShortUrl = async (req, res) => {
  try {
    const redirectUrl = req.body.redirectUrl;
    const shortUrl = nanoid(8);
    await URL.create({ shortUrl, redirectUrl, visitHistory: [] });
    res.status(201).json({ shortUrl });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

exports.getShortUrl = async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;
    const owner = await URL.findOneAndUpdate(
      { shortUrl },
      {
        $push: {
          visitHistory: {
            timeStamps: Date.now(),
          },
        },
      }
    );

    res.redirect(owner.redirectUrl);
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
