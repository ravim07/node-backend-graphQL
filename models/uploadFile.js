const { Schema, model } = require("mongoose");

module.exports.UploadFile = model(
  "UserUpload",
  Schema(
    {
      image: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      count: {
        type: [],
        required: true,
      },
      postname: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    { timestamps: true }
  )
);
