import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlog extends Document {
  _id: string;
  title: string;
  content: string;
  organization: string;
  publish_date: string;
  status: string;
  type: string;
  metadata: {
    created_at: string;
    last_updated: string;
    is_active: boolean;
    slug: string;
  };
}

const BlogSchema: Schema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  organization: { type: String, required: true },
  publish_date: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  metadata: {
    created_at: { type: String, required: true },
    last_updated: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    slug: { type: String, required: true },
  },
});

export const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
