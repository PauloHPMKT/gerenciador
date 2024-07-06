import { User } from "domain/entities/User";
import mongoose, { Schema } from "mongoose";

export interface UserProps {
  name: string;
  email: string;
  registry: string;
  password: string;
  confirmPassword: string;
  role: User.Role;
  avatar: string;
  createdAt: Date;
}

const UserSchema = new Schema<UserProps>({
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