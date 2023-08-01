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
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EventComment = mongoose.model("eventComment", eventCommSchema);
module.exports = EventComment;
