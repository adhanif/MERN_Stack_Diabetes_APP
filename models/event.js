const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  coordinates: {
    type: [Number],
  },
});

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
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
      ref: 'User',
    },

    eventInfo: {
      type: String,
    },
    targetGroup: {
      type: String,
    },
    categories: {
      type: [String],
      enum: [
        'education',
        'awareness',
        'health',
        'support',
        'community',
        'entertainment',
        'food',
        'sports',
        'family-focused',
        'children-focused',
      ],
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
        enum: ['Point'],
        // required: true,
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
      formattedAddress: String,
    },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);
// Event.db.articles.createIndex({ subject: "text" });
eventSchema.index({ title: 'text' });
const Event = mongoose.model('Event', eventSchema);
const City = mongoose.model('City', citySchema);
Event.collection.createIndex({ location: '2dsphere' });
module.exports = { Event, City };
