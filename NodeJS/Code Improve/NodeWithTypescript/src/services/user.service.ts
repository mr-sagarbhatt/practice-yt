import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model'

const getUsers = async () => {
  return await UserModel.find()
}

const createUser = async (input: UserDocument) => {
  return await UserModel.create(input)
}

const findUser = async (query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) => {}

const updateUser = async (
  query: FilterQuery<UserDocument>,
  update: UpdateQuery<UserDocument>,
  options: QueryOptions,
) => {
  return await UserModel.findOneAndUpdate(query, update, options)
}

const deleteUser = async (query: FilterQuery<UserDocument>) => {
  return await UserModel.findOneAndDelete(query)
}

export { getUsers, createUser, findUser, updateUser, deleteUser }
