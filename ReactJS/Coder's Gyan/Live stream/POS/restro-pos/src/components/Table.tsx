import React from 'react'
import { TABLE_STATUS } from '../enums'

interface ITableProps {
  tableNumber: number
  status: string
}

const Table = ({ tableNumber, status }: ITableProps) => {
  return (
    <div
      className={`${
        status === TABLE_STATUS.AVAILABLE ? 'bg-green-900' : 'bg-gray-700'
      } p-4 text-center text-white rounded`}
    >
      <h3 className="text-2xl">{tableNumber}</h3>
      <div>{status}</div>
    </div>
  )
}

export default Table
