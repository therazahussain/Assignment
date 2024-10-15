import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { FaPlus } from 'react-icons/fa';
import EmployeesTable from './EmployeesTable';

const EmployeeComponent = () => {
  // Employee data state
  const [employees] = useState([
    { name: 'Raza Hussain Rizvi', position: 'Full Stack Developer' },
    { name: 'John Doe', position: 'Frontend Developer' },
    { name: 'Jane Smith', position: 'Backend Developer' },
    { name: 'Michael Johnson', position: 'UI/UX Designer' },
    { name: 'Sarah Wilson', position: 'Data Scientist' },
    { name: 'James Brown', position: 'DevOps Engineer' },
    { name: 'Chris Martin', position: 'QA Engineer' },
    { name: 'Elena Gilbert', position: 'Product Manager' },
    { name: 'Mark Ruffalo', position: 'System Administrator' },
    { name: 'Bruce Wayne', position: 'Security Analyst' },
    // Add more employees if needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[98%] h-[97vh] border-[0.25px] border-gray-300 bg-white rounded-lg m-2 px-8 py-4 flex flex-col gap-8">
      {/* heading section */}
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-bold">Employee Management</h2>
          <p className="text-sm text-gray-500 font-medium">
            Manage your Employees and their accounts
          </p>
        </div>

        <div className="flex items-center justify-center font-medium flex-col">
          <div className="rounded-full h-10 w-10 bg-blue-400 text-white font-semibold flex items-center justify-center">
            AD
          </div>
        </div>
      </div>

      {/* Employee Content */}
      <div className="w-full flex flex-col gap-4">
        {/* Employees heading */}
        <div className="flex items-center justify-between">
          <div className="flex font-bold text-base gap-2">
            <h2>All Employees</h2>
            <span className="text-gray-500">({filteredEmployees.length})</span>
          </div>

          <div className="flex items-center gap-4">
            <SearchBar setSearchQuery={setSearchQuery} />
            <button className="flex font-medium items-center justify-center text-white bg-black px-3 py-3 text-sm rounded-lg cursor-pointer gap-1">
              <FaPlus className="text-white" />
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* Pass filtered employees data to EmployeesTable */}
        <EmployeesTable employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default EmployeeComponent;
