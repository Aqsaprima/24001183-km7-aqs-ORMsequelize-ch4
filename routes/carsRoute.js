const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multiUpload");
const carController = require("../controller/carController");

// Cars API
router.post("/", carController.createCar);
router.post(
  "/upload",
  upload.array("images", 10),
  carController.createCarMultiImage
);
router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.delete("/:id", carController.deleteCarById);
router.patch("/:id", carController.updateCar);

module.exports = router;
