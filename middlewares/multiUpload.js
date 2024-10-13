const multer = require("multer");

const multerFiltering = (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid image format. Only PNG and JPEG are allowed."),
      false
    );
  }
};

const upload = multer({
  fileFilter: multerFiltering,
});

module.exports = upload;
