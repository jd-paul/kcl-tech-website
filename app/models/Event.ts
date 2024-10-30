import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  url: string;
  date: string;
  time: {
    start: string;
    end: string;
  };
  location: string;
  requirements: string;
  description: string;
}

const EventSchema: Schema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: String, required: true },
  time: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
  location: { type: String, required: true },
  requirements: { type: String, required: true },
  description: { type: String, required: true },
});

export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
