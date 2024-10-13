require("dotenv").config();
const Imagekit = require("imagekit");

const imagekit = new Imagekit({
  publicKey: process.env.IK_PUBKEY,
  privateKey: process.env.IK_PRIKEY,
  urlEndpoint: process.env.IK_URLEND,
});

module.exports = imagekit;
