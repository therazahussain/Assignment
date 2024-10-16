import React from 'react'
import EmployeeComponent from './EmployeeComponent'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen bg-gray-200 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-6xl'>
        <EmployeeComponent />
      </div>
    </div>
  )
}

export default Dashboard
