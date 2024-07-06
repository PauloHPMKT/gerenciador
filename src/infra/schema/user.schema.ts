import { User } from "domain/entities/User";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  registry: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: String,
    required: false,
    default: null,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

export const userSchema = mongoose.model('User', UserSchema);