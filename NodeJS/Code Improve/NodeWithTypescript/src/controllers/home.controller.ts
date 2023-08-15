import { Request, Response } from 'express'

interface Name {
  firstName: string
  lastName: string
}

// ? Define req.query types
// 1. Using Genetic Request Interface
// 2. Type cast query params

// Pass these interfaces in Request Interface
interface ReqParams {}

interface ReqBody {}

interface ResBody {}

interface ReqQuery extends Name {}
//  {
//   firstName: string
//   lastName: string
// }

// * With Type
// type typeFullName = (obj: Name) => string
// const getFullName: typeFullName = ({ firstName = 'test', lastName = 'test' }) => {
//   return `${firstName} ${lastName}`
// }

// * Without Type
const getFullName = ({ firstName = 'test', lastName = 'test' }: Name): string => {
  return `${firstName} ${lastName}`
}

// 1. Using Genetic Request Interface
const getHome = (req: Request<ReqParams, ReqBody, ResBody, ReqQuery>, res: Response): void => {
  // 1. Using Genetic Request Interface
  // const { firstName, lastName } = req.query

  // 2. Type cast query params
  const firstName = req.query.firstName as string
  const lastName = req.query.lastName as string

  const fullName = getFullName({ firstName, lastName })
  res.json({
    message: 'Home Page',
    fullName,
  })
}

export { getHome }
