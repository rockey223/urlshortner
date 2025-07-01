const { Schema, model, models } = require("mongoose");

const urlSchema = new Schema(
  {
    urlID: {
      type: String,
      required: true,
      unique: true, // Ensure URL ID is unique
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const URLModel = models.URL || model('URL', urlSchema);
export default URLModel;