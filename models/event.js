const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    address: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        // required: true,
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
      formattedAddress: String,
    },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);
// Event.db.articles.createIndex({ subject: "text" });
eventSchema.index({ title: "text" });
module.exports = mongoose.model("Event", eventSchema);
