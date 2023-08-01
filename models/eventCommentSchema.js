const mongoose = require("mongoose");
const eventCommSchema = new mongoose.Schema(
  {
    creater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    text: {
      type: stringify,
      required: true,
    },
  },
  { timestamps: true }
);

const eventComment = mongoose.model("eventComment", eventCommSchema);
module.exports = eventComment;
