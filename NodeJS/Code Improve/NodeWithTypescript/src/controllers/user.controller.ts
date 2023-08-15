import { Request, Response } from 'express'
import { getUsers, createUser, findUser, updateUser, deleteUser } from '../services/user.service'

const getUserDetails = async (req: Request, res: Response) => {
  const users = await getUsers()
  res.json({
    users,
  })
}

export { getUserDetails }
