import * as Joi from 'joi';
import { IGender, IUserType } from '../entities/user.entity';

export const CreateUserSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  gender: Joi.string()
    .valid(...Object.values(IGender))
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string()
    .valid(...Object.values(IUserType))
    .required(),
});

export class CreateUserDto {
  readonly name: string;
  readonly age: number;
  readonly gender: IGender;
  readonly email: string;
  readonly password: string;
  readonly role: IUserType;
}
