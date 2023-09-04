import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema); // Perbaikan: Ganti .model.Topic menjadi .model("Topic", topicSchema)

export default Topic;
