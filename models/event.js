const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    eventInfo: {
      type: String,
    },
    targetGroup: {
      type: String,
    },
    categories: {
      type: [String],
      enum: ["education", "awareness", "health", "support", "community", "entertainment", "food", "sports", "family-focused", "children-focused" ],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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
const event = mongoose.model("Event", eventSchema);
event.collection.createIndex({ location: "2dsphere" });
module.exports = event;
