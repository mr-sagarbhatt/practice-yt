import { Schema, model, Document } from 'mongoose'

interface User {
  userName: string
  password: string
}

export interface UserDocument extends Document, User {}

const userSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const UserModel = model<User>('ts-node-user', userSchema)
export default UserModel
