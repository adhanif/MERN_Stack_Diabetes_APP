const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    const { file } = req;
    const result = await cloudinary.v2.uploader.unsigned_upload(
      file.path,
      process.env.UPLOAD_PRESET
    );

    result.localPath = file.path;
    req.file = result;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = {
  cloudinaryUpload,
};
