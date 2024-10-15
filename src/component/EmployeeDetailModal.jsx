import React, { useState } from 'react';
import UpdateEmployeeForm from './UpdateEmployeeForm';

const EmployeeDetailModal = ({ employee, onClose, onUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false); // State to track if we are updating

  if (!employee) return null; // If no employee is selected, do not render anything

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white border rounded-lg shadow-lg p-4 w-96 flex flex-col gap-3">
        <h3 className="text-lg font-bold mb-4">Employee Details</h3>
        <div className="flex flex-col gap-3">
          <div className='w-full flex'>
            <strong className="w-[35%]">Name:</strong> <p className="w-[70%]">{employee.name}</p>
          </div>
          <div className='w-full flex'>
            <strong className="w-[35%]">Position:</strong> <p className="w-[70%]">{employee.position}</p>
          </div>
          <div className='w-full flex'>
            <strong className="w-[35%]">Department:</strong> <p className="w-[70%]">{employee.department}</p>
          </div>
          <div className='w-full flex'>
            <strong className="w-[35%]">Email:</strong> <p className="w-[70%]">{employee.email}</p>
          </div>
          <div className='w-full flex'>
            <strong className="w-[35%]">Phone Number:</strong> <p className="w-[70%]">{employee.phoneNumber}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => setIsUpdating(true)} // Show update form
            className="bg-white text-black border-[1.5px] border-black px-2 py-1 rounded hover:bg-black hover:text-white transition"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-white text-red-500 border-[1.5px] border-red-500 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition"
          >
            Close
          </button>
        </div>
        {isUpdating && (
          <UpdateEmployeeForm 
            employee={employee} 
            onUpdate={(updatedEmployee) => {
              onUpdate(updatedEmployee); // Call the parent update function
              setIsUpdating(false); // Close the update form after updating
            }} 
            onClose={() => setIsUpdating(false)} // Close the update form
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeDetailModal;
