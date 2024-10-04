import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOpportunity extends Document {
  _id: string;
  title: string;
  company: string;
  date: string;
  url: string;
  description: string;
  type: string;
  metadata: {
    created_at: string;
    last_updated: string;
    active: boolean;
  };
}

const OpportunitySchema: Schema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  date: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  metadata: {
    created_at: String,
    last_updated: String,
    active: Boolean,
  },
});

export const Event: Model<IOpportunity> =
  mongoose.models.Event ||
  mongoose.model<IOpportunity>("Opportunity", OpportunitySchema);
