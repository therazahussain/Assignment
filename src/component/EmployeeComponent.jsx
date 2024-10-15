import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaPlus } from "react-icons/fa";
import EmployeesTable from "./EmployeesTable";
import EmployeeForm from "./EmployeeForm";
import EmployeeDetailModal from "./EmployeeDetailModal"; // Import the new modal
import EmployeesApis from "../api/employeeAPI";
import LoadingSvg from "./LoadingSvg";

const EmployeeComponent = () => {
  const { fetchEmployees } = EmployeesApis();
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  useEffect(() => {
    fetchEmployees(setEmployees, setLoadingEmployees);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // New state for selected employee

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee
  };

  const handleCloseDetails = () => {
    setSelectedEmployee(null); // Close the detail modal
  };

  return (
    <div className="w-[90%] h-[97vh] bg-white rounded-lg m-2 px-8 py-4 flex flex-col gap-8 relative">
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
            <button
              className="flex font-medium items-center justify-center text-white bg-black px-3 py-3 text-sm rounded-lg cursor-pointer gap-1"
              onClick={() => setFormVisible(true)} // Show the form when button is clicked
            >
              <FaPlus className="text-white" />
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* Pass filtered employees data to EmployeesTable */}
        {loadingEmployees ? (
          <LoadingSvg />
        ) : employees.length > 0 ? (
          <EmployeesTable
            employees={filteredEmployees}
            onViewDetails={handleViewDetails}
          />
        ) : (
          <div className="flex items-center justify-center font-semibold mt-4">
            No Employees Found
          </div>
        )}

        {/* Show the EmployeeForm as a modal if isFormVisible is true */}
        {isFormVisible && (
          <EmployeeForm
            onAddEmployee={handleAddEmployee}
            onClose={() => setFormVisible(false)} // Close form on cancellation
          />
        )}

        {/* Show the EmployeeDetailModal if an employee is selected */}
        {selectedEmployee && (
          <EmployeeDetailModal
            employee={selectedEmployee}
            onClose={handleCloseDetails} // Close details modal
          />
        )}
      </div>
    </div>
  );
};

export default EmployeeComponent;
