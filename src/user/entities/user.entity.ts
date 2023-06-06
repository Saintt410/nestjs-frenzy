import { Document } from 'mongoose';

// export type IUser = IAdminUser | IUserUser;

export interface IUser extends Document {
  name: string;
  age: number;
  gender: IGender;
  email: string;
  password: string;
  role: IUserType;
  _doc: Omit<IUser, keyof Document | '_doc'>;
}

export interface IBaseUser extends Document {
  email: string;
  password: string;
  role: IUserType;
}

export enum IGender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
}

export enum IUserType {
  Admin = 'ADMIN',
  User = 'USER',
}

export interface IAdminUser extends IBaseUser {
  role: IUserType.Admin;
}

export interface IUserUser extends IBaseUser {
  role: IUserType.User;
  name: string;
  age: number;
  gender: string;
}