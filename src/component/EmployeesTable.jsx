import React, { useState } from 'react';

const EmployeesTable = ({ employees }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  // Calculate the indices for the current page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Calculate the total number of pages
  const totalPages = Math.ceil(employees.length / employeesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full rounded-lg">
      <div className="overflow-y-auto min-h-80 max-h-[20.01rem]">
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="w-[10%] px-6 py-3">S. No</th>
              <th scope="col" className="w-[30%] px-6 py-3">Employee name</th>
              <th scope="col" className="w-[30%] px-6 py-3">Position</th>
              <th scope="col" className="w-[20%] px-6 py-3">Full Profile</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee, index) => (
              <tr key={index} className="bg-white border-b last:border-none">
                <td className="px-6 py-4">{indexOfFirstEmployee + index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {employee.name}
                </td>
                <td className="px-6 py-4">{employee.position}</td>
                <td className="px-6 py-4">
                  <button className="flex font-medium items-center justify-center text-white bg-black px-4 py-2 text-sm rounded-lg cursor-pointer gap-2">
                    More Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-2 gap-2 pb-2">

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-[6px] py-[1px] text-grey-500 rounded-sm ${
              currentPage === index + 1 ? 'bg-gray-200 text-black' : 'bg-white'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeesTable;
