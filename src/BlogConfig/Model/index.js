import mongoose from "mongoose";

const AppBarListItem = new mongoose.Schema({
  to: String,
  label: String,

  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const HomeMainCards = new mongoose.Schema({
  background: String,
  description: String,

  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const Newsletter = new mongoose.Schema({
  icon: String,
  placeholder: String,
  button: String,
  title: String,
  subtitle: String,
  icon: String,

  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const BlogConfigSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: false,
  },
  siteName: {
    type: String,
    required: false,
  },
  appBarListItems: {
    type: [AppBarListItem],
  },
  newsletter: {
    type: Newsletter,
  },
  homeMainCards: {
    type: [HomeMainCards],
  },

  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const BlogConfig = mongoose.model("BlogConfig", BlogConfigSchema);
export default BlogConfig;
