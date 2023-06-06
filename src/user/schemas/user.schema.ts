import * as mongoose from 'mongoose';
import { IGender, IUser, IUserType } from '../entities/user.entity';

export const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: IGender,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: IUserType,
  },
});
